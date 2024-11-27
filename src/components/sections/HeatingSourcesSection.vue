<script setup>
import { ref, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';
import TypeSelector from '../TypeSelector.vue';
import { useFormStore } from '../../stores/formStore';

const { formData } = useFormStore();

const hasBoiler = ref(false);
const selectedFuels = ref([]);
const fuelConsumptionAmounts = ref({});

const fuelOptions = [
	{ id: 'coal', label: 'Uhlí', icon: '🚂' },
	{ id: 'gas', label: 'Zemní plyn', icon: '🔥' },
	{ id: 'wood', label: 'Dřevo', icon: '🌳' },
	{ id: 'oil', label: 'Lehký topný olej', icon: '💧' }
];

const units = {
	oil: 'l/rok',
	gas: 'Nm³/rok',
	coal: 't/rok',
	wood: 't/rok'
};

const toggleSource = (sourceArray, sourceAmounts, sourceId) => {
	if (sourceArray.includes(sourceId)) {
		sourceArray.splice(sourceArray.indexOf(sourceId), 1);
		delete sourceAmounts[sourceId];
	} else {
		sourceArray.push(sourceId);
		sourceAmounts[sourceId] = '';
	}
};

// Watch for Changes to Boiler and Fuel Data
watch(
	[hasBoiler, selectedFuels, fuelConsumptionAmounts],
	() => {
		formData.heatingSources.selectedFuels = selectedFuels.value;
		formData.heatingSources.fuelConsumptionAmounts = fuelConsumptionAmounts.value;
	}, { deep: true }
);
</script>

<template>
	<div class="max-w-4xl mx-auto p-6">
		<h2 class="text-2xl text-gray-900 mb-4">Vlastní zdroje topení a vytápění</h2>
		<p class="text-gray-600 mb-8">
			Máte kotelnu, kterou využíváte pro vytápění prostor nebo provoz technologie? Pokud ano,
			vyberte palivo a zadejte spotřebu.
		</p>

		<div class="mb-8">
			<h3 class="text-xl font-semibold">Máte vlastní kotelnu?</h3>
			<div class="flex gap-8 mt-4">
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="hasBoiler" :value="true" /> Ano
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="hasBoiler" :value="false" /> Ne
				</label>
			</div>
		</div>

		<div v-if="hasBoiler">
			<div class="mb-8">
				<TypeSelector
					:modelValue="selectedFuels"
					@update:modelValue="(value) => toggleSource(selectedFuels, fuelConsumptionAmounts, value)"
					:energyTypes="fuelOptions"
				/>
			</div>
		</div>

		<div v-for="fuel in selectedFuels" :key="fuel" class="mb-8">
			<InputWithUnit
				:label="`Množství ${fuelOptions.find(f => f.id === fuel).label}`"
				v-model="fuelConsumptionAmounts[fuel]"
				:unit="units[fuel]"
			/>
		</div>
	</div>
</template>

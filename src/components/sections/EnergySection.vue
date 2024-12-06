<script setup>
import { ref, watch } from 'vue';
import { useFormStore } from '../../stores/formStore';
import InputWithUnit from '../InputWithUnit.vue';
import TypeSelector from '../TypeSelector.vue';

// Use Pinia store
const { formData } = useFormStore();

// Local component state
const annualConsumption = ref(formData.energy.annualConsumption || '');
const selectedEnergyType = ref(formData.energy.selectedEnergyType || 'regular');
const sourceTypeValues = ref(formData.energy.sourceTypeValues || {
	photovoltaic: '',
	biomass: '',
	wind: '',
	water: '',
	nuclear: ''
});

// Constants for UI
const sourceTypeLabels = {
	photovoltaic: 'Fotovoltaika',
	biomass: 'Biomasa / bioplyn',
	wind: 'Vítr',
	water: 'Voda',
	nuclear: 'Jádro'
};

const energyTypes = [
	{ id: 'regular', label: 'Běžná elektřina', icon: '🔌' },
	{ id: 'green', label: 'Zelený tarif', icon: '🌿' },
	{ id: 'guaranteed', label: 'Záruky původu', icon: '🤝' }
];

const validateForm = () => {
	if (annualConsumption.value === '' || selectedEnergyType.value === '') {
		alert('Vyplňte prosím všechny povinné údaje.');
		return false;
	}
	return true;
}

// Watch for changes and update store
watch([annualConsumption, selectedEnergyType, sourceTypeValues], () => {
	formData.energy.annualConsumption = annualConsumption.value;
	formData.energy.selectedEnergyType = selectedEnergyType.value;
	formData.energy.sourceTypeValues = sourceTypeValues.value;
}, { deep: true });
</script>

<template>
	<div class="max-w-4xl mx-auto p-6">
		<h2 class="text-2xl text-gray-900 mb-4">Nakupovaná elektrická energie</h2>
		<p class="text-gray-600 mb-8">
			Zadejte roční spotřebu a původ elektřiny. Pokud ji neznáte, podívejte se do posledního
			vyúčtování.
		</p>

		<div class="mb-8">
			<InputWithUnit
				label="Kolik elektřiny nakupujete?"
				v-model="annualConsumption"
				unit="MWh / rok"
				:required="True"
				:min="1"
			/>
		</div>

		<div class="mb-8">
			<h3 class="text-lg font-semibold">Jakou elektřinu odebíráte?</h3>
			<TypeSelector v-model="selectedEnergyType" :energyTypes="energyTypes" />
		</div>

		<div v-if="selectedEnergyType === 'guaranteed'" class="mb-8">
			<div v-for="(label, source) in sourceTypeLabels" :key="source" class="mb-4">
				<InputWithUnit :label="label" v-model="sourceTypeValues[source]" unit="MWh / rok" :min="1" />
			</div>
		</div>
		<div class="flex">
			<button
				@click="validateForm() && $router.push('/heat')"
				class="block mx-auto py-2 px-4 bg-blue-500 text-white border-none rounded cursor-pointer text-xl hover:bg-blue-700"
			>
				Pokračovat
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';
import TypeSelector from '../TypeSelector.vue';

const props = defineProps({
	modelValue: Object,
});

const emit = defineEmits(['update:modelValue']);

// Heat Section Data
const useHeat = ref(false);
const selectedHeatSources = ref([]);
const heatSourceAmounts = reactive({});

// Steam Section Data
const useSteam = ref(false);
const selectedSteamSources = ref([]);
const steamSourceAmounts = reactive({});

const sourceOptions = [
	{ id: "biomass", label: "Biomasa / Bioplyn", icon: "🌿" },
	{ id: "gas", label: "Zemní plyn", icon: "🔥" },
	{ id: "coal", label: "Uhlí", icon: "⚫" },
	{ id: "unknown", label: "Neznám zdroj", icon: "❓" },
];

const toggleSource = (sourceArray, sourceAmounts, sourceId) => {
	if (sourceArray.includes(sourceId)) {
		sourceArray.splice(sourceArray.indexOf(sourceId), 1);
		delete sourceAmounts[sourceId];
	} else {
		sourceArray.push(sourceId);
		sourceAmounts[sourceId] = '';
	}
};

// Watch for Changes to Heat and Steam Data
watch(
	[useHeat, selectedHeatSources, heatSourceAmounts, useSteam, selectedSteamSources, steamSourceAmounts],
	() => {
		const updatedModelValue = {
			...props.modelValue,
			heat: useHeat.value
				? {
						sources: selectedHeatSources.value,
						amounts: { ...heatSourceAmounts },
					}
				: null, // Remove heat data if not used
			steam: useSteam.value
				? {
						sources: selectedSteamSources.value,
						amounts: { ...steamSourceAmounts },
					}
				: null, // Remove steam data if not used
		};

		emit('update:modelValue', updatedModelValue);
	},
	{ deep: true }
);
</script>

<template>
	<div class="max-w-4xl mx-auto p-8">
		<h2 class="text-2xl text-gray-900 mb-4">Nakupované teplo a pára</h2>
		<p class="text-gray-600 mb-8">
			Odebíráte teplo nebo páru od dodavatele? Pokud ano, vyberte zdroj a množství.
		</p>

		<!-- Heat Section -->
		<div class="mb-8">
			<h3 class="text-xl font-semibold">Odebíráte teplo od dodavatele?</h3>
			<div class="flex gap-8 mt-4">
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useHeat" :value="true" /> Ano
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useHeat" :value="false" /> Ne
				</label>
			</div>
		</div>

		<div v-if="useHeat" class="mb-8">
			<h3 class="text-xl font-semibold">Vyberte zdroj(e)</h3>
			<TypeSelector
				:modelValue="selectedHeatSources"
				@update:modelValue="(value) => toggleSource(selectedHeatSources, heatSourceAmounts, value)"
				:energyTypes="sourceOptions"
			/>
			<br />
			<div v-for="sourceId in selectedHeatSources" :key="sourceId" class="mt-4">
				<InputWithUnit
					:modelValue="heatSourceAmounts[sourceId]"
					@update:modelValue="(value) => (heatSourceAmounts[sourceId] = value)"
					:label="`Množství ${sourceOptions.find((s) => s.id === sourceId).label}`"
					unit="MWh / rok"
				/>
			</div>
		</div>

		<!-- Steam Section -->
		<div class="mb-8">
			<h3 class="text-xl font-semibold">Odebíráte páru od dodavatele?</h3>
			<div class="flex gap-8 mt-4">
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useSteam" :value="true" /> Ano
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useSteam" :value="false" /> Ne
				</label>
			</div>
		</div>

		<div v-if="useSteam" class="mb-8">
			<h3 class="text-xl font-semibold">Vyberte zdroj(e)</h3>
			<TypeSelector
				:modelValue="selectedSteamSources"
				@update:modelValue="(value) => toggleSource(selectedSteamSources, steamSourceAmounts, value)"
				:energyTypes="sourceOptions"
			/>
			<br />
			<div v-for="sourceId in selectedSteamSources" :key="sourceId" class="mt-4">
				<InputWithUnit
					:modelValue="steamSourceAmounts[sourceId]"
					@update:modelValue="(value) => toggleSource(selectedSteamSources, steamSourceAmounts, value)"
					:label="`Množství ${sourceOptions.find((s) => s.id === sourceId).label}`"
					unit="MWh / rok"
				/>
			</div>
		</div>
	</div>
</template>

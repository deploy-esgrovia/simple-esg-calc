<script setup>
import { ref, reactive, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';
import TypeSelector from '../TypeSelector.vue';
import { useFormStore } from '../../stores/formStore';

// Use Pinia store
const { formData } = useFormStore();

// Heat Section Data
const useHeat = ref(formData.heat.useHeat || false);
const selectedHeatSources = ref(formData.heat.selectedHeatSources || []);
const heatSourceAmounts = reactive(formData.heat.heatSourceAmounts || {});

// Steam Section Data
const useSteam = ref(formData.heat.useSteam || false);
const selectedSteamSources = ref(formData.heat.selectedSteamSources || []);
const steamSourceAmounts = reactive(formData.heat.steamSourceAmounts || {});

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
		formData.heat.useHeat = useHeat.value;
		formData.heat.heatSourceAmounts = heatSourceAmounts;
		formData.heat.useSteam = useSteam.value;
		formData.heat.steamSourceAmounts = steamSourceAmounts;
	},
	{ deep: true }
);
</script>

<template>
	<div class="max-w-4xl mx-auto p-6">
		<h2 class="text-2xl text-gray-900 mb-4">Nakupované teplo a pára</h2>
		<p class="text-gray-600 mb-8">
			Odebíráte teplo nebo páru od dodavatele? Pokud ano, vyberte zdroj a množství.
		</p>

		<!-- Heat Section -->
		<div class="mb-8">
			<h3 class="text-xl font-semibold">Odebíráte teplo od dodavatele?</h3>
			<div class="flex gap-8 mt-4">
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useHeat" :value="true" class="form-radio" /> Ano
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useHeat" :value="false" class="form-radio" /> Ne
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
					<input type="radio" v-model="useSteam" :value="true" class="form-radio" /> Ano
				</label>
				<label class="flex items-center gap-2 cursor-pointer">
					<input type="radio" v-model="useSteam" :value="false" class="form-radio" /> Ne
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
					@update:modelValue="(value) => (steamSourceAmounts[sourceId] = value)"
					:label="`Množství ${sourceOptions.find((s) => s.id === sourceId).label}`"
					unit="MWh / rok"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';

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
	<div class="heat-section">
		<h2 class="section-title">Nakupované teplo a pára</h2>
		<p class="section-description">
			Odebíráte teplo nebo páru od dodavatele? Pokud ano, vyberte zdroj a množství.
		</p>

		<!-- Heat Section -->
		<div class="form-group">
			<h3>Odebíráte teplo od dodavatele?</h3>
			<div class="radio-group">
				<label> <input type="radio" v-model="useHeat" :value="true" /> Ano </label>
				<label> <input type="radio" v-model="useHeat" :value="false" /> Ne </label>
			</div>
		</div>

		<div v-if="useHeat" class="source-selection">
			<h3>Vyberte zdroj(e)</h3>
			<div class="sources-grid">
				<div
					v-for="source in sourceOptions"
					:key="source.id"
					class="source-option"
					:class="{ selected: selectedHeatSources.includes(source.id) }"
					@click="toggleSource(selectedHeatSources, heatSourceAmounts, source.id)"
				>
					<span class="source-icon">{{ source.icon }}</span>
					<span class="source-label">{{ source.label }}</span>
				</div>
			</div>
			<br />
			<div v-for="sourceId in selectedHeatSources" :key="sourceId" class="amount-input">
				<InputWithUnit
					:modelValue="heatSourceAmounts[sourceId]"
					@update:modelValue="(value) => heatSourceAmounts[sourceId] = value"
					:label="`Množství ${sourceOptions.find(s => s.id === sourceId).label}`"
					unit="MWh / rok"
				/>
			</div>
		</div>

		<!-- Steam Section -->
		<div class="form-group">
			<h3>Odebíráte páru od dodavatele?</h3>
			<div class="radio-group">
				<label> <input type="radio" v-model="useSteam" :value="true" /> Ano </label>
				<label> <input type="radio" v-model="useSteam" :value="false" /> Ne </label>
			</div>
		</div>

		<div v-if="useSteam" class="source-selection">
			<h3>Vyberte zdroj(e)</h3>
			<div class="sources-grid">
				<div
					v-for="source in sourceOptions"
					:key="source.id"
					class="source-option"
					:class="{ selected: selectedSteamSources.includes(source.id) }"
					@click="toggleSource(selectedSteamSources, steamSourceAmounts, source.id)"
				>
					<span class="source-icon">{{ source.icon }}</span>
					<span class="source-label">{{ source.label }}</span>
				</div>
			</div>
			<br />
			<div v-for="sourceId in selectedSteamSources" :key="sourceId" class="amount-input">
				<InputWithUnit
					:modelValue="steamSourceAmounts[sourceId]"
					@update:modelValue="(value) => steamSourceAmounts[sourceId] = value"
					:label="`Množství ${sourceOptions.find(s => s.id === sourceId).label}`"
					unit="MWh / rok"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.heat-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-description {
  color: #666;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 2rem;
}

.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.sources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.source-option {
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
}

.source-option:hover {
  border-color: #4169E1;
}

.source-option.selected {
  border-color: #4169E1;
  background-color: #f0f4ff;
}

.source-icon {
  font-size: 1.5rem;
}

.source-label {
  font-weight: 500;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.back-button,
.continue-button {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.back-button {
  background-color: #e0e0e0;
  color: #666;
}

.continue-button {
  background-color: #4169E1;
  color: white;
}

.back-button:hover {
  background-color: #d0d0d0;
}

.continue-button:hover {
  background-color: #3158d3;
}
</style>

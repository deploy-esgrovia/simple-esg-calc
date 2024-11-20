<script setup>
import { ref, reactive } from 'vue';
import sourceOptions from '../../options/heatSourceOptions.js';
import InputWithUnit from '../InputWithUnit.vue';

const useHeat = ref(false);
const heatSources = ref([]);
const heatSourceAmounts = reactive({}); // Declare as reactive object

const useSteam = ref(false);
const steamSources = ref([]);
const steamSourceAmounts = reactive({}); // Declare as reactive object

const toggleSource = (sourceArray, sourceAmounts, sourceId) => {
  if (sourceArray.includes(sourceId)) {
    // Remove the source and delete its amount entry
    sourceArray.splice(sourceArray.indexOf(sourceId), 1);
    delete sourceAmounts[sourceId];
  } else {
    // Add the source and initialize its amount
    sourceArray.push(sourceId);
    sourceAmounts[sourceId] = ''; // Initialize with an empty string or default value
  }
};
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
					:class="{ selected: heatSources.includes(source.id) }"
					@click="toggleSource(heatSources, heatSourceAmounts, source.id)"
				>
					<span class="source-icon">{{ source.icon }}</span>
					<span class="source-label">{{ source.label }}</span>
				</div>
			</div>
			<div v-for="sourceId in heatSources" :key="sourceId" class="amount-input">
				<InputWithUnit
					:modelValue="heatSourceAmounts[sourceId]"
					@update:modelValue="(value) => heatSourceAmounts[sourceId] = value"
					label="Množství tepelné energie"
					unit="MWh"
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
					:class="{ selected: steamSources.includes(source.id) }"
					@click="toggleSource(steamSources, steamSourceAmounts, source.id)"
				>
					<span class="source-icon">{{ source.icon }}</span>
					<span class="source-label">{{ source.label }}</span>
				</div>
			</div>
			<div v-for="sourceId in steamSources" :key="sourceId" class="amount-input">
				<InputWithUnit
					:modelValue="steamSourceAmounts[sourceId]"
					@update:modelValue="(value) => steamSourceAmounts[sourceId] = value"
					label="Množství"
					unit="MWh"
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

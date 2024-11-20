<script setup>
import { ref } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';
import TypeSelector from '../TypeSelector.vue';

const annualConsumption = ref('');
const selectedEnergyType = ref('regular');

const sourceTypeLabels = {
	photovoltaic: "Fotovoltaika",
	biomass: "Biomasa / bioplyn",
	wind: "Vítr",
	water: "Voda",
	nuclear: "Jádro",
};

const energyTypes = [
	{
		id: "regular",
		label: "Běžná elektřina",
		icon: "🔌",
	},
	{
		id: "green",
		label: "Zelený tarif",
		icon: "🌿",
	},
	{
		id: "guaranteed",
		label: "Záruky původu",
		icon: "🤝",
	},
];
</script>

<template>
	<div class="energy-section">
		<h2 class="section-title">Nakupovaná elektrická energie</h2>
		<p class="section-description">
			Zadejte roční spotřebu a původ elektřiny. Pokud ji neznáte, podívejte se do posledního
			vyúčtování.
		</p>

		<div class="form-group">
			<InputWithUnit
				label="Kolik elektřiny nakupujete?"
				v-model="annualConsumption"
				unit="MWh / rok"
				:error="annualConsumption === ''"
				error-message="Vyplňte prosím roční spotřebu elektřiny."
			/>
		</div>

		<div class="form-group">
			<h3>Jakou elektřinu odebíráte?</h3>
			<TypeSelector v-model="selectedEnergyType" :energyTypes="energyTypes" />
		</div>

		<div v-if="selectedEnergyType === 'guaranteed'" class="form-group">
			<div v-for="source in sourceTypeLabels" :key="source">
				<InputWithUnit :label="source" unit="MWh / rok" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.energy-section {
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

.navigation-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.continue-button {
  background-color: #4169E1;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.continue-button:hover {
  background-color: #3158d3;
}
</style>

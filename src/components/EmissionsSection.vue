<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import InputWithUnit from './InputWithUnit.vue';

const store = useStore();

const hasEmissions = ref(false);
const emissions = ref({
  co2: '',
  ch4: '',
  nf3: '',
  n2o: '',
  sf6: '',
  r23: '',
  r32: '',
  r125: ''
});

const emissionTypes = [
  { id: 'co2', label: 'Oxid uhličitý/CO₂' },
  { id: 'ch4', label: 'Metan/CH₄' },
  { id: 'nf3', label: 'Fluorid dusitý/NF₃' },
  { id: 'n2o', label: 'Oxid dusný/N₂O' },
  { id: 'sf6', label: 'Fluorid sírový/SF₆' },
  { id: 'r23', label: 'R-23/Fluoroform' },
  { id: 'r32', label: 'R-32/Difluormethan' },
  { id: 'r125', label: 'R-125/Pentafluorethan' }
];

const saveData = () => {
  store.dispatch('saveEmissionsData', {
    hasEmissions: hasEmissions.value,
    emissions: emissions.value
  });
};
</script>

<template>
	<div class="emissions-section">
		<h2 class="section-title">Skleníkové plyny a další emise</h2>
		<p class="section-description">
			Jestli produkujete během výroby nějaké další přímé emise, vyberte je a zadejte objem.
		</p>

		<div class="form-group">
			<h3>Produkujete další emise?</h3>
			<div class="radio-group">
				<label> <input type="radio" v-model="hasEmissions" :value="true" /> Ano </label>
				<label> <input type="radio" v-model="hasEmissions" :value="false" /> Ne </label>
			</div>
		</div>

		<div v-if="hasEmissions" class="emissions-list">
			<h3>Seznam látek</h3>
			<p class="helper-text">Vyplňte hodnoty pouze pro vyprodukované látky.</p>

			<div v-for="emission in emissionTypes" :key="emission.id" class="emission-input">
				<InputWithUnit
					:label="emission.label"
					v-model="emissions[emission.id]"
					unit="kg / rok"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.emissions-section {
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

.helper-text {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.emissions-list {
  margin-top: 2rem;
}

.emission-input {
  margin-bottom: 1rem;
}
</style>

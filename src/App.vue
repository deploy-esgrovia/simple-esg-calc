<script setup>
import { reactive } from 'vue';
import EnergySection from './components/sections/EnergySection.vue';
import HeatSection from './components/sections/HeatSection.vue';
import HeatingSourcesSection from './components/sections/HeatingSourcesSection.vue';
import VehicleSection from './components/sections/VehicleSection.vue';
import EmissionsSection from './components/sections/EmissionsSection.vue';
import CompanyInfoSection from './components/sections/CompanyInfoSection.vue';

const formData = reactive({
  energy: {},
  heat: {},
  heatingSources: {},
  vehicles: {},
  emissions: {},
  companyInfo: {}
});

const handleSubmit = () => {
	const rawFormData = JSON.parse(JSON.stringify(formData));
	console.log('Submit: ', rawFormData);
};
</script>

<template>
	<div class="app">
		<h1>Výpočet uhlíkové stopy</h1>
		<div class="form-container">
			<EnergySection v-model="formData.energy" />
			<div class="section-divider"></div>
			<HeatSection v-model="formData.heat" />
			<div class="section-divider"></div>
			<HeatingSourcesSection v-model="formData.heatingSources" />
			<div class="section-divider"></div>
			<VehicleSection v-model="formData.vehicles" />
			<div class="section-divider"></div>
			<EmissionsSection v-model="formData.emissions" />
			<div class="section-divider"></div>
			<CompanyInfoSection v-model="formData.companyInfo" />
		</div>
		<div>
			<button @click="handleSubmit" class="submit-button">Submit</button>
		</div>
	</div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.section-divider {
	height: 2px;
	background-color: grey;
	margin: 2rem 0;
	border-radius: 1px;
	opacity: 0.7;
}

.submit-button {
	display: block;
	margin: 2rem auto;
	padding: 1rem 2rem;
	background-color: #007bff; /* Primary color */
	color: #ffffff; /* Text on primary color */
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	font-size: larger;
}

.submit-button:hover {
	background-color: #0056b3; /* Primary color hover */
}
</style>

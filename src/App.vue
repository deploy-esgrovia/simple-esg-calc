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
	<div class="max-w-5xl mx-auto p-8">
		<h1 class="text-center text-3xl font-bold text-primary mb-8">Výpočet uhlíkové stopy</h1>
		<div class="max-w-4xl mx-auto">
			<EnergySection v-model="formData.energy" />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<HeatSection v-model="formData.heat" />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<HeatingSourcesSection v-model="formData.heatingSources" />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<VehicleSection v-model="formData.vehicles" />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<EmissionsSection v-model="formData.emissions" />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<CompanyInfoSection v-model="formData.companyInfo" />
		</div>
		<div>
			<button
				@click="handleSubmit"
				class="block mx-auto my-8 py-3 px-8 bg-blue-500 text-white border-none rounded cursor-pointer text-xl hover:bg-blue-700"
			>
				Submit
			</button>
		</div>
	</div>
</template>

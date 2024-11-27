<script setup>
import { useFormStore } from './stores/formStore';
import EnergySection from './components/sections/EnergySection.vue';
import HeatSection from './components/sections/HeatSection.vue';
import HeatingSourcesSection from './components/sections/HeatingSourcesSection.vue';
import VehicleSection from './components/sections/VehicleSection.vue';
import EmissionsSection from './components/sections/EmissionsSection.vue';
import CompanyInfoSection from './components/sections/CompanyInfoSection.vue';

const { formData } = useFormStore();

const handleSubmit = () => {
	const rawFormData = JSON.parse(JSON.stringify(formData));
	console.log('Submit: ', rawFormData);
};
</script>

<template>
	<div class="max-w-5xl mx-auto p-8">
		<h1 class="text-center text-3xl font-bold text-primary mb-8">Výpočet uhlíkové stopy</h1>
		<div class="max-w-4xl mx-auto">
			<EnergySection />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<HeatSection />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<HeatingSourcesSection />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<VehicleSection />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<EmissionsSection />
			<div class="h-0.5 bg-gray-500 my-8 rounded opacity-70"></div>
			<CompanyInfoSection />
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

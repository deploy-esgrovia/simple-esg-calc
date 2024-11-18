<script setup>
import EnergySection from './components/EnergySection.vue';
import HeatSection from './components/HeatSection.vue';
import HeatingSourcesSection from './components/HeatingSourcesSection.vue';
import VehicleSection from './components/VehicleSection.vue';
import EmissionsSection from './components/EmissionsSection.vue';
import CompanyInfoSection from './components/CompanyInfoSection.vue';
import ThemeToggle from './components/ThemeToggle.vue';

</script>

<template>
	<div class="app">
		<ThemeToggle />
		<h1>Výpočet uhlíkové stopy</h1>
		<div class="form-container">
			<EnergySection />
			<div class="section-divider"></div>
			<HeatSection />
			<div class="section-divider"></div>
			<HeatingSourcesSection />
			<div class="section-divider"></div>
			<VehicleSection />
			<div class="section-divider"></div>
			<EmissionsSection />
			<div class="section-divider"></div>
			<CompanyInfoSection />
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
  height: 1px;
  background-color: var(--divider-color);
  margin: 3rem 0;
}
</style>

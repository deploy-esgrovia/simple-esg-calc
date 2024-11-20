<script setup>
import { ref } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';

const vehicleData = ref({
  company: {
    benzin: '',
    nafta: '',
    cng: '',
    lpg: '',
    elektrina: ''
  },
  personal: {
    benzin: '',
    nafta: '',
    cng: '',
    lpg: '',
    elektrina: ''
  }
});

const fuelTypes = [
  { id: 'benzin', label: 'Benzín' },
  { id: 'nafta', label: 'Nafta' },
  { id: 'cng', label: 'CNG' },
  { id: 'lpg', label: 'LPG' },
  { id: 'elektrina', label: 'Elektřina' }
];
const fuelConsumption = [
  {
    id: 'benzin', label: 'l / rok'
  },
  {
    id: 'nafta', label: 'l / rok'
  },
  {
    id: 'cng', label: 'kg / rok'
  },
  {
    id: 'lpg', label: 'kg / rok'
  },
  {
    id: 'elektrina', label: 'MWh / rok'
  }
]

const machinesData = ref({
  company: {
    benzin: '',
    nafta: '',
    cng: '',
    lpg: '',
    elektrina: ''
  }
});
</script>

<template>
	<div class="vehicle-section">
		<h2 class="section-title">Automobily a stroje</h2>
		<p class="section-description">
			Jezdí ve firmě používáte auta nebo stroje, včetně aut z leasingu. Promítne se do
			spotřeby.
		</p>

		<div class="form-group">
			<h3>Osobní automobily</h3>
			<div class="fuel-inputs">
				<div v-for="fuel in fuelTypes" :key="fuel.id" class="fuel-input">
					<InputWithUnit
						:label="`Nájezd km na ${fuel.label.toLowerCase()}`"
						v-model="vehicleData.company[fuel.id]"
						unit="km / rok"
					/>
				</div>
			</div>
		</div>

		<div class="form-group">
			<h3>Nákladní automobily</h3>
			<div class="fuel-inputs">
				<div v-for="fuel in fuelTypes" :key="fuel.id" class="fuel-input">
					<InputWithUnit
						:label="`Nájezd km na ${fuel.label.toLowerCase()}`"
						v-model="vehicleData.personal[fuel.id]"
						unit="km / rok"
					/>
				</div>
			</div>
		</div>

		<div class="form-group">
			<h3>Stroje</h3>
			<div class="fuel-inputs">
				<div v-for="fuel in fuelTypes" :key="fuel.id" class="fuel-input">
					<InputWithUnit
						:label="`Nájezd hodin na ${fuel.label.toLowerCase()}`"
						v-model="machinesData.company[fuel.id]"
						:unit="fuelConsumption.find(consumption => consumption.id === fuel.id).label"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.vehicle-section {
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

.fuel-inputs {
  display: grid;
  gap: 1rem;
}

.fuel-input {
  width: 100%;
}
</style>

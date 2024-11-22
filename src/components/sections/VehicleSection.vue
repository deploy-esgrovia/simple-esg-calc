<script setup>
import { ref } from 'vue';
import MultiChoiceSelector from '../MultiChoiceSelector.vue';

// Stores for the form data
const vehicleData = ref({
  cars: {
    benzin: '',
    nafta: '',
    cng: '',
    lpg: '',
    elektrina: ''
  },
  trucks: {
    benzin: '',
    nafta: '',
    cng: '',
    lpg: '',
    elektrina: ''
  }
});

const machinesData = ref({
  machines: {
    benzin: '',
    nafta: '',
    cng: '',
    lpg: '',
    elektrina: ''
  }
});

// Input data for the components
const vehicleInputData = {
  totalMilage: {
    label: "Najeté kilometry",
    inputs: [
      { id: 'benzin', unit: 'km / rok', label: "Najeté km na benzín" },
      { id: 'nafta', unit: 'km / rok', label: "Najeté km na naftu" },
      { id: 'cng', unit: 'km / rok', label: "Najeté km na CNG" },
      { id: 'lpg', unit: 'km / rok', label: "Najeté km na LPG" },
      { id: 'elektrina', unit: 'km / rok', label: "Najeté km na elektřinu" }
    ]
  },
  fuelConsumption: {
    label: "Spotřebované palivo",
    inputs: [
      { id: 'benzin', unit: 'l / rok', label: "Spotřeba benzínu" },
      { id: 'nafta', unit: 'l / rok', label: "Spotřeba nafty" },
      { id: 'cng', unit: 'kg / rok', label: "Spotřeba CNG" },
      { id: 'lpg', unit: 'kg / rok', label: "Spotřeba LPG" },
      { id: 'elektrina', unit: 'MWh / rok', label: "Spotřeba elektřiny" }
    ]
  }
}

const machinedInputData = {
  fuelConsumption: {
    label: "Spotřebované palivo",
    inputs: [
      { id: 'benzin', unit: 'l / rok', label: "Spotřeba benzínu" },
      { id: 'nafta', unit: 'l / rok', label: "Spotřeba nafty" },
      { id: 'cng', unit: 'kg / rok', label: "Spotřeba CNG" },
      { id: 'lpg', unit: 'kg / rok', label: "Spotřeba LPG" },
      { id: 'elektrina', unit: 'MWh / rok', label: "Spotřeba elektřiny" }
    ]
  }
}
</script>

<template>
	<div>
		<MultiChoiceSelector title="Automobily" :categories="vehicleInputData" />
	</div>
	<div>
		<MultiChoiceSelector title="Nákladní auta" :categories="vehicleInputData" />
	</div>
	<div>
		<MultiChoiceSelector title="Stroje" :categories="machinedInputData" />
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

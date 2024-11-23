<script setup>
import { watch, defineProps, defineEmits, ref, reactive } from 'vue';
import MultiChoiceSelector from '../MultiChoiceSelector.vue';

// Input data for the components
const carsInputData = {
  totalMilage: {
    id: 'totalMilage',
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

const trucksInputData = {
  totalMilage: {
    id: 'totalMilage',
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

const machinesInputData = {
  fuelConsumption: {
    id: 'fuelConsumption',
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

// Props
const props = defineProps({
  modelValue: Object,
});

const emit = defineEmits(['update:modelValue']);

// Prepare the data for the MultiChoiceSelector components
const vehiclesSectionData = reactive({
  cars: props.modelValue.cars || {},
  trucks: props.modelValue.trucks || {},
  machines: props.modelValue.machines || {}
});

watch(
  [vehiclesSectionData],
  () => {
    const updatedModelValue = {
      cars: vehiclesSectionData.cars,
      trucks: vehiclesSectionData.trucks,
      machines: vehiclesSectionData.machines
    };
    emit('update:modelValue', updatedModelValue);
  },
  { deep: true }
);
</script>

<template>
	<h2>Automobily a stroje</h2>
	<p>Jestli ve firmě používáte auta nebo stroje, uveďte jaké, a doplňte informace o spotřebě.</p>
	<div>
		<MultiChoiceSelector
			title="Automobily"
			:categories="carsInputData"
			v-model="vehiclesSectionData.cars"
		/>
	</div>
	<div>
		<MultiChoiceSelector
			title="Nákladní auta"
			:categories="trucksInputData"
			v-model="vehiclesSectionData.trucks"
		/>
	</div>
	<div>
		<MultiChoiceSelector
			title="Stroje"
			:categories="machinesInputData"
			v-model="vehiclesSectionData.machines"
		/>
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

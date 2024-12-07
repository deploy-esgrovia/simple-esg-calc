<script setup>
import { watch, reactive } from 'vue';
import MultiChoiceSelector from '../MultiChoiceSelector.vue';
import { useFormStore } from '../../stores/formStore';

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

// Use pinia store
const { formData } = useFormStore();

// Prepare the data for the MultiChoiceSelector components
const vehiclesSectionData = reactive({
  cars: formData.vehicles.cars || {},
  trucks: formData.vehicles.trucks || {},
  machines: formData.vehicles.machines || {}
});

watch(
  [vehiclesSectionData],
  () => {
    formData.vehicles = vehiclesSectionData;
  },
  { deep: true }
);
</script>

<template>
	<div class="max-w-4xl mx-auto p-6">
		<h2 class="text-2xl text-gray-900 mb-4">Automobily a stroje</h2>
		<p class="text-gray-600 mb-8">
			Jestli ve firmě používáte auta nebo stroje, uveďte jaké, a doplňte informace o spotřebě.
		</p>
		<div class="mb-8">
			<MultiChoiceSelector
				title="Automobily"
				:categories="carsInputData"
				v-model="vehiclesSectionData.cars"
			/>
		</div>
		<div class="mb-8">
			<MultiChoiceSelector
				title="Nákladní auta"
				:categories="trucksInputData"
				v-model="vehiclesSectionData.trucks"
			/>
		</div>
		<div class="mb-8">
			<MultiChoiceSelector
				title="Stroje"
				:categories="machinesInputData"
				v-model="vehiclesSectionData.machines"
			/>
		</div>

		<div class="flex">
			<RouterLink
				to="/heating-sources"
				class="block mx-auto py-2 px-4 bg-blue-500 text-white border-none rounded cursor-pointer text-xl hover:bg-blue-700"
			>
				Zpět
			</RouterLink>
			<RouterLink
				to="/emissions"
				class="block mx-auto py-2 px-4 bg-blue-500 text-white border-none rounded cursor-pointer text-xl hover:bg-blue-700"
			>
				Pokračovat
			</RouterLink>
		</div>
	</div>
</template>

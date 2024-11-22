<script setup>
import { ref, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';

const props = defineProps({
  modelValue: Object,
});

const emit = defineEmits(['update:modelValue']);

const hasEmissions = ref(false);
const emissionsAmounts = ref({});

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

const additionalEmissionTypes = [
  { id: 'r134a', label: 'R-134a/Tetrafluorethan' },
  { id: 'r143a', label: 'R-143a/Trifluorethan' },
  { id: 'r152a', label: 'R-152a/Difluorethan' },
  { id: 'r227ea', label: 'R-227ea/Heptafluoropropan' },
  { id: 'r236fa', label: 'R-236fa/Hexafluoropropan' },
  { id: 'r14', label: 'R-14/Tetrafluormethan' },
  { id: 'r116', label: 'R-116/Hexafluorethan' }
];

const addedEmissions = ref([]);

// Add a new custom emission
const addEmission = () => {
  addedEmissions.value.push({ type: '', value: '' });
};

// Remove a custom emission
const removeEmission = (index) => {
  addedEmissions.value.splice(index, 1);
};

// Watch for changes in emissions-related data
watch(
  [hasEmissions, emissionsAmounts, addedEmissions],
  () => {
    const updatedModelValue = {
      ...props.modelValue,
      emissions: hasEmissions.value
        ? {
            predefined: { ...emissionsAmounts.value },
            custom: addedEmissions.value.filter(e => e.type && e.value),
          }
        : null,
    };

    emit('update:modelValue', updatedModelValue);
  },
  { deep: true }
);
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

			<!-- Predefined emissions -->
			<div v-for="emission in emissionTypes" :key="emission.id" class="emission-input">
				<InputWithUnit
					:label="emission.label"
					v-model="emissionsAmounts[emission.id]"
					unit="kg / rok"
				/>
			</div>

			<!-- Custom emissions -->
			<h3>Přidat další emise</h3>
			<div
				v-for="(customEmission, index) in addedEmissions"
				:key="index"
				class="custom-emission"
			>
				<select v-model="customEmission.type" class="custom-emission-type">
					<option disabled value="">Vyberte typ emisí</option>
					<option v-for="type in additionalEmissionTypes" :key="type.id" :value="type.id">
						{{ type.label }}
					</option>
				</select>
				<InputWithUnit
					v-if="customEmission.type"
					v-model="customEmission.value"
					unit="kg / rok"
				/>
				<button @click="removeEmission(index)" class="remove-button">Odebrat</button>
			</div>
			<button @click="addEmission" class="add-button">Přidat emisní typ</button>
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

.custom-emission {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.custom-emission-type {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button,
.remove-button {
  background-color: #4169E1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.add-button {
  margin-top: 1rem;
}

.remove-button {
  background-color: #dc3545;
}

.remove-button:hover {
  background-color: #c82333;
}
</style>

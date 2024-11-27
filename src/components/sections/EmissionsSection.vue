<script setup>
import { ref, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';
import { useFormStore } from '../../stores/formStore';

const { formData } = useFormStore();

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
    formData.emissions.predefined = emissionsAmounts.value;
    formData.emissions.custom = addedEmissions.value;
  }, { deep: true }
);
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl text-gray-900 mb-4">Skleníkové plyny a další emise</h2>
    <p class="text-gray-600 mb-8">
      Jestli produkujete během výroby nějaké další přímé emise, vyberte je a zadejte objem.
    </p>

    <div class="mb-8">
      <h3 class="text-xl font-semibold">Produkujete další emise?</h3>
      <div class="flex gap-8 mt-4">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="radio" v-model="hasEmissions" :value="true" /> Ano
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="radio" v-model="hasEmissions" :value="false" /> Ne
        </label>
      </div>
    </div>

    <div v-if="hasEmissions" class="mt-8">
      <h3 class="text-xl font-semibold">Seznam látek</h3>
      <p class="text-gray-600 text-sm mb-4">Vyplňte hodnoty pouze pro vyprodukované látky.</p>

      <!-- Predefined emissions -->
      <div v-for="emission in emissionTypes" :key="emission.id" class="mb-4">
        <InputWithUnit
          :label="emission.label"
          v-model="emissionsAmounts[emission.id]"
          unit="kg / rok"
        />
      </div>

      <!-- Custom emissions -->
      <h3 class="text-xl font-semibold mt-8">Přidat další emise</h3>
      <div
        v-for="(customEmission, index) in addedEmissions"
        :key="index"
        class="flex items-center gap-4 mb-4"
      >
        <select v-model="customEmission.type" class="flex-1 p-2 border border-gray-300 rounded">
          <option disabled value="">Vyberte typ emisí</option>
          <option v-for="type in additionalEmissionTypes" :key="type.id" :value="type.id">
            {{ type.label }}
          </option>
        </select>
        <InputWithUnit
          v-if="customEmission.type"
          v-model="customEmission.value"
          unit="kg / rok"
          class="mt-4"
        />
        <button @click="removeEmission(index)" class="bg-red-600 text-white px-4 py-2 rounded">
          Odebrat
        </button>
      </div>
      <button @click="addEmission" class="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Přidat emisní typ
      </button>
    </div>
  </div>
</template>

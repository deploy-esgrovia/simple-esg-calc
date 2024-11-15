<script setup>
const props = defineProps({
  sourceType: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const sourceLabels = {
  photovoltaic: 'Fotovoltaika',
  biomass: 'Biomasa / bioplyn',
  wind: 'Vítr',
  water: 'Voda',
  nuclear: 'Jádro'
};
</script>

<template>
  <div class="energy-source-input">
    <label class="source-label">{{ sourceLabels[sourceType] }}</label>
    <div class="input-container">
      <input
        type="number"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        class="source-input"
      />
      <span class="unit">MWh / rok</span>
    </div>
  </div>
</template>

<style scoped>
.energy-source-input {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.source-label {
  flex: 1;
  font-weight: 500;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.source-input {
  width: 120px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.unit {
  color: #666;
  font-size: 0.9rem;
}
</style>
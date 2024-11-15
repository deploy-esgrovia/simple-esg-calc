<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const energyTypes = [
  {
    id: 'regular',
    label: 'Běžná elektřina',
    icon: '🔌'
  },
  {
    id: 'green',
    label: 'Zelený tarif',
    icon: '🌿'
  },
  {
    id: 'guaranteed',
    label: 'Záruky původu',
    icon: '🤝'
  }
];
</script>

<template>
  <div class="energy-type-selector">
    <div
      v-for="type in energyTypes"
      :key="type.id"
      class="energy-type-option"
      :class="{ 'selected': modelValue === type.id }"
      @click="emit('update:modelValue', type.id)"
    >
      <span class="icon">{{ type.icon }}</span>
      <span class="label">{{ type.label }}</span>
    </div>
  </div>
</template>

<style scoped>
.energy-type-selector {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.energy-type-option {
  flex: 1;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.energy-type-option:hover {
  border-color: #4169E1;
}

.energy-type-option.selected {
  border-color: #4169E1;
  background-color: #f0f4ff;
}

.icon {
  font-size: 1.5rem;
}

.label {
  font-weight: 500;
  text-align: center;
}
</style>
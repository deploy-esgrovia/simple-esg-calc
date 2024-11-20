<script setup>
import sourceLabels from '../options/sourceLabelOptions';
const props = defineProps({
  sourceType: String,
  modelValue: [String, Number],
  unit: String,
});

const emit = defineEmits(['update:modelValue']);
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
      <span class="unit">{{ unit }}</span>
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

<script setup>
const props = defineProps({
  label: String,
  modelValue: [String, Number],
  unit: String,
  type: {
    type: String,
    default: 'number'
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="input-group">
		<label class="input-label">{{ label }}</label>
		<div class="input-with-unit">
			<input
				:type="type"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				class="input-field"
			/>
			<span class="unit">{{ unit }}</span>
		</div>
	</div>
</template>

<style scoped>
.input-group {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.input-with-unit {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-field {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.input-field.error {
  border-color: #dc3545;
}

.unit {
  color: #666;
  font-size: 0.9rem;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}
</style>

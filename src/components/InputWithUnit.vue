<script setup>
import { defineProps, defineEmits, computed } from 'vue';

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
  required: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number,
    default: null
  },
  max: {
    type: Number,
    default: null
  }
});

const emit = defineEmits(['update:modelValue']);

const isValid = computed(() => {
  let valid = true;

  // Required field validation
  if (props.required && (props.modelValue === '' || props.modelValue === null || props.modelValue === undefined)) {
    valid = false;
  }

  // Type validation for numbers
  if (props.type === 'number' && isNaN(props.modelValue)) {
    valid = false;
  }

  // Minimum value validation
  if (props.min !== null && parseFloat(props.modelValue) < props.min) {
    valid = false;
  }

  // Maximum value validation
  if (props.max !== null && parseFloat(props.modelValue) > props.max) {
    valid = false;
  }

  return valid;
});

const getErrorMessage = computed(() => {
  if (props.required && (props.modelValue === '' || props.modelValue === null || props.modelValue === undefined)) {
    return 'Toto pole je povinné.';
  }
  if (props.type === 'number' && isNaN(props.modelValue)) {
    return 'Musí to být číslo.';
  }
  if (props.min !== null && parseFloat(props.modelValue) < props.min) {
    return `Hodnota musí být alespoň ${props.min}.`;
  }
  if (props.max !== null && parseFloat(props.modelValue) > props.max) {
    return `Hodnota nesmí být větší než ${props.max}.`;
  }
  return props.errorMessage;
});
</script>

<template>
	<div>
		<label v-if="label" class="block text-sm font-medium text-gray-700">
			{{ label }}
		</label>
		<div class="flex items-center space-x-2">
			<input
				:type="type"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				:class="{
          'border-red-500': !isValid,
          'border-gray-300': isValid,
        }"
				class="flex-1 px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
        transition duration-150 ease-in-out"
			/>
			<span v-if="unit" class="text-sm text-black">{{ unit }}</span>
		</div>
		<span v-if="!isValid" class="text-sm text-red-500">
			{{ getErrorMessage }}
		</span>
	</div>
</template>

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
	<div>
		<label v-if="label" class="block text-sm font-medium text-gray-700">
			{{ label }}
		</label>
		<div class="flex items-center space-x-2">
			<input
				:type="type"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				class="flex-1 px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
        transition duration-150 ease-in-out
        border-gray-300"
			/>
			<span class="text-sm text-black">{{ unit }}</span>
		</div>
		<span v-if="error && errorMessage" class="text-sm text-red-500">
			{{ errorMessage }}
		</span>
	</div>
</template>

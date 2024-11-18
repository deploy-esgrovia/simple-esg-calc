<script setup>
const props = defineProps({
  label: String,
  modelValue: [String, Number],
  unit: String,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="mb-4">
		<label class="block mb-2 font-medium text-gray-700">{{ label }}</label>
		<div class="flex items-center gap-2">
			<input
				type="number"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				class="flex-1 p-2 border border-gray-300 rounded-lg text-base"
			/>
			<span class="text-gray-500 text-sm">{{ unit }}</span>
		</div>
	</div>
</template>

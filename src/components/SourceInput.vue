<script setup>
const props = defineProps({
  sourceType: String,
  modelValue: [String, Number],
});

const emit = defineEmits(['update:modelValue']);

const sourceLabels = {
  photovoltaic: 'Fotovoltaika',
  biomass: 'Biomasa / bioplyn',
  wind: 'Vítr',
  water: 'Voda',
  nuclear: 'Jádro',
};
</script>

<template>
	<div class="mb-4 flex items-center gap-4">
		<label class="flex-1 font-medium text-gray-700">{{ sourceLabels[sourceType] }}</label>
		<div class="flex items-center gap-2">
			<input
				type="number"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
				class="w-32 p-2 border border-gray-300 rounded-lg text-base"
			/>
			<span class="text-gray-500 text-sm">MWh / rok</span>
		</div>
	</div>
</template>

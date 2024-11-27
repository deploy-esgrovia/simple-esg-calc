<script setup>
const props = defineProps({
  modelValue: String,
  energyTypes: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<div class="flex gap-4 mt-4">
		<div
			v-for="type in energyTypes"
			:key="type.id"
			@click="emit('update:modelValue', type.id)"
			:class="[
        'flex-1 p-4 border-2 rounded-lg cursor-pointer flex flex-col items-center gap-2 transition duration-200',
        modelValue === type.id
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-300 hover:border-blue-600'
      ]"
		>
			<span class="text-2xl">{{ type.icon }}</span>
			<span class="font-medium text-center">{{ type.label }}</span>
		</div>
	</div>
</template>

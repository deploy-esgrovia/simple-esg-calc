<script setup>
import { ref, watch, reactive } from 'vue';
import InputWithUnit from './InputWithUnit.vue';

// Reactive states to manage expansion and selected tab
const isOpen = ref(false);
const selectedTab = ref(null);

// Props to pass the data into the component
const props = defineProps({
	title: String,
	categories: Object,
	modelValue: Object,
});

const emit = defineEmits(['update:modelValue']);

// Initialize dataByCategory as a reactive object
const dataByCategory = reactive({});

// Watch for changes in categories and update dataByCategory accordingly
watch(
	() => props.categories,
	() => {
    for (const [categoryId, category] of Object.entries(props.categories)) {
		if (!dataByCategory[categoryId]) {
			dataByCategory[categoryId] = {};
		}
		for (const input of category.inputs) {
			if (!dataByCategory[categoryId][input.id]) {
				dataByCategory[categoryId][input.id] = "";
			}
		}
    }
	}, { immediate: true }
);

// Emit the updated modelValue whenever dataByCategory changes
watch(
	dataByCategory,
	(newDataByCategory) => {
		emit('update:modelValue', newDataByCategory);
	},
	{ deep: true }
);
</script>

<template>
	<div class="my-5 border rounded-lg shadow-sm p-4 space-y-4 bg-white">
		<!-- Title of the expandable card -->
		<div class="flex items-center justify-between cursor-pointer" @click="isOpen = !isOpen">
			<h3 class="text-lg font-medium text-gray-800">{{ props.title }}</h3>
			<input
				type="checkbox"
				v-model="isOpen"
				class="form-checkbox h-5 w-5 text-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
			/>
		</div>

		<!-- Expandable section with tabs and input fields -->
		<div v-if="isOpen" class="space-y-4">
			<!-- Tabs for each category -->
			<div class="flex gap-2 border-b pb-2">
				<div
					v-for="category in props.categories"
					:key="category.label"
					:class="[
            'px-4 py-2 text-sm rounded-t-md cursor-pointer',
            selectedTab === category.label
				? 'bg-blue-600 text-white font-medium'
				: 'bg-gray-100 hover:bg-gray-200'
				]"
					@click="selectedTab = category.label"
				>
					{{ category.label }}
				</div>
			</div>

			<!-- Input fields for the selected tab -->
			<div
				v-for="(category, categoryId) in props.categories"
				:key="category.label"
				v-show="selectedTab === category.label"
				class="space-y-4"
			>
				<div v-for="input in category.inputs" :key="input.id" class="space-y-1">
					<InputWithUnit
						:label="input.label"
						:unit="input.unit"
						v-model="dataByCategory[categoryId][input.id]"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

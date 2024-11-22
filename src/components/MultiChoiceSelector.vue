<script setup>
import { ref, watch, defineProps, defineEmits, reactive } from 'vue';
import InputWithUnit from './InputWithUnit.vue';

// Reactive states to manage expansion and selected tab
const isOpen = ref(false); // Track if the card is open or collapsed
const selectedTab = ref(null); // Track which tab is currently selected

// Props to pass the data into the component
const props = defineProps({
  title: String, // The title for the card
  categories: Object, // List of categories with labels and input field data
  modelValue: Object, // The model value to bind the input fields
});

const emit = defineEmits(['update:modelValue']);

// Initialize dataByCategory as a reactive object
const dataByCategory = reactive({});

// Watch for changes in categories and update dataByCategory accordingly
watch(
  () => props.categories,
  () => {
    // Populate dataByCategory with modelValue or default to empty strings
    for (const [categoryId, category] of Object.entries(props.categories)) {
      // Initialize the category if it doesn't exist
      if (!dataByCategory[categoryId]) {
        dataByCategory[categoryId] = {}; // Create an empty object for this category
      }

      // Loop over the inputs for each category
      for (const input of category.inputs) {
        // Initialize the input key with modelValue or empty string if it doesn't exist
        if (!dataByCategory[categoryId][input.id]) {
          dataByCategory[categoryId][input.id] = props.modelValue?.[categoryId]?.[input.id] || '';
        }
      }
    }
  },
  { immediate: true } // Run immediately on mount to initialize the data
);

// Emit the updated modelValue whenever dataByCategory changes
watch(
  dataByCategory,
  (newDataByCategory) => {
    const updatedModelValue = {};

    // Loop through the categories to prepare the updated model value
    for (const [categoryId, category] of Object.entries(props.categories)) {
      updatedModelValue[categoryId] = {
        inputs: category.inputs.map((input) => ({
          id: input.id,
          value: newDataByCategory[categoryId]?.[input.id] || '', // Default to empty string if not found
        })),
      };
    }

    emit('update:modelValue', updatedModelValue);
  },
  { deep: true } // Watch deeply for changes
);
</script>

<template>
	<div class="multi-choice-selector">
		<!-- Title of the expandable card -->
		<div class="card-header" @click="isOpen = !isOpen">
			<h3>{{ props.title }}</h3>
			<input type="checkbox" v-model="isOpen" />
		</div>

		<!-- Expandable section with tabs and input fields -->
		<div v-if="isOpen" class="card-body">
			<!-- Tabs for each category -->
			<div class="tabs">
				<div
					v-for="category in props.categories"
					:key="category.label"
					:class="['tab', { active: selectedTab === category.label }]"
					@click="selectedTab = category.label"
				>
					{{ category.label }}
				</div>
			</div>

			<!-- Input fields for the selected tab -->
			<div
				v-for="category in props.categories"
				:key="category.label"
				v-show="selectedTab === category.label"
			>
				<br />
				<div v-for="input in category.inputs" :key="input.id" class="input-group">
					<InputWithUnit
						:label="input.label"
						:unit="input.unit"
						v-model="dataByCategory[category.id]"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.multi-choice-selector {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.card-body {
  margin-top: 1rem;
}

.tabs {
  display: flex;
  gap: 1rem;
}

.tab {
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f0f0f0;
}

.tab.active {
  background-color: #4169E1;
  color: white;
}

.input-group {
  margin-bottom: 1rem;
}
</style>

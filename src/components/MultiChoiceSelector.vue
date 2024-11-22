<script setup>
import { ref } from 'vue';
import InputWithUnit from './InputWithUnit.vue';

// Props to pass the data into the component
const props = defineProps({
  title: String, // The title for the card
  categories: Array, // List of categories with labels and input field data
});

// Reactive states to manage expansion and selected tab
const isOpen = ref(false); // Track if the card is open or collapsed
const selectedTab = ref(null); // Track which tab is currently selected
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
					<InputWithUnit :label="input.label" :unit="input.unit" />
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

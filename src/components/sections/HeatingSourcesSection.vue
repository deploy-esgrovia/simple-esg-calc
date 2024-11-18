<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import InputWithUnit from '../InputWithUnit.vue';

const store = useStore();

const hasBoiler = ref(false);
const selectedFuels = ref([]);
const fuelConsumption = ref({
  oil: '',
  gas: '',
  coal: '',
  wood: ''
});

const fuelOptions = [
  { id: 'coal', label: 'Uhlí', icon: '🚂' },
  { id: 'gas', label: 'Zemní plyn', icon: '🔥' },
  { id: 'wood', label: 'Dřevo', icon: '🌳' },
  { id: 'oil', label: 'Lehký topný olej', icon: '💧' }
];

const units = {
  oil: 'l/rok',
  gas: 'Nm³/rok',
  coal: 't/rok',
  wood: 't/rok'
};

const saveData = () => {
  store.dispatch('saveHeatingSourcesData', {
    hasBoiler,
    selectedFuels: selectedFuels.value,
    fuelConsumption: fuelConsumption.value
  });
};
</script>

<template>
	<div class="heating-sources-section">
		<h2 class="section-title">Vlastní zdroje topení a vytápění</h2>
		<p class="section-description">
			Máte kotelnu, kterou využíváte pro vytápění prostor nebo provoz technologie? Pokud ano,
			vyberte palivo a zadejte spotřebu.
		</p>

		<div class="form-group">
			<h3>Máte vlastní kotelnu?</h3>
			<div class="radio-group">
				<label> <input type="radio" v-model="hasBoiler" :value="true" /> Ano </label>
				<label> <input type="radio" v-model="hasBoiler" :value="false" /> Ne </label>
			</div>
		</div>

		<div v-if="hasBoiler">
			<div class="form-group">
				<h3>Jaké používáte palivo?</h3>
				<div class="sources-grid">
					<div
						v-for="fuel in fuelOptions"
						:key="fuel.id"
						class="source-option"
						:class="{ selected: selectedFuels.includes(fuel.id) }"
						@click="selectedFuels = selectedFuels.includes(fuel.id)
              ? selectedFuels.filter(f => f !== fuel.id)
              : [...selectedFuels, fuel.id]"
					>
						<span class="source-icon">{{ fuel.icon }}</span>
						<span class="source-label">{{ fuel.label }}</span>
					</div>
				</div>
			</div>

			<div v-for="fuel in selectedFuels" :key="fuel" class="form-group">
				<InputWithUnit
					:label="`Množství ${fuelOptions.find(f => f.id === fuel).label}`"
					v-model="fuelConsumption[fuel]"
					:unit="units[fuel]"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.heating-sources-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-description {
  color: #666;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 2rem;
}

.radio-group {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.sources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.source-option {
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
}

.source-option:hover {
  border-color: #4169E1;
}

.source-option.selected {
  border-color: #4169E1;
  background-color: #f0f4ff;
}

.source-icon {
  font-size: 1.5rem;
}

.source-label {
  font-weight: 500;
}
</style>

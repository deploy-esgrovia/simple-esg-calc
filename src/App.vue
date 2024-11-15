<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const currentStep = computed(() => store.state.currentStep);
</script>

<template>
	<div class="app">
		<h1>Výpočet uhlíkové stopy</h1>
		<div class="progress">Krok {{ currentStep }} ze 6</div>
		<router-view></router-view>
	</div>
</template>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.progress {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}
</style>

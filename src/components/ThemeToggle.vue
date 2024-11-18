<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  isDark.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
</script>

<template>
	<button
		@click="toggleTheme"
		class="theme-toggle"
		:title="isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'"
	>
		<span v-if="isDark">🌞</span>
		<span v-else>🌙</span>
	</button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  background: var(--button-bg);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1000;
}

.theme-toggle:hover {
  transform: scale(1.1);
  background: var(--button-hover-bg);
}
</style>

<script setup>
import { RouterView } from 'vue-router';
import SideNavbar from './components/SideNavBar.vue';
</script>

<template>
	<div class="flex flex-wrap">
		<SideNavbar />
		<div class="flex-grow p-8">
			<h1 class="text-center text-3xl font-bold text-primary mb-8">Výpočet uhlíkové stopy</h1>
			<RouterView />
		</div>
	</div>
</template>

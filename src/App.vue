<script setup>
import { RouterView } from 'vue-router';
import SideNavbar from './components/SideNavBar.vue';
</script>

<template>
	<div class="w-full h-screen flex space-x-6 border border-black rounded m-5">
		<!-- Sidebar -->
		<SideNavbar class="p-6" />
		<!-- Router View -->
		<RouterView class="flex-grow rounded-lg" />
	</div>
</template>

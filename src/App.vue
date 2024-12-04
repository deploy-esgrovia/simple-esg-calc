<script setup>
import { RouterView } from 'vue-router';
import SideNavbar from './components/SideNavBar.vue';
</script>

<template>
	<div class="w-full h-screen flex space-x-6 m-5">
		<!-- Sidebar -->
		<SideNavbar class="p-6 h-screen fixed left-0 top-0" />
		<!-- Router View -->
		<div class="flex-grow rounded-lg ml-60 mx-auto overflow-y-auto h-screen">
			<RouterView />
		</div>
	</div>
</template>

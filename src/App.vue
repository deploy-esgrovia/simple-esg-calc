<script setup>
import { RouterView } from 'vue-router';
import SideNavbar from './components/SideNavbar.vue';
</script>

<template>
	<div
		class="mt-4 bg-white border border-gray-200 rounded-xl shadow-sm grid grid-cols-[auto,1fr]"
	>
		<!-- Sidebar -->
		<SideNavbar class="p-6 h-screen fixed left-0 top-0" />
		<!-- Router View -->
		<div class="flex-grow rounded-lg ml-60 mx-auto overflow-y-auto h-screen">
			<RouterView />
		</div>
	</div>
</template>

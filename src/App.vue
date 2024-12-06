<script setup>
import { RouterView } from 'vue-router';
import SideNavbar from './components/SideNavbar.vue';
import { useFormStore } from './stores/formStore';

const formStore = useFormStore();
formStore.fetchData();
</script>

<template>
	<div
		class="m-4 bg-gray-100 border border-gray-200 rounded-xl shadow-sm grid grid-cols-[auto,1fr]"
	>
		<!-- Sidebar -->
		<SideNavbar class="border border-x-1 border-y-0 border-l-0 border-gray-200 min-w-60" />
		<!-- Router View -->
		<div class="p-8 overflow-hidden">
			<RouterView />
		</div>
	</div>
</template>

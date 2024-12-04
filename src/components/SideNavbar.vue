<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

// Access the current route
const route = useRoute();

// Define active states for sections
const isScope1Active = computed(() => ['/energy', '/heat', '/heating-sources'].includes(route.path));
const isScope2Active = computed(() => ['/vehicles', '/emissions'].includes(route.path));
const isScope3Active = computed(() => ['/scope3'].includes(route.path));
</script>

<template>
	<div class="border border-inherit bg-inherit">
		<nav>
			<ul class="text-lg mb-6">
				<!-- Úvod -->
				<li
					class="bg-color3 bg-opacity-50 border border-b-1 border-x-0 border-t-0 last:border-b-0 rounded-tl-lg bg-white"
				>
					<RouterLink
						to="/information"
						class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
						:class="{ ' bg-blue-600 bg-opacity-50': $route.path === '/information' }"
					>
						<div>Úvod</div>
					</RouterLink>
				</li>
			</ul>

			<!-- Scope 1 -->
			<ul class="text-lg mb-6">
				<li>
					<ul
						:class="{'border-l-4 border-0 border-opacity-50 border-blue-700': isScope1Active}"
					>
						<!-- Section Header -->
						<li
							class="text-lg font-bold border bg-blue-600 bg-opacity-10 border-b-1 border-x-0 border-t-0 "
						>
							<p class="block py-2 pl-3 pr-12">Scope 1</p>
						</li>

						<!-- Links -->
						<li
							class="border border-gray-300 border-b-1 border-x-0 border-t-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/"
								class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50': $route.path === '/energy' }"
							>
								<div>Energy</div>
							</RouterLink>
						</li>
						<li
							class="border border-gray-300 border-b-1 border-x-0 border-t-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/heat"
								class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50 ': $route.path === '/heat' }"
							>
								<div>Heat</div>
							</RouterLink>
						</li>
						<li
							class="border border-gray-300 border-b-1 border-x-0 border-t-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/heating-sources"
								class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50 ': $route.path === '/heating-sources' }"
							>
								<div>Heating Sources</div>
							</RouterLink>
						</li>
					</ul>
				</li>
			</ul>

			<!-- Scope 2 -->
			<ul class="text-lg mb-6">
				<li>
					<ul
						:class="{'border-l-4 border-0 border-opacity-50 border-blue-700': isScope2Active}"
					>
						<li
							class="text-lg font-bold border bg-blue-600 bg-opacity-10 border-b-1 border-x-0 border-t-0"
						>
							<p class="block py-2 pl-3 pr-12">Scope 2</p>
						</li>
						<li
							class="border border-gray-300 border-b-1 border-x-0 border-t-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/vehicles"
								class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50 ': $route.path === '/vehicles' }"
							>
								<div>Vehicles</div>
							</RouterLink>
						</li>
						<li
							class="border border-gray-300 border-b-1 border-x-0 border-t-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/emissions"
								class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50 ': $route.path === '/emissions' }"
							>
								<div>Emissions</div>
							</RouterLink>
						</li>
					</ul>
				</li>
			</ul>

			<!-- Scope 3 -->
			<ul class="text-lg mb-6">
				<li>
					<ul
						:class="{'border-l-4 border-0 border-opacity-50 border-blue-700': isScope3Active}"
					>
						<li
							class="text-lg font-bold border bg-blue-600 bg-opacity-10 border-b-1 border-x-0 border-t-0"
						>
							<p class="block py-2 pl-3 pr-12">Scope 3</p>
						</li>
						<li
							class="border border-gray-300 border-b-1 border-x-0 border-t-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/emissions"
								class="block py-2 pl-3 pr-3 justify-between transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50 ': $route.path === '/dummy' }"
							>
								<div>Dummy</div>
							</RouterLink>
						</li>
					</ul>
				</li>
			</ul>

			<!-- Summary -->
			<ul class="text-lg mb-6">
				<li>
					<ul>
						<li
							class="font-bold border border-gray-300 border-t-4 border-b-1 border-x-0 last:border-b-0 bg-white"
						>
							<RouterLink
								to="/company-info"
								class="block py-2 pl-3 pr-12 transition-colors duration-200"
								:class="{ ' bg-blue-600 bg-opacity-50 ': $route.path === '/company-info' }"
							>
								Shrnutí
							</RouterLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

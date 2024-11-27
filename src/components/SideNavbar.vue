<template>
	<div class="w-64 bg-gray-800 text-white p-4">
		<nav>
			<ul>
				<li>
					<router-link to="/" class="block py-2 text-black">Energy</router-link>
				</li>
				<li>
					<router-link to="/heat" class="block py-2 text-black">Heat</router-link>
				</li>
				<li>
					<router-link to="/heating-sources" class="block py-2 text-black"
						>Heating Sources</router-link
					>
				</li>
				<li>
					<router-link to="/vehicles" class="block py-2 text-black">Vehicles</router-link>
				</li>
				<li>
					<router-link to="/emissions" class="block py-2 text-black"
						>Emissions</router-link
					>
				</li>
				<li>
					<router-link to="/company-info" class="block py-2 text-black"
						>Company Info</router-link
					>
				</li>
			</ul>
		</nav>
	</div>
</template>

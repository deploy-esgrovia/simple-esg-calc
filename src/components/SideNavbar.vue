<!-- src/components/Navbar.vue -->
<template>
	<nav class="bg-white shadow-md h-screen p-6 w-72">
		<ul class="space-y-4">
			<li>
				<router-link to="/energy" class="block py-2 px-4 rounded hover:bg-gray-100"
					>Energie</router-link
				>
			</li>
			<li>
				<router-link to="/heat" class="block py-2 px-4 rounded hover:bg-gray-100"
					>Teplo</router-link
				>
			</li>
			<li>
				<router-link to="/heating-sources" class="block py-2 px-4 rounded hover:bg-gray-100"
					>Zdroje vytápění</router-link
				>
			</li>
			<li>
				<router-link to="/vehicles" class="block py-2 px-4 rounded hover:bg-gray-100"
					>Vozidla</router-link
				>
			</li>
			<li>
				<router-link to="/emissions" class="block py-2 px-4 rounded hover:bg-gray-100"
					>Emise</router-link
				>
			</li>
			<li>
				<router-link to="/company-info" class="block py-2 px-4 rounded hover:bg-gray-100"
					>Závěr</router-link
				>
			</li>
		</ul>
	</nav>
</template>

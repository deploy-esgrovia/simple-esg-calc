<template>
	<div class="bg-gray-800 text-white">
		<div>
			<nav>
				<ul>
					<!--Scope 1-->
					<li>
						<ul>
							<li class="text-lg text-black font-bold bg-indigo-500">Scope 1</li>
							<li>
								<router-link to="/" class="block py-2 text-black"
									>Energy</router-link
								>
							</li>
							<li>
								<router-link to="/heat" class="block py-2 text-black"
									>Heat</router-link
								>
							</li>
							<li>
								<router-link to="/heating-sources" class="block py-2 text-black"
									>Heating Sources</router-link
								>
							</li>
							<li>
								<router-link to="/vehicles" class="block py-2 text-black"
									>Vehicles</router-link
								>
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
					</li>
					<!--Scope 2 - další li element s ul elemente m uvnitř-->
				</ul>
			</nav>
		</div>
	</div>
</template>

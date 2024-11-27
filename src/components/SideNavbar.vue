<template>
	<div>
		<nav>
			<ul>
				<!--Scope 1-->
				<li>
					<ul>
						<li class="text-lg font-bold">
							<p>Scope 1</p>
						</li>

						<li>
							<router-link to="/" class="block py-2 ">Energy</router-link>
						</li>
						<li>
							<router-link to="/heat" class="block py-2 ">Heat</router-link>
						</li>
						<li>
							<router-link to="/heating-sources" class="block py-2 "
								>Heating Sources</router-link
							>
						</li>
					</ul>
				</li>
				<!--Scope 2-->
				<li>
					<ul>
						<li class="text-lg font-bold">Scope 2</li>
						<li>
							<router-link to="/vehicles" class="block py-2 ">Vehicles</router-link>
						</li>
						<li>
							<router-link to="/emissions" class="block py-2 ">Emissions</router-link>
						</li>
					</ul>
				</li>
				<!--Scope 3-->
				<li>
					<ul>
						<li class="text-lg font-bold">
							<p>Scope 3</p>
						</li>
					</ul>
				</li>
				<!--Závěr-->
				<li class="pt-4">
					<ul>
						<li class="text-lg  font-bold">Shrnutí</li>
						<li>
							<router-link to="/company-info" class="block py-2 "
								>Company Info</router-link
							>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

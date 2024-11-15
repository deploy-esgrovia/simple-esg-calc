import { createRouter, createWebHistory } from "vue-router";
import EnergySection from "../components/EnergySection.vue";
import HeatSection from "../components/HeatSection.vue";

const routes = [
	{
		path: "/",
		redirect: "/energy",
	},
	{
		path: "/energy",
		name: "energy",
		component: EnergySection,
		meta: { step: 1 },
	},
	{
		path: "/heat",
		name: "heat",
		component: HeatSection,
		meta: { step: 2 },
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});

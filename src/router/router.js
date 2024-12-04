import { createRouter, createWebHistory } from "vue-router";
import EnergySection from "../components/sections/EnergySection.vue";
import HeatSection from "../components/sections/HeatSection.vue";
import HeatingSourcesSection from "../components/sections/HeatingSourcesSection.vue";
import VehicleSection from "../components/sections/VehicleSection.vue";
import EmissionsSection from "../components/sections/EmissionsSection.vue";
import CompanyInfoSection from "../components/sections/CompanyInfoSection.vue";
import InformationSection from "../components/sections/InformationSection.vue";

const routes = [
	{ path: "/", redirect: "/energy" },
	{ path: "/energy", component: EnergySection },
	{ path: "/heat", component: HeatSection },
	{ path: "/heating-sources", component: HeatingSourcesSection },
	{ path: "/vehicles", component: VehicleSection },
	{ path: "/emissions", component: EmissionsSection },
	{ path: "/company-info", component: CompanyInfoSection },
	{ path: "/information", component: InformationSection },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

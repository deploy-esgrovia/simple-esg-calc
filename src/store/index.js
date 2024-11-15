import { createStore } from "vuex";

export default createStore({
	state: {
		formData: {
			energy: {
				annualConsumption: "",
				energyType: "regular",
				energySources: {
					photovoltaic: "",
					biomass: "",
					wind: "",
					water: "",
					nuclear: "",
				},
			},
			heat: {
				useHeat: false,
				heatSources: [],
				useSteam: false,
				steamSources: [],
			},
		},
		currentStep: 1,
	},
	mutations: {
		updateEnergyData(state, payload) {
			state.formData.energy = { ...state.formData.energy, ...payload };
		},
		updateHeatData(state, payload) {
			state.formData.heat = { ...state.formData.heat, ...payload };
		},
		setCurrentStep(state, step) {
			state.currentStep = step;
		},
	},
	actions: {
		saveEnergyData({ commit }, data) {
			commit("updateEnergyData", data);
		},
		saveHeatData({ commit }, data) {
			commit("updateHeatData", data);
		},
		nextStep({ commit, state }) {
			commit("setCurrentStep", state.currentStep + 1);
		},
		previousStep({ commit, state }) {
			commit("setCurrentStep", state.currentStep - 1);
		},
	},
});

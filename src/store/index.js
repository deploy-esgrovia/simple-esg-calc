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
			heatingSources: {
				hasBoiler: false,
				selectedFuels: [],
				fuelConsumption: {
					oil: "",
					gas: "",
					coal: "",
					wood: "",
				},
			},
			vehicles: {
				hasVehicles: false,
				vehicleData: {
					company: {
						benzin: "",
						nafta: "",
						cng: "",
						lpg: "",
						elektrina: "",
					},
					personal: {
						benzin: "",
						nafta: "",
						cng: "",
						lpg: "",
						elektrina: "",
					},
				},
			},
			emissions: {
				hasEmissions: false,
				emissions: {
					co2: "",
					ch4: "",
					nf3: "",
					n2o: "",
					sf6: "",
					r23: "",
					r32: "",
					r125: "",
				},
			},
			company: {
				ico: "",
				name: "",
				email: "",
			},
		},
	},
	mutations: {
		updateEnergyData(state, payload) {
			state.formData.energy = { ...state.formData.energy, ...payload };
		},
		updateHeatData(state, payload) {
			state.formData.heat = { ...state.formData.heat, ...payload };
		},
		updateHeatingSourcesData(state, payload) {
			state.formData.heatingSources = { ...state.formData.heatingSources, ...payload };
		},
		updateVehicleData(state, payload) {
			state.formData.vehicles = { ...state.formData.vehicles, ...payload };
		},
		updateEmissionsData(state, payload) {
			state.formData.emissions = { ...state.formData.emissions, ...payload };
		},
		updateCompanyInfo(state, payload) {
			state.formData.company = { ...state.formData.company, ...payload };
		},
	},
	actions: {
		saveEnergyData({ commit }, data) {
			commit("updateEnergyData", data);
		},
		saveHeatData({ commit }, data) {
			commit("updateHeatData", data);
		},
		saveHeatingSourcesData({ commit }, data) {
			commit("updateHeatingSourcesData", data);
		},
		saveVehicleData({ commit }, data) {
			commit("updateVehicleData", data);
		},
		saveEmissionsData({ commit }, data) {
			commit("updateEmissionsData", data);
		},
		saveCompanyInfo({ commit }, data) {
			commit("updateCompanyInfo", data);
		},
	},
});

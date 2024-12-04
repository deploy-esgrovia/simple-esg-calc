import { defineStore } from "pinia";
import { reactive } from "vue";

// Define the Pinia store
export const useFormStore = defineStore("formStore", () => {
	// Form data is now inside the store
	const formData = reactive({
		energy: {},
		heat: {},
		heatingSources: {},
		vehicles: {},
		emissions: {},
		companyInfo: {},
	});

	// You can create actions or computed properties if needed
	return { formData };
});

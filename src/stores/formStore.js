import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

// Define the Pinia store
export const useFormStore = defineStore("formStore", () => {
	const baseApiUrl = import.meta.env.VITE_API_URL;
	const hash = reactive({ value: Cookies.get("hash") || null });
	// Form data is now inside the store
	const formData = reactive({
		energy: {},
		heat: {},
		heatingSources: {},
		vehicles: {},
		emissions: {},
		companyInfo: {},
	});

	// Function for saving data
	const saveData = async () => {
		try {
			if (hash.value) {
				// Update existing data
				await axios.post(`${baseApiUrl}?hash=${hash.value}`, formData);
				return;
			}
			// Create new data
			const response = await axios.post(baseApiUrl, formData);
			hash.value = response.data.hash;
			Cookies.set("hash", hash.value);
		} catch (error) {
			console.error("Error saving data: ", error);
		}
	};

	// Function for fetching data
	const fetchData = async () => {
		if (!hash.value) return;
		try {
			const response = await axios.get(`${baseApiUrl}?hash=${hash.value}`);
			Object.assign(formData, response.data);
		} catch (error) {
			console.error("Error fetching data: ", error);
		}
	};

	// You can create actions or computed properties if needed
	return { formData, saveData, fetchData };
});

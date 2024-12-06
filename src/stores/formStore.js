import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

export const useFormStore = defineStore("formStore", () => {
	const baseApiUrl = import.meta.env.VITE_API_URL;
	const hash = reactive({ value: Cookies.get("hash") || null });
	const isLoading = ref(true);

	// Default structure for formData
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
				const response = await axios.post(`${baseApiUrl}?hash=${hash.value}`, formData);
				console.log("Data updated: ", response.data);
				return;
			}
			// Create new data
			const response = await axios.post(baseApiUrl, formData);
			hash.value = response.data.hash;
			Cookies.set("hash", hash.value);
			console.log("Data saved: ", response.data);
		} catch (error) {
			console.error("Error saving data: ", error);
		}
	};

	// Fetch data function
	const fetchData = async () => {
		if (!hash.value) {
			isLoading.value = false;
			return;
		}
		try {
			const response = await axios.get(`${baseApiUrl}?hash=${hash.value}`);
			Object.assign(formData, response.data);
			console.log("Data fetched: ", response.data);
		} catch (error) {
			console.error("Error fetching data: ", error);
		} finally {
			isLoading.value = false;
		}
	};

	watch(
		formData,
		async () => {
			await saveData();
		},
		{ deep: true }
	);

	return { formData, fetchData, isLoading };
});

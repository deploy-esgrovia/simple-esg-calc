<script setup>
import { ref, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';
import { useFormStore } from '../../stores/formStore';

const { formData } = useFormStore();

const companyInfo = ref({
	ico: formData.companyInfo.ico || '',
	name: formData.companyInfo.name || '',
	email: formData.companyInfo.email || ''
});

const handleSubmit = () => {
	const rawFormData = JSON.parse(JSON.stringify(formData));
	console.log('Submit: ', rawFormData);
};

// Watcher for Company Info Data
watch(companyInfo, () => {
	formData.companyInfo = companyInfo.value;
}, { deep: true });
</script>

<template>
	<div class="max-w-4xl mx-auto p-6">
		<h2 class="text-2xl mb-4">Informace o vaší firmě</h2>
		<p class="text-gray-600 mb-6">Už jen několik informací o vaší firmě a máme hotovo.</p>

		<div class="flex gap-4 p-4 bg-blue-100 rounded-lg mb-8 border border-black">
			<span class="text-xl">ℹ️</span>
			<p class="text-gray-700">
				Vaše údaje a IČO k firmě neslouží k dalšímu kontaktování. Na váš pracovní e-mail
				následně pošleme kopii výsledného reportu.
			</p>
		</div>

		<div class="mb-6">
			<InputWithUnit type="text" label="IČO" v-model="companyInfo.ico" />
		</div>

		<div class="mb-6">
			<InputWithUnit type="text" label="Název firmy" v-model="companyInfo.name" />
		</div>

		<div class="mb-6">
			<InputWithUnit type="text" label="E-mail" v-model="companyInfo.email" />
		</div>
	</div>
	<div>
		<button
			@click="handleSubmit"
			class="block mx-auto my-8 py-3 px-8 bg-blue-500 text-white border-none rounded cursor-pointer text-xl hover:bg-blue-700"
		>
			Submit
		</button>
	</div>
</template>

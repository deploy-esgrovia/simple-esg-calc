<script setup>
import { ref, watch } from 'vue';
import InputWithUnit from '../InputWithUnit.vue';

const props = defineProps({
  modelValue: Object,
  required: true,
  default: () => ({})
});

const emit = defineEmits(['update:modelValue']);

const companyInfo = ref({
  ico: '',
  name: '',
  email: ''
});

// Watcher for Company Info Data
watch(companyInfo, () => {
  const updatedModelValue = {
    ...props.modelValue,
    companyInfo: companyInfo.value
  }

  emit('update:modelValue', updatedModelValue);
  }, { deep: true });
</script>

<template>
	<div class="max-w-4xl mx-auto p-8">
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
</template>

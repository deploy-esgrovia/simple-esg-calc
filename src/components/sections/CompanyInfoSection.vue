<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import InputWithUnit from '../InputWithUnit.vue';

const companyInfo = ref({
  ico: '',
  name: '',
  email: ''
});
</script>

<template>
	<div class="company-info-section">
		<h2 class="section-title">Informace o vaší firmě</h2>
		<p class="section-description">Už jen několik informací o vaší firmě a máme hotovo.</p>

		<div class="info-notice">
			<span class="info-icon">ℹ️</span>
			<p>
				Vaše údaje a IČO k firmě neslouží k dalšímu kontaktování. Na váš pracovní e-mail
				následně pošleme kopii výsledného reportu.
			</p>
		</div>

		<div class="form-group">
			<InputWithUnit label="IČO" v-model="companyInfo.ico" />
		</div>

		<div class="form-group">
			<InputWithUnit label="Název firmy" v-model="companyInfo.name" />
		</div>

		<div class="form-group">
			<InputWithUnit label="E-mail" v-model="companyInfo.email" />
		</div>
	</div>
</template>

<style scoped>
.company-info-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.info-notice {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--notice-bg);
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid black;
}

.info-icon {
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--text-primary);
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-light);
}
</style>

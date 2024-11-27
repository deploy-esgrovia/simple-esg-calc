import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import { createPinia } from "pinia";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");

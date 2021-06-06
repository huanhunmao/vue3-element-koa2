import { createApp } from "vue";
import App from "./App.vue";

// console.log(process.env);
console.log(import.meta.env);
createApp(App).mount("#app");

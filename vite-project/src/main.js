import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import request from "./utils/request";
import storage from "./utils/storage";

// console.log(process.env); // 这个在 vite内不行
// console.log(import.meta.env);
const app = createApp(App);
app.use(Router).use(ElementPlus).mount("#app");

app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
// test
// axios.get(config.mockApi + "/login").then((res) => {
//   console.log(res);
// });

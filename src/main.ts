import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
// import VueApexCharts from 'vue-apexcharts'
import 'element-plus/theme-chalk/display.css'
import VueApexCharts from "vue3-apexcharts";
import router from './router';
import store from './store';
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueApexCharts)
app.mount('#app')

// createApp(App).mount('#app')

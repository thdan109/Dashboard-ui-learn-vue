import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import AccountSetting from "../views/AccountSetting.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
const routes = [
  {path: '/', name: "Dashboard",component: Dashboard},
  {path:'/account',name: "AccountSetting",  component: AccountSetting},
  {path:'/login',name: "Login",  component: Login},
  {path:'/register',name: "Register",  component: Register}
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
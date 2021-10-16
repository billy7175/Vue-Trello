// import Vue from "vue";
import VueRouter from "vue-router";
// Vue.use(VueRouter);
import Home from '../components/Home'
import Login from '../components/Login'
import NotFound from '../components/NotFound'


// VueRouter 안에 {} and Option
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "*", component: NotFound },
  ],
});


export default router;

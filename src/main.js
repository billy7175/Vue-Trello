// 1번 vue.runtime.esm.js?2b0e:619 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
// from 'vue' 사용시 일번에러 발생 WHY ???
// import Vue from 'vue'
import Vue from 'vue/dist/vue'
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
//*****//
// Vue.config.productionTip = false

const Login = {template: '<div>Login Page</div>'}
const NotFound = {template: '<div>Page Not Found</div>'}

// VueRouter 안에 {} and Option
const router = new VueRouter({
  mode:'history',
  routes : [
    {path:'/', component: App},
    {path:'/login', component:Login},
    {path:'*', component: NotFound}
  ]
})

new Vue({
  el: '#app',
  // routes,
  router,
  render: h => h(App),
})



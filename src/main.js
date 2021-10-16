// 1번 vue.runtime.esm.js?2b0e:619 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
// from 'vue' 사용시 일번에러 발생 WHY ???
// import Vue from 'vue'
import Vue from 'vue/dist/vue'
import App from './App.vue'

//*****//
// Vue.config.productionTip = false

const Login = {template: '<div>Login Page</div>'}

const routes ={
  '/' : App,
  '/login': Login
}

new Vue({
  el: '#app',
  routes,
  computed: {
    VueComponent(){
      return routes[window.location.pathname] || {
        template:'<div>Page not Found</div>'
      }
    }
  },
  // render: h => h(App),
  render(h){
    return h(this.VueComponent)
  }
})
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


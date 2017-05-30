// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Questions from './components/Questions'
import About from './components/About'
import Add from './components/Add'
import Edit from './components/Edit'
import QuestionDetails from './components/QuestionDetails'
import StudentView from './components/StudentView'
import login from './components/login'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: login},
    {path:'Questions/', component: Questions},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/questiondetails/', component: QuestionDetails},
    {path: '/edit/:id', component: Edit},
    {path: '/studentview', component: StudentView},
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h=>h(App)
}).$mount('#app')
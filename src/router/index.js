import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserIndex from '../views/UserIndex.vue'
import SignUp from '../pages/SignUp.vue'
import LogIn from '../pages/LogIn.vue'
import MySingleEvents from '../pages/UserViewEvent.vue'
import MakeReservation from '../pages/MakeReservation.vue'
import PrintInvoice from '../pages/PrintInvoice.vue'
import Test from '../pages/Test.vue'

//OPTIMIZED LOADING
// const HomeView = () => import ('../views/HomeView.vue')

const PageNotFound = () => import ('../pages/PageNotFound.vue')


const routes = [
  { 
    path: '/raw',
    name: 'raw',
    component: Test,
  },
  { 
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {auth: false}
  },
  { 
    path: '/signup',
    name: 'signup',
    component: SignUp,
    meta: {auth: false}
  },
  { 
    path: '/login',
    name: 'login',
    component: LogIn,
    meta: {auth: false}
  },
  { 
    path: '/userpost',
    name: 'userpost',
    component: UserIndex,
    meta: {auth: true}
  },
  { 
    path: '/mySingleEvent',
    name: 'mySingleEvent',
    component: MySingleEvents,
    meta: {auth: true}
  },
  { 
    path: '/makereservation',
    name: 'makereservation',
    component: MakeReservation,
    meta: {auth: false}
  },
  { 
    path: '/printinvoice',
    name: 'printinvoice',
    component: PrintInvoice,
    meta: {auth: false}
  },
  {
    name: 'PageNotFound',
    path: '/:pathMatch(.*)*',
    component: PageNotFound
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

// navitaion guards
// router.beforeEach((to, from, next) => {
//   if('auth' in to.meta && to.meta.auth && !store.getters[`auth/${IS_USER_AUTHETICATED_GETTER}`]) {
//     next('/login')
//   } else if ('auth' in to.meta && !to.meta.auth && store.getters[`auth/${IS_USER_AUTHETICATED_GETTER}`]) {
//     next('/userpost')
//   } else {
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/printinvoice', '/signup', '/', '/makereservation', '/raw', '/:pathMatch(.*)*']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if(authRequired && !loggedIn){
    next('/login')
  } else {
    next()
  }
})



export default router




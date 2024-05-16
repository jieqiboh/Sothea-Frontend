import { createRouter, createWebHistory } from 'vue-router'
import AllPatients from '../views/AllPatients.vue'
import SignIn from '../views/SignIn.vue'
import AddPatient from '../views/AddPatient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/allpatients',
      name: 'allpatients',
      component: AllPatients
    },
    {
      path: '/addpatient',
      name: 'addpatient',
      component: AddPatient
    }
  ]
})

export default router

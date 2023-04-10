import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Travell from '../views/Travell.vue';
import Travelling from '../views/Travelling.vue';
import MisViajes from '../views/MisViajes.vue';
import MiPerfil from '../views/MiPerfil.vue';
import Configuracion from '../views/Configuracion.vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faArrowLeft,
  faCheck
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travell,
    props: true
  },
  {
    path: '/travelling',
    name: 'Travelling',
    component: Travelling,
    props: true
  },
  {
    path: '/history',
    name: 'MisViajes',
    component: MisViajes,
    props: true
  },
  {
    path: '/profile',
    name: 'MiPerfil',
    component: MiPerfil,
    props: true
  },
  {
    path: '/config',
    name: 'Configuracion',
    component: Configuracion,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

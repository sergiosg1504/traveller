import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


Vue.prototype.$datos = [
  {
    active: false,
    nombre: "Sergio",
    apellidos: "Sanchez Garcia",
    correo: "sergiosg@usal.es",
    fecha: "10/04/2001",
    pass: "hola1234",
    viajes: [
      {
        origen: "Madrid",
        destino: "Salamaca",
        fecha: "10/12/2019",
        hora: "12:33",
      },
      {
        origen: "Londres",
        destino: "Sevilla",
        fecha: "13/12/2019",
        hora: "07:00",
      },
      {
        origen: "Roma",
        destino: "Venecia",
        fecha: "22/12/2019",
        hora: "16:23",
      },
      {
        origen: "Río de Janeiro",
        destino: "Salamanca",
        fecha: "10/01/2020",
        hora: "18:52",
      },
      {
        origen: "Barcelona",
        destino: "Avila",
        fecha: "20/01/2020",
        hora: "12:51",
      },
      {
        origen: "Grecia",
        destino: "Galicia",
        fecha: "02/02/2020",
        hora: "19:04",
      },
      {
        origen: "Valencia",
        destino: "Ganada",
        fecha: "10/02/2020",
        hora: "23:36",
      },
      {
        origen: "Madrid",
        destino: "Barcelona",
        fecha: "25/03/2020",
        hora: "12:25",
      },
      {
        origen: "Burgos",
        destino: "Santander",
        fecha: "04/03/2020",
        hora: "17:35",
      },
      {
        origen: "Valencia",
        destino: "Nueva York",
        fecha: "10/03/2020",
        hora: "07:13",
      },
      {
        origen: "Nueva York",
        destino: "Salamanca",
        fecha: "10/03/2020",
        hora: "17:52",
      },
      {
        origen: "Madrid",
        destino: "Londres",
        fecha: "17/05/2020",
        hora: "12:42",
      },
    ],
  },
  {
    active:false,
    nombre: "Pedro",
    apellidos: "Calvo Garcia",
    correo: "pedrocg@usal.es",
    fecha: "13/12/2001",
    pass: "hola1234",
    viajes: [
      {
        origen: "Madrid",
        destino: "Salamaca",
        fecha: "10/12/2019",
        hora: "12:33",
      },
      {
        origen: "Londres",
        destino: "Sevilla",
        fecha: "13/12/2019",
        hora: "07:00",
      },
      {
        origen: "Roma",
        destino: "Venecia",
        fecha: "22/12/2019",
        hora: "16:23",
      },
      {
        origen: "Río de Janeiro",
        destino: "Salamanca",
        fecha: "10/01/2020",
        hora: "18:52",
      },
      {
        origen: "Barcelona",
        destino: "Avila",
        fecha: "20/01/2020",
        hora: "12:51",
      },
      {
        origen: "Grecia",
        destino: "Galicia",
        fecha: "02/02/2020",
        hora: "19:04",
      },
      {
        origen: "Valencia",
        destino: "Ganada",
        fecha: "10/02/2020",
        hora: "23:36",
      },
      {
        origen: "Madrid",
        destino: "Barcelona",
        fecha: "25/03/2020",
        hora: "12:25",
      },
      {
        origen: "Burgos",
        destino: "Santander",
        fecha: "04/03/2020",
        hora: "17:35",
      },
      {
        origen: "Valencia",
        destino: "Nueva York",
        fecha: "10/03/2020",
        hora: "07:13",
      },
      {
        origen: "Nueva York",
        destino: "Salamanca",
        fecha: "10/03/2020",
        hora: "17:52",
      },
      {
        origen: "Madrid",
        destino: "Londres",
        fecha: "17/05/2020",
        hora: "12:42",
      },
    ],
  },
]

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

<template>
  <v-container fluid class="ma-0 pa-0 cont_prof white">
    <Header class="header" />
    <div class="container-profile">
      <div class="title-profile">
        <img src="@/assets/profile.png" />
      </div>
      <div class="data-profile">
        <div v-if="!mobile" class="pc-profile">
          <v-row>
            <v-col>
              <v-row>
                <p class="titulos">Nombre</p>
              </v-row>
              <v-row>
                <p class="titulos">Apellidos</p>
              </v-row>
              <v-row>
                <p class="titulos">Fecha de nacimiento</p>
              </v-row>
              <v-row>
                <p class="titulos">Correo electrónico</p>
              </v-row>
              <v-row>
                <p class="titulos">Contraseña</p>
              </v-row>
              <v-row>
                <p class="titulos">Compartir ubicación</p>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <p class="datos">{{usuario.nombre}}</p>
              </v-row>
              <v-row>
                <p class="datos">{{usuario.apellidos}}</p>
              </v-row>
              <v-row>
                <p class="datos">{{usuario.fecha}}</p>
              </v-row>
              <v-row>
                <p class="datos">{{usuario.correo}}</p>
              </v-row>
              <v-row>
                <p class="datos">{{usuario.pass}}</p>
              </v-row>
              <v-row>
                <p class="datos2">
                  <v-switch v-model="this.switch" color="grey" inset></v-switch>
                </p>
              </v-row>
            </v-col>
          </v-row>
          <div class="remove-btns">
            <div class="remove-history">
              <v-btn block elevation="4" x-large color="green"
                ><span class="span_white">Guardar cambios</span></v-btn
              >
            </div>
            <div class="remove-account">
              <v-btn block elevation="4" x-large color="red"
                ><span class="span_white">Descartar cambios</span></v-btn
              >
            </div>
          </div>
        </div>
        <div v-if="mobile" class="scroll-profile">
          <v-row justify="center"><p class="titulos">Nombre</p></v-row>
          <v-row justify="center"><p class="datos">{{usuario.nombre}}</p></v-row>
          <v-row justify="center"><p class="titulos">Apellidos</p></v-row>
          <v-row justify="center"><p class="datos">{{usuario.apellidos}}</p></v-row>
          <v-row justify="center"
            ><p class="titulos">Fecha de nacimiento</p></v-row
          >
          <v-row justify="center"><p class="datos">{{usuario.fecha}}</p></v-row>
          <v-row justify="center"
            ><p class="titulos">Correo electrónico</p></v-row
          >
          <v-row justify="center"><p class="datos">{{usuario.correo}}</p></v-row>
          <v-row justify="center"><p class="titulos">Contraseña</p></v-row>
          <v-row justify="center"><p class="datos">{{usuario.pass}}</p></v-row>
          <v-row justify="center"
            ><p class="titulos">Compartir ubicación</p></v-row
          >
          <v-row justify="center"
            ><p class="datos2">
              <v-switch v-model="this.switch" color="grey" inset></v-switch></p
          ></v-row>
          <div class="remove-btns">
            <div class="remove-history">
              <v-btn block elevation="4" x-large color="green"
                ><span class="span_white">Guardar cambios</span></v-btn
              >
            </div>
            <div class="remove-account">
              <v-btn block elevation="4" x-large color="red"
                ><span class="span_white">Descartar cambios</span></v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  data: () => ({
    mobile: false,
    switch: true,
    usuario: null,
  }),
  components: {
    Header,
  },
  created() {
    window.addEventListener("resize", this.onResize);
    if (window.innerWidth < 1024) this.mobile = true;
    else this.mobile = false;
    this.$datos.forEach(user => {
      if(user.active === true){
        this.usuario = user
      }
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      if (window.innerWidth < 1024) this.mobile = true;
      else this.mobile = false;
    },
  },
};
</script>

<style scoped>
.cont_prof {
  height: 100%;
}
.header {
  position: absolute;
}
.container-profile {
  margin-left: 22%;
  margin-right: 7%;
  margin-top: 8%;
  margin-bottom: 10%;
  height: 75%;
  text-align: center;
}
.title-profile {
  height: 200px;
  width: 200px;
  margin: 0 auto;
}
.title-profile img {
  height: 100%;
  width: 100%;
  border-radius: 180px;
}
.data-profile {
  height: 70%;
  margin: 0 auto;
  margin-top: 80px;
  margin-left: 25%;
  width: 70%;
}
.pc-profile {
  height: 100%;
  text-align: center;
}
p {
  font-size: 25px;
}
.titulos {
  color: black;
}
.datos {
  color: gray;
  padding-left: 4px;
  padding-right: 4px;
  border: gray 2px solid;
  border-radius: 5px;
}
.datos2 {
  color: gray;
  border-radius: 5px;
}
.span_white {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.remove-btns {
  margin-top: 40px;
}
.remove-history {
  float: left;
  margin-right: 20px;
  margin-left: -20px;
}
.remove-account {
  margin-left: 20px;
  float: left;
}

@media screen and (max-width: 1024px) {
  .header {
    position: absolute;
    width: 100%;
  }
  .container-profile {
    position: absolute;
    bottom: 0;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 22%;
    height: 72%;
    width: 85%;
    text-align: center;
  }
  .title-profile {
    height: 150px;
    width: 150px;
    margin: 0 auto;
  }
  .title-profile img {
    height: 100%;
    width: 100%;
    border-radius: 180px;
  }
  .data-profile {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    margin: 0 auto;
    height: 60%;
    overflow-y: scroll;
    margin-top: 40px;
  }
  .scroll.profile {
    margin-top: 30px;
    height: auto;
  }
  .pc-profile {
    height: 100%;
    text-align: center;
  }
  p {
    font-size: 20px;
  }
  .titulos {
    color: black;
  }
  .datos {
    color: gray;
  }
  .span_white {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
  .remove-btns {
    margin-top: 40px;
  }
  .remove-history {
    margin-bottom: 20px;
    margin-right: 10px;
    margin-left: 10px;
    width: 100%;
  }
  .remove-account {
    margin-right: 10px;
    margin-left: 10px;
    width: 100%;
  }
}
</style>
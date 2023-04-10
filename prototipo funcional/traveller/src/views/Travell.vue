<template>
  <v-container fluid class="ma-0 pa-0 cont_travell white">
    <Header class="header" />
    <div class="container_travel">
      <div class="buttons_travel">
        <div class="destino">
          <v-text-field
            label="Destino"
            outlined
            prepend-inner-icon="mdi-map-marker"
            v-model="dest"
          ></v-text-field>
        </div>
        <div class="viajar">
          <v-btn @click="viajar()" block elevation="4" x-large color="black"
            ><span class="span_white">Viajar</span></v-btn
          >
        </div>
      </div>
      <div class="div_img">
        <img src="@/assets/travel.png" />
      </div>
    </div>
  </v-container>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  data: () => ({
    dest: "",
  }),
  components: {
    Header,
  },
  methods: {
    viajar() {
      this.$datos.forEach((user) => {
        if (user.active === true) {
          let date = new Date();
          let final_date = "";
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let hour = date.getHours() + ':' + date.getMinutes()
          if (month < 10) {
            final_date = day + "/0" + month + "/" + year;
          } else {
            final_date = day + "/" + month + "/" + year;
          }
          final_date = final_date.toString();
          hour = hour.toString();
          let viaje = {
            origen: "Salamanca",
            destino: this.dest,
            fecha: final_date,
            hora: hour
          };
          user.viajes.unshift(viaje);
        }
      });
      this.dest = "";
      this.$router.push({ name: "Travelling" });
    },
  },
};
</script>

<style scoped>
.cont_travell {
  height: 100%;
}
.header {
  position: absolute;
}
.container_travel {
  margin-left: 20%;
  margin-right: 5%;
  margin-top: 8%;
  margin-bottom: 10%;
  height: 54%;
}
.buttons_travel {
  height: 15%;
  width: 80%;
  margin-left: 130px;
}
.destino {
  margin-left: 30px;
  width: 50%;
  float: left;
}
.viajar {
  margin-right: 30px;
  width: 30%;
  float: right;
}
.div_img {
  margin: 0 auto;
  width: 85%;
  height: 120%;
  border: black 5px solid;
  border-radius: 10px;
}
.div_img img {
  display: block;
  height: 100%;
  width: 100%;
}
.span_white {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  .cont {
    height: 100%;
  }
  .header {
    position: absolute;
    width: 100%;
  }
  .container_travel {
    position: absolute;
    bottom: 0;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 22%;
    height: 72%;
    width: 85%;
  }
  .buttons_travel {
    position: absolute;
    bottom: 0;
    height: 30%;
    margin-left: 0px;
    width: 100%;
  }
  .destino {
    margin-top: 20px;
    margin-right: 20px;
    width: 80%;
  }
  .viajar {
    width: 80%;
  }
  .div_img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70%;
    border: black 5px solid;
    border-radius: 10px;
  }
  .div_img img {
    display: block;
    height: 100%;
    width: 100%;
  }
  .span_white {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
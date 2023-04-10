<template>
  <v-container fluid class="ma-0 pa-0 cont_his white">
    <Header class="header" />
    <div class="container-history">
      <div class="title-history">
        <h1>Mis viajes</h1>
      </div>
      <div class="data-history">
        <div class="scroll-history">
          <v-data-table
            :headers="headers"
            :items="travels"
            :items-per-page="10"
            class="elevation-2"
          >
            <template v-slot:item.options="{}">
              <v-btn @click="viajar()" block color="black"
                ><span class="span_white">Viajar</span></v-btn
              >
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  data: () => ({
    headers: [
      {
        text: "Origen",
        value: "origen",
        align: 'center'
      },
      { text: "Destino", value: "destino", align: 'center' },
      { text: "Fecha", value: "fecha", align: 'center' },
      { text: "Hora", value: "hora", align: 'center' },
      { text: "Repetir", value: "options", align: 'center' },
    ],
    travels: []
  }),
  components: {
    Header,
  },
  methods: {
    viajar() {
      this.$router.push({ name: "Travelling" });
    }
  },
  created() {
    this.$datos.forEach(user => {
      if(user.active === true){
        this.travels = user.viajes
      }
    });
  }
};
</script>

<style scoped>
.cont_his {
  height: 100%;
}
.header {
  position: absolute;
}
.container-history {
  margin-left: 22%;
  margin-right: 7%;
  margin-top: 8%;
  margin-bottom: 10%;
  height: 75%;
}
.title-history {
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 30px;
}
.travel-btn {
    width: 60%;
}
.span_white {
  color: white;
  font-size: 20px;
  font-weight: bold;
}


@media screen and (max-width: 1024px) {
  .header {
    position: absolute;
    width: 100%;
  }
  .container-history {
    position: absolute;
    bottom: 0;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 22%;
    height: 72%;
    width: 85%;
  }
  .title-history {
    display: none;
  }
  .data-history {
    height: 85%;
    overflow-y: scroll;
  }
  .scroll-history {
    height: auto;
  }
}
</style>
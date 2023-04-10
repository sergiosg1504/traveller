<template>
  <v-container fluid class="ma-0 pa-0 cont_travelling white">
    <div class="container_travelling">
      <div class="icon">
        <font-awesome-icon class="icon_icon" icon="check" />
      </div>
      <div class="btn">
        <v-btn @click="volver()" block elevation="4" x-large color="black"
          ><span class="span_white">Volver</span></v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({}),
  methods: {
      volver() {
          this.$router.push({ name: "Travel" });
      }
  },
};
</script>

<style scoped>
.cont_travelling {
  height: 100%;
}
.container_travelling {
  margin-top: 15%;
  margin-bottom: 10%;
  height: 54%;

}
.icon {
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    height: 40%;
    width: 40%;
}
.icon_icon {
    height: 100%;
    width: 100%;
}
.btn {
    width: 30%;
    margin: 0 auto;
}
.span_white {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  .cont_travelling {
  height: 100%;
}
.container_travelling {
  margin-top: 60%;
  margin-bottom: 10%;
  height: 54%;

}
.icon {
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    height: 40%;
    width: 40%;
}
.icon_icon {
    height: 100%;
    width: 100%;
}
.btn {
    width: 40%;
    margin: 0 auto;
}
.span_white {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
}
</style>
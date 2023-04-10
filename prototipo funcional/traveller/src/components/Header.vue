<template>
  <div class="cont_header">
    <div class="head">
      <h1 @click="$router.push({ path: '/travel' })">TRAVELLER</h1>
      <v-spacer v-if="!mobile" />
      <span v-if="!mobile">Sergio Sánchez</span>
    </div>

    <v-navigation-drawer
      v-if="!mobile"
      class="menu black"
      dark
      width="16%"
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-content>
            <v-btn v-if="item.title === 'Emergencia'" block elevation="4" large color="red"
              ><span class="span_margin_white">{{ item.title }}</span></v-btn
            >
            <v-btn v-else block elevation="4" large color="white"
              ><span class="span_margin">{{ item.title }}</span></v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar-nav-icon class="menu_btn" v-if="mobile" @click.stop="drawer = !drawer" />
    <v-navigation-drawer v-if="mobile" v-model="drawer" class="black" absolute temporary>
      <v-list>
        <v-app-bar-nav-icon class="menu_btn white" @click.stop="drawer = !drawer" />
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-content>
            <v-btn v-if="item.title === 'Emergencia'" block elevation="4" large color="red"
              ><span class="span_margin_white">{{ item.title }}</span></v-btn
            >
            <v-btn v-else block elevation="4" large color="white"
              ><span class="span_margin">{{ item.title }}</span></v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: 1,
    ant_status: null,
    mobile: false,
    drawer: false,
    items: [
      { title: "Realizar viaje", path: "/travel" },
      { title: "Mis viajes", path: "/history" },
      { title: "Mi perfil", path: "/profile" },
      { title: "Configuración", path: "/config" },
      { title: "Cerrar sesión", path: "/" },
      { title: "Emergencia", path:"/travelling"}
    ],
  }),
  created() {
    window.addEventListener("resize", this.onResize);
    if (window.innerWidth < 1024) this.mobile = true;
    else this.mobile = false;
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
.cont_header {
  height: 100%;
  width: 100%;
}
.head {
  background: black;
  width: 100%;
  height: 6%;
  display: flex;
  align-items: center;
}
.head h1 {
  margin-left: 25px;
  color: white;
  font-family: Iceland;
  font-size: 60px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
}
.head span {
  color: white;
  font-size: 20px;
  margin-right: 40px;
}
.menu {
  height: 94% !important;
}
.v-btn {
  margin-top: 10px;
  margin-bottom: 10px;
}
.span_margin {
  font-size: 18px;
  color: black;
}
.sos_btn {
  margin-right: 10px;
  margin-left: 10px;
}
.span_margin_white {
  font-size: 20px;
  font-weight: bold;
  color: white;
}



@media screen and (max-width: 1024px) {
.head {
  background: black;
  width: 100%;
  height: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.head h1 {
  margin-top: 40px;
  color: white;
  font-family: Iceland;
  font-size: 50px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
}
.menu_btn {
  position: absolute;
  top: 65px;
  left: 25px;
  background: white;
}
.v-btn--icon.v-size--default {
    height: 46px;
    width: 46px;
}
.v-list {
  margin-top: 120px;
}

.v-btn {
  margin-top: 10px;
}
.span_margin {
  font-size: 18px;
  color: black;
}
.span_margin_white {
  font-size: 20px;
  font-weight: bold;
  color: white;
}
}
</style>
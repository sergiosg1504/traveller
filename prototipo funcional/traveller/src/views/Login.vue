<template>
  <v-container fluid class="ma-0 pa-0 cont_login">
    <div class="col-img">
      <img src="@/assets/tierra_cut.jpg" />
    </div>
    <div v-if="this.status === 1" class="col-data-login">
      <div class="inputs">
        <div v-if="!mobile" class="options">
          <button class="signin" @click="goSign()">
            <p><strong>Iniciar sesión</strong></p>
            <hr class="line" />
          </button>
          <button class="register" @click="goRegister()">
            <p>Registrate</p>
          </button>
          <div class="div_errors">
            <span class="errors"> {{ this.error }}</span>
          </div>
        </div>
        <div v-else class="options">
          <div class="rem">
            <p><strong>Iniciar sesión</strong></p>
            <hr class="line_rem" />
          </div>
          <div class="div_errors">
            <span class="errors"> {{ this.error }}</span>
          </div>
        </div>
      </div>
      <div class="fields">
        <v-row v-if="!mobile" align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Correo electrónico"
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Contraseña"
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="passwd"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Correo electrónico"
              dense
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Contraseña"
              dense
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="passwd"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-btn @click="sign()" block elevation="4" large color="black"
              ><span>Entrar</span></v-btn
            >
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-btn
              @click="goRemember()"
              style="margin-top: 15px"
              block
              color="grey"
              plain
              >¿Has olvidado la contraseña?</v-btn
            >
          </v-col>
          <v-col v-if="mobile" cols="12" sm="2" md="8">
            <v-btn @click="goRegister()" block elevation="4" large color="grey"
              ><span>Registrarse</span></v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-if="this.status === 2" class="col-data-register">
      <div class="inputs">
        <div v-if="!mobile" class="options">
          <button class="signin" @click="goSign()">
            <p>Iniciar sesión</p>
          </button>
          <button class="register" @click="goRegister()">
            <p><strong>Registrate</strong></p>
            <hr class="line" />
          </button>

          <div class="div_errors">
            <span class="errors"> {{ this.error }}</span>
          </div>
        </div>
        <div v-else class="options">
          <div class="rem">
            <p><strong>Registrate</strong></p>
            <hr class="line_rem" />
          </div>
          <div class="div_errors">
            <span class="errors"> {{ this.error }}</span>
          </div>
        </div>
      </div>
      <div class="fields">
        <v-row v-if="!mobile" align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Nombre"
              outlined
              prepend-inner-icon="mdi-account"
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Apellidos"
              outlined
              prepend-inner-icon="mdi-account"
              v-model="surname"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Correo electrónico"
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Fecha de nacimiento"
              outlined
              prepend-inner-icon="mdi-calendar"
              v-model="date"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Contraseña"
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="passwd"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Repetir contraseña"
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="passwd_rep"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Nombre"
              dense
              outlined
              prepend-inner-icon="mdi-account"
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Apellidos"
              dense
              outlined
              prepend-inner-icon="mdi-account"
              v-model="surname"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Correo electrónico"
              dense
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Fecha de nacimiento"
              dense
              outlined
              prepend-inner-icon="mdi-calendar"
              v-model="date"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Contraseña"
              dense
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="passwd"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Repetir contraseña"
              dense
              outlined
              prepend-inner-icon="mdi-lock"
              v-model="passwd_rep"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-btn @click="register()" block elevation="4" large color="black"
              ><span>Registrarse</span></v-btn
            >
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-btn
              @click="goRemember()"
              style="margin-top: 15px"
              block
              color="grey"
              plain
              >¿Has olvidado la contraseña?</v-btn
            >
          </v-col>
          <v-col v-if="mobile" cols="12" sm="2" md="8">
            <v-btn @click="goSign()" block elevation="4" large color="grey"
              ><span>Iniciar sesión</span></v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-if="this.status === 3" class="col-data-remember">
      <div class="inputs">
        <div class="options">
          <div class="rem">
            <p><strong>Recuperar contraseña</strong></p>
            <hr class="line_rem" />
          </div>
          <div class="div_errors">
            <span class="errors"> {{ this.error }}</span>
          </div>
        </div>
      </div>
      <div class="fields">
        <v-row v-if="!mobile" align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Correo electrónico"
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-text-field
              label="Correo electrónico"
              dense
              outlined
              prepend-inner-icon="mdi-email"
              v-model="email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12" sm="2" md="8">
            <v-btn @click="remember()" block elevation="4" large color="black"
              ><span>Enviar correo</span></v-btn
            >
          </v-col>
          <v-col cols="12" sm="2" md="8">
            <v-btn
              @click="goBack()"
              style="margin-top: 15px"
              block
              color="grey"
              plain
              ><font-awesome-icon icon="arrow-left" />&nbsp;&nbsp;Volver</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="title">
      <h1>TRAVELLER</h1>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    datos_app: {
      type: Object,
      default: () => {},
    },
  },
  name: "HomeView",
  data: () => ({
    status: 1,
    ant_status: null,
    mobile: true,
    datos: null,
    name: "",
    surname: "",
    email: "",
    date: "",
    passwd: "",
    passwd_rep: "",
    error: "",
  }),
  created() {
    window.addEventListener("resize", this.onResize);
    if (window.innerWidth < 1024) this.mobile = true;
    else this.mobile = false;
    this.$datos.forEach((user) => {
      if (user.active === true) {
        user.activo === false;
      }
    });
    this.name = 
      this.surname =
      this.email =
      this.date =
      this.passwd =
      this.passwd_rep =
      this.error =
        "";
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      if (window.innerWidth < 1024) this.mobile = true;
      else this.mobile = false;
    },
    goSign() {
      this.status = 1;
      this.name =
        this.surname =
        this.email =
        this.date =
        this.passwd =
        this.passwd_rep =
        this.error =
          "";
    },
    goRegister() {
      this.status = 2;
      this.name =
        this.surname =
        this.email =
        this.date =
        this.passwd =
        this.passwd_rep =
        this.error =
          "";
    },
    goRemember() {
      this.ant_status = this.status;
      this.status = 3;
      this.name =
        this.surname =
        this.email =
        this.date =
        this.passwd =
        this.passwd_rep =
        this.error =
          "";
    },
    goBack() {
      this.status = this.ant_status;
      this.name =
        this.surname =
        this.email =
        this.date =
        this.passwd =
        this.passwd_rep =
        this.error =
          "";
    },
    sign() {
      this.$datos.forEach((user) => {
        if (user.correo === this.email && user.pass === this.passwd) {
          user.active = true;
          this.$router.push({ name: "Travel" });
        }
      });
      this.error = "Correo o contraseña no válidos";
    },
    register() {
      if (
        this.name === "" ||
        this.surname === "" ||
        this.correo === "" ||
        this.fecha === "" ||
        this.passwd === "" ||
        this.passwd_rep === ""
      ) {
        this.error = "Ningún campo puede estar vacío";
      } else if (this.passwd !== this.passwd_rep) {
        this.error = "Las contraseñas deben coincidir";
      } else {
        let user = {
          active: true,
          nombre: this.name,
          apellidos: this.surname,
          correo: this.email,
          fecha: this.date,
          pass: this.passwd,
          viajes: [],
        };
        this.$datos.push(user);
        this.$router.push({ name: "Travel" });
      }
    },
    remember() {
      this.$datos.forEach((user) => {
        if (user.correo === this.email) this.status = 1;
      });
      this.error = "Correo no válido";
    },
  },
};
</script>

<style scoped>
.div_errors {
  margin-top: 10px;
  text-align: center;
}
.errors {
  font-size: 20px;
  font-weight: bold;
  color: red;
}
.cont_login {
  height: 100%;
}
.col-img {
  float: left;
  width: 65%;
}
.col-img img {
  width: 100%;
}
.col-data-login {
  float: right;
  width: 35%;
  height: 100%;
  background: white;
}
.col-data-register {
  float: right;
  width: 35%;
  height: 100%;
  background: white;
}
.col-data-remember {
  float: right;
  width: 35%;
  height: 100%;
  background: white;
}
.title {
  position: absolute;
  top: 12%;
  left: 70%;
}
.title h1 {
  color: black;
  font-family: Iceland;
  font-size: 90px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
}
.inputs {
  text-align: center;
  margin-top: 220px;
}
.options {
  font-size: 20px;
}
.options .signin {
  display: inline-block;
  margin-right: 50px;
  text-align: center;
}
.options .register {
  display: inline-block;
  margin-left: 50px;
  text-align: center;
}
.rem {
  display: inline-block;
  text-align: center;
}
.line {
  background: black;
  height: 5px;
  width: 120px;
}
.line_rem {
  background: black;
  height: 5px;
  width: 220px;
}
.fields {
  margin-top: 50px;
}
.v-btn {
  text-transform: none !important;
}
.v-btn span {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  .div_errors {
    margin-top: 5px;
    text-align: center;
  }
  .errors {
    font-size: 15px;
    font-weight: bold;
    color: red;
  }
  .cont {
    position: fixed;
    height: 100%;
    width: 100%;
    background: black;
  }
  .col-img {
    position: absolute;
    width: 100%;
    top: 40px;
  }
  .col-img img {
    width: 100%;
  }
  .col-data-login {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: white;
    text-align: center;
  }
  .col-data-register {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 81%;
    background: white;
  }
  .col-data-remember {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 35%;
    background: white;
    text-align: center;
  }
  .title {
    position: absolute;
    top: 10%;
    left: 14%;
  }
  .title h1 {
    color: white;
    font-family: Iceland;
    font-size: 60px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700;
    line-height: 26.4px;
  }
  .inputs {
    text-align: center;
    margin-top: 20px;
  }
  .options {
    font-size: 24px;
  }
  .options .signin {
    display: inline-block;
    margin-right: 50px;
    text-align: center;
  }
  .options .register {
    display: inline-block;
    margin-left: 50px;
    text-align: center;
  }
  .rem {
    display: inline-block;
    text-align: center;
  }
  .line {
    background: black;
    height: 4px;
    width: 120px;
  }
  .line_rem {
    background: black;
    height: 4px;
    margin-top: -10px;
    width: 238px;
  }
  .fields {
    text-align: center;
    margin-top: 20px;
    margin-right: 40px;
    margin-left: 40px;
  }
  .v-row {
    width: 500px;
  }
  .v-btn {
    text-transform: none !important;
  }
  .v-btn span {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
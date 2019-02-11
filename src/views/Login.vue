<template>
  <div class="login">
    <v-container>
      <v-layout justify-center>
        <img src="@/assets/tot-logo.png" width="100%" height="100%">
      </v-layout>
      <form>
        <v-layout justify-center xs12 md4>
          <v-flex>
            <v-layout justify-center>
              <v-flex xs12 md4>
                <v-layout justify-center>
                  <img src="@/assets/user-logo.png" width="30%" height="60%">
                </v-layout>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                <v-text-field v-model="password" :rules="nameRules" label="Password" required></v-text-field>
                <v-layout justify-center>
                  <v-btn @click="sigininClicked">Sign-in</v-btn>
                  <v-btn @click="clearClicked">clear</v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
      return{
        valid: false,
    password: "",
    nameRules: [
      v => !!v || "Name is required",
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
      }
  },
  methods:{
      clearClicked() {
          this.email = "";
          this.password = "";
      },
      signinClicked() {
          // check password and email
      }
  }
}

</script>


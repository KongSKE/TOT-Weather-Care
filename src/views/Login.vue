<template>
  <div class="login">
    <!-- <v-alert id = 'alert' :value="false" type="error">Your email or password is incorrect.</v-alert> -->

    <v-container>
      <v-layout justify-center>
        <img src="@/assets/tot-logo.png" width="70%" height="70%">
      </v-layout>
      <form>
        <v-layout justify-center xs12 md4>
          <v-flex>
            <v-layout justify-center>
              <v-flex xs12 md4>
                <v-layout justify-center>
                  <img src="@/assets/user-logo.png" width="30%" height="60%">
                </v-layout>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ref="email"></v-text-field>
                <v-text-field type="password" v-model="password" :rules="nameRules" label="Password" required></v-text-field>
                <v-layout justify-center>
                  <v-btn @click="signinClicked">Sign-in</v-btn>
                  <v-btn @click="clearClicked">clear</v-btn>
                </v-layout>
                <v-layout row wrap justify-center>
                  <a @click="linkClicked">Don't have an account yet?</a>
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
import Register from "@/views/Register";
export default {
  data() {
    return {
      valid: false,
      password: "",
      nameRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    clearClicked() {
      this.email = "";
      this.password = "";
    },
    signinClicked() {
      // check password and email
      var email_name = email
      var password_name = password
      console.log(this.email)
    },
    linkClicked() {
      window.location = "/Register";
    }
  }
};
</script>


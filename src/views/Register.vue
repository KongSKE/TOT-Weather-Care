<template>
  <div>
    <!-- Stepper -->
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Enter your ID Number</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Enter your Email and Password</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Finished !!</v-stepper-step>
      </v-stepper-header>

      <!-- Stepper items -->
      <v-stepper-items>
        <!-- Step 1 -->
        <v-stepper-content step="1">
          <v-card>
            <!-- v-model="valid" -->
            <v-form>
              <v-container>
                <v-layout v-if="!inputError.status" justify-center>
                  <v-flex xs12 md4>
                    <!-- :rules="nameRules" -->
                    <v-alert :value="true" type="error">{{ inputError.message }}</v-alert>
                  </v-flex>
                </v-layout>
                <v-layout justify-center>
                  <v-flex xs12 md4>
                    <!-- :rules="nameRules" -->
                    <v-text-field
                      v-model="id"
                      :counter="10"
                      label="ID Number"
                      type="number"
                      placeholder="1234567890"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap justify-center>
                  <v-btn color="primary" @click="step1NextStep">Continue</v-btn>
                  <v-btn flat @click="goToLoginPage">Cancel</v-btn>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-stepper-content>

        <!-- Step 2 -->
        <v-stepper-content step="2">
          <v-card>
            <v-form>
              <v-container>
                <v-layout row wrap justify-center>
                  <v-flex xs12 md4>
                    <!-- :rules="nameRules" -->
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Email"
                      placeholder="example@tot.com"
                      required
                    ></v-text-field>
                    <!-- :rules="nameRules" -->
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      placeholder="123456"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap justify-center>
                  <v-btn color="primary" @click="step2NextStep">Continue</v-btn>
                  <v-btn @click="e1 = 1" flat>Cancel</v-btn>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-stepper-content>

        <!-- Step 3 -->
        <v-stepper-content step="3">
          <v-card>
            <v-form>
              <v-container>
                <v-layout row wrap justify-center style="margin: 5px 0px 10px 0px;">
                  <h1>Congratulations! Your register has finished.</h1>
                </v-layout>
                <v-layout row wrap justify-center style="margin: 5px 0px 10px 0px;">
                  <v-btn color="primary" @click="goToLoginPage">Get Started</v-btn>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGIN_EMAIL } from "@/store/actions.type";
import axios from "axios";
import firebase from "@/config/firebaseConfig";

var qs = require("qs");

export default {
  name: "Home",
  data() {
    return {
      e1: 0,
      text: "",
      id: "",
      email: "",
      password: "",
      inputError: {
        status: true,
        message: ""
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    goToLoginPage() {
      window.location = "/login";
    },
    step1NextStep() {
      var vm = this;
      axios
        .post(
          "https://tot-hackathon-2019.firebaseapp.com/api/user/checkid",
          qs.stringify({ userid: this.id }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(function(response) {
          if (response.data.return_code == 500) {
            console.log("Success! This number can use.");
            vm.inputError.status = true;
            vm.inputError.message = "";
            vm.e1 = 2;
          } else {
            vm.inputError.status = false;
            vm.inputError.message = "This ID has been used, Please try again.";
            console.log("Fail! This number cannot use.");
          }
        })
        .catch(function(error) {
          vm.inputError.status = false;
          vm.inputError.message = "Error occured, Please try again.";
          console.log(error);
        });
    },
    step2NextStep() {
      var vm = this;
      console.log(vm.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(vm.email, vm.password)
        .then(function(response) {
          console.log(vm.id);
          console.log(response.user.uid);
          response.user
            .updateProfile({
              displayName: "Varit",
              photoURL:
                "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/26166557_1859158550821212_174884729598333408_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk7-3.fna&oh=e0b1fefc231157c46beb909e4aeabf09&oe=5CFC7BC5"
            })
            .then(
              function() {
                axios
                  .post(
                    "https://tot-hackathon-2019.firebaseapp.com/api/user/register",
                    qs.stringify({
                      userId: vm.id,
                      name: "Varit",
                      lastname: "Assavavisidchai",
                      email: vm.email,
                      workplace: "Bangsaothong",
                      telephone: "085-973-2299",
                      uId: response.user.uid
                    }),
                    {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                      }
                    }
                  )
                  .then(function(response) {
                    if (response.data.return_code == 200) {
                      vm.e1 = 3;
                    } else {
                    }
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
              },
              function(error) {
                // An error happened.
              }
            );
        });
    },
    appendIconCallback() {},
    prependIconCallback() {}
  }
};
</script>

<style>
/* Stepper style */
#input-usage .v-input__prepend-outer,
#input-usage .v-input__append-outer,
#input-usage .v-input__slot,
#input-usage .v-messages {
  border: 1px dashed rgba(0, 0, 0, 0.4);
}
</style>
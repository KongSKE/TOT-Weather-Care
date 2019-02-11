<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex>
          <v-layout justify-center>
            <img src="@/assets/user-logo.png" width="20%" height="20%">
          </v-layout>
          <v-form>
            <v-container>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="First Name" placeholder="First Name" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Last Name" placeholder="Last Name" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Telephone Number" placeholder="0x-xxx-xxxx" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Car" placeholder="Honda, Toyota, etc." disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Gasoline" placeholder="Diesel, bensin, etc." disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-textarea
                    name="input-7-1"
                    label="Address"
                    value
                    hint="00/xx Chick road. Raccoon city England"
                  disabled></v-textarea>
                </v-flex>
              </v-layout>
              <!-- <v-layout row wrap justify-center>
                <v-btn color="success" @click="saveClicked">Save</v-btn>
                <v-btn color="error" @click="cancelClicked">Cancel</v-btn>
              </v-layout>-->
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import Home from "@/views/Home";
import Axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    getProfile() {
      var vm = this;
      axios.get(
        "https://tot-hackathon-2019.firebaseapp.com/api/user/checkid",
        qs.stringify({ userid: this.email }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
    }
  }
};
</script>

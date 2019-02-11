<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex>
          <v-layout justify-center>
            <img src="@/assets/user.jpg" width="20%" height="20%">
          </v-layout>
          <v-form>
            <v-container>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="getUserInfo.name" placeholder="First Name" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="getUserInfo.lastname" placeholder="Last Name" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="getUserInfo.telephone" placeholder="0x-xxx-xxxx" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Honda" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Diesel" disabled></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field name="input-7-1" label="55/127 Ramintra" value disabled></v-text-field>
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  }
};
</script>

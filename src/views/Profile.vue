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
                  <v-text-field label="First Name"
                  placeholder="First Name"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Last Name"
                  placeholder="Last Name"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Telephone Number"
                  placeholder="0x-xxx-xxxx" 
                  type="number">

                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Car"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm6 md6>
                  <v-text-field label="Gasoline"
                  placeholder="Diesel, bensin"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 md6>
                  <v-textarea
                    name="input-7-1"
                    label="Address"
                    value
                    hint="00/xx Chick road. Raccoon city England"
                  ></v-textarea>
                </v-flex>
              </v-layout>
              <!-- <v-layout row wrap justify-center>
                <v-btn color="success" @click="saveClicked">Save</v-btn>
                <v-btn color="error" @click="cancelClicked">Cancel</v-btn>
              </v-layout> -->
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>

import Home from "@/views/Home";

export default {
    data() {
        return {

        }
    },
    methods: {
        saveClicked() {

        },
        cancelClicked() {
            window.location = Home;
        }
    }
};
</script>

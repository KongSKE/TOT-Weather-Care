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
                    <v-form v-model="valid">
                        <v-container>
                            <v-layout justify-center>
                                <v-flex xs12 md4>
                                    <v-text-field
                                        v-model="firstname"
                                        :rules="nameRules"
                                        :counter="10"
                                        label="ID Number"
                                        type="number"
                                        placeholder="1234567890"
                                        required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap justify-center>
                                <v-btn
                                    color="primary"
                                    @click="e1 = 2"
                                > Continue </v-btn>
                                <v-btn flat>
                                    Cancel
                                </v-btn>
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-card>
            </v-stepper-content>
            <!-- Step 2 -->
            <v-stepper-content step="2">
                <v-card>
                    <v-form v-model="valid">
                        <v-container>
                        <v-layout row wrap justify-center>
                            <v-flex xs12 md4>
                                <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    label="Email"
                                    placeholder="example@tot.com"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    label="Password"
                                    type="password"
                                    placeholder="123456"
                                    required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap justify-center>
                            <v-btn
                                color="primary"
                                @click="e1 = 3"
                            > Continue </v-btn>
                            <v-btn flat>
                                Cancel
                            </v-btn>
                        </v-layout>
                        </v-container>
                    </v-form>
                </v-card>
            </v-stepper-content>
            <!-- Step 3 -->
            <v-stepper-content step="3">
                <v-card>
                    <v-form v-model="valid">
                        <v-container>
                            <v-layout row wrap justify-center style="margin: 5px 0px 10px 0px;">
                                <h1>Congratulations! Your register has finished.</h1>
                            </v-layout>
                            <v-layout row wrap justify-center style="margin: 5px 0px 10px 0px;">
                                <v-btn
                                    color="primary"
                                    @click="e1 = 1"
                                >Get Started</v-btn>
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
import { FETCH_ARTICLE } from "@/store/actions.type";

export default {
  name: "Home",
  data() {
    return {
        e1: 0,
         text: ''
    }
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch(FETCH_ARTICLE);
    },
    appendIconCallback () {},
      prependIconCallback () {}
  },
  mounted: function() {
    this.fetchArticles();
  },
  computed: { ...mapGetters(["articles"]) }
};
</script>

<style>
  #input-usage .v-input__prepend-outer,
  #input-usage .v-input__append-outer,
  #input-usage .v-input__slot,
  #input-usage .v-messages {
    border: 1px dashed rgba(0,0,0, .4);
  }
</style>
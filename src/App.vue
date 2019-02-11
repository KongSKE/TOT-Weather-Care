<template>
  <v-app>
    <Header v-if="isAuthenticated"></Header>

    <v-container fluid grid-list-xl style="margin-top: 4%">
      <router-view></router-view>
    </v-container>

    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";

export default {
  name: "App",
  components: { Footer, Header },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>

<style>
* {
  text-transform: none !important;
  /* font-family: 'Kanit', sans-serif; */
}
</style>
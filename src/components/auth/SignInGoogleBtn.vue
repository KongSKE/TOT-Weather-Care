<template>
  <v-btn block color="error" @click="signin">
    <v-icon left class="pr-2">fab fa-google</v-icon>
    <span class="subheading">Sign in with Google</span>
  </v-btn>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGIN_GOOGLE } from "@/store/actions.type";
export default {
  name: "SignInGoogleBtn",
  components: {},
  methods: {
    signin() {
      this.$store.dispatch(LOGIN_GOOGLE);
    }
  },
  computed: {
    ...mapGetters(["getError", "isLoading"])
  }
};
</script>
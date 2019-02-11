<template>
  <div>
    <v-navigation-drawer temporary v-model="sideNav" app>
      <v-toolbar v-if="isAuthenticated" flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile @click="redirect('/profile')" avatar>
            <v-list-tile-avatar>
              <img :src="`${this.getUser.photoURL}`" alt="userImg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{this.getUser.displayName.split(" ")[0]}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile @click="redirect('/home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="redirect('/blog')">
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark class="warning">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <!-- Toolbar label -->
      <v-toolbar-title>TOT Hackathon 2019</v-toolbar-title>
      <!-- Branch selection in nav bar-->
      <v-flex class="hidden-md-and-down" :style="branchSelectionStyle" >
        <v-select
          :items="items"
          label="Select your Branch"
        ></v-select>
      </v-flex>
      <!-- Option -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" class="subheading" flat>
          <v-icon left dark>home</v-icon>Home
        </v-btn>
        <v-btn to="/blog" class="subheading" flat>
          <v-icon left dark>supervisor_account</v-icon>Blog
        </v-btn>
        <v-btn class="subheading" v-if="!isAuthenticated" flat @click="openDialog">Get Started
          <v-icon right dark>navigate_next</v-icon>
        </v-btn>
        <v-layout v-else>
          <v-btn flat class="body-2">
            <v-avatar class>
              <img :src="`${this.getUser.photoURL}`" alt="userImg">
            </v-avatar>
            <span class="pl-2">{{this.getUser.displayName.split(" ")[0]}}</span>
          </v-btn>
          <v-btn @click="signOut" flat>Sign Out
            <v-icon left dark>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Branch selection below -->
    <v-flex class="hidden-lg-and-up" style="margin-top: 50px" :style="branchSelectionStyle" >
      <v-select
        :items="items"
        label="Select your Branch"
      ></v-select>
    </v-flex>
    <!-- Login dialog -->
    <v-dialog v-model="dialogVisible" max-width="600">
      <v-card>
        <v-card-title style="font-size: 25px">Welcome Back!</v-card-title>
        <v-divider></v-divider>

        <v-card-text
          style="font-size: 20px; color: #a6a6a6"
        >Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</v-card-text>

        <v-card-actions>
          <v-layout row wrap>
            <v-flex lg6 sm12>
              <SignInFacebookBtn/>
            </v-flex>
            <v-flex lg6 sm12>
              <SignInGoogleBtn/>
            </v-flex>
          </v-layout>
        </v-card-actions>
        <v-card-text
          style="font-size: 15px; color: #a6a6a6"
        >Click “Sign in” above to accept Medium’s Terms of Service and Privacy Policy.</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";
import SignInFacebookBtn from "@/components/auth/SignInFacebookBtn";
import SignInGoogleBtn from "@/components/auth/SignInGoogleBtn";

export default {
  name: "Header",
  components: { SignInFacebookBtn, SignInGoogleBtn },
  data() {
    return {
      activeIndex: this.$route.path,
      dialogVisible: false,
      loading: true,
      sideNav: false,
      items: ['Bangkok', 'Lopburi', 'Sukhothai', 'Phitsanulok']
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    signOut() {
      this.$store.dispatch(LOGOUT);
    },
    redirect(url) {
      window.location.href = url;
    }
  },
  computed: {
    ...mapGetters(["getUser", "isAuthenticated", "isLoading"]),
    branchSelectionStyle() {
      return {
        'padding': '10px 100px 0px 100px'
      }
    }
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        this.dialogVisible = false;
      }
    }
  }
};
</script>

<style scoped>
  @media (max-width: 600px) {

  }
</style>
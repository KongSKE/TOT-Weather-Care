<template>
  <div>
    <!-- <v-layout row wrap>
      <v-flex lg4 :key="data" v-for="data in articles">
        <v-card>
          <v-img :src="`${data.img}`" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{data.title}}</h3>
              <div>{{data.description}}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>-->
    <v-layout row class="justify-center" wrap>
      <v-flex lg9 sm12>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <p class="headline">Unhealthy</p>
                  <p class="headline">AQI: 25</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span>
              <br>
              <span>Whitehaven Beach</span>
              <br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>
          {{articles[0].data}}

    <div>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
        <v-tab v-for="n in 3" :key="n" ripple>Item {{ articles[n] }}</v-tab>
        <v-tab-item v-for="n in 3" :key="n">
          <v-card flat>
            <v-card-text>{{ text[n-1] }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>

    <v-layout>
      <v-flex lg4>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE } from "@/store/actions.type";

export default {
  name: "Home",
  data() {
    return {
      text: ["sad", "asd"]
    };
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch(FETCH_ARTICLE);
    }
  },
  mounted: function() {
    this.fetchArticles();
  },
  computed: { ...mapGetters(["articles"]) }
};
</script>
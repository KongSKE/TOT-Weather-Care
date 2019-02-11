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
                  <p class="headline">{{articles[0].aqi[0].description}}</p>
                  <p class="headline">AQI: {{articles[0].aqi[0].aqi}}</p>
                  <p>{{articles[0].aqi[0].density}}</p>
                                <span class="grey--text">{{articles[0].aqi[0].time}} Today</span>

                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>
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
    <v-layout>
      <v-flex lg4 :key="data" v-for="(data, index)  in articles[0].aqi">
        <v-card v-if="index != 0">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <p class="headline">{{data.description}}</p>
                  <p class="headline">AQI: {{data.aqi}}</p>
                  <p>{{data.density}}</p>
                  <span class="grey--text">{{articles[0].aqi[0].time}} Today</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
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
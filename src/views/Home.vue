<template>
  <div>
    <v-layout row wrap>
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
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE } from "@/store/actions.type";

export default {
  name: "Home",
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
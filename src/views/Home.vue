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
            :src="setImage(articles[0].aqi[0].aqi)"
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
            :src="setImage(data.aqi)"
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
    },
    setImage(level) {
      if(level >= 0 && level <= 50) {
        return 'https://ak4.picdn.net/shutterstock/videos/6706324/thumb/1.jpg'
      }
      else if(level >= 51 && level < 100) {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJcsQw9mAsEP-MhZ2IFDbyqdS4_BW48eah2M9jf1v7Q2e2kfc'
      }
      else if(level >= 101 && level < 150) {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaGkibJvm7W_MkiF3VXVuXKUxMZGs9grlRJ4HlQ_81QaF5faE'
      }
      else if(level >= 151 && level < 200) {
        return 'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/air%20pollution%203x2.jpg?itok=cqnVuMCV'
      }
      else if(level >= 201 && level < 300) {
        return 'https://images.wallpaperscraft.com/image/night_city_fires_light_helicopters_smoke_skyscrapers_21724_1920x1080.jpg'
      }
      else if(level > 300){
        return 'http://sciencenordic.com/sites/default/files/imagecache/620x/sn_146.jpg'
      }
    }
  },
  mounted: function() {
    this.fetchArticles();
  },
  computed: { 
    ...mapGetters(["articles"])
  }
};
</script>
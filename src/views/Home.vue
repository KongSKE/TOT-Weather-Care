<template>
  <div>
    <v-layout row class="justify-center" wrap>
      <v-flex lg9 sm12>
        <v-card>
          <v-img class="white--text" height="200px" :src="setImage(articles[0].aqi[0].aqi)">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <p class="headline">{{articles[0].aqi[0].description}}</p>
                  <p class="headline">AQI: {{articles[0].aqi[0].aqi}}</p>
                  <p>{{articles[0].aqi[0].density}} microgram / cubic meters</p>
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

    <!-- Today and tomorrow tab -->
    <div>
      <v-tabs
        v-model="active"
        color="cyan"
        dark
        centered=true
        slider-color="yellow"
        grow=true
      >
        <v-tab
          v-for="n in articles"
          :key="n"
        >{{ n.date }}</v-tab>
        <v-tab-item
          v-for="(n,nIndex) in articles"
          :key="n"
        >
          <v-card flat>
            <v-card-text></v-card-text>
              <v-container>
                <v-layout justify-center :key="data" v-for="(data, dataIndex)  in n.aqi">
                  <v-flex md8 v-if="!(nIndex == 0 && dataIndex == 0)">
                    <v-card>
                      <v-img class="white--text" height="200px" :src="setImage(data.aqi)">
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <p class="headline">{{data.description}}</p>
                              <p class="headline">AQI: {{data.aqi}}</p>
                              <p>{{data.density}} microgram / cubic meters</p>
                              <p>{{data.time}} in {{ n.date }}</p>
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
              </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE } from "@/store/actions.type";

export default {
  name: "Home",
  data() {
    return {
      // text: ["sad", "asd"],
      active: null,
      text: 'Lorem ipsum dolor sit amet',
    };
  },
  methods: {
    fetchArticles() {
      // this.$store.dispatch(FETCH_ARTICLE);
    },
    setImage(level) {
      if(level >= 0 && level <= 50) {
        return 'https://ak4.picdn.net/shutterstock/videos/6706324/thumb/1.jpg'
      }
      else if(level >= 51 && level < 100) {
        return 'https://nac.today/_storage/asset/470652/storage/master/file/12632045/06395757.jpg'
      }
      else if(level >= 101 && level < 150) {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaGkibJvm7W_MkiF3VXVuXKUxMZGs9grlRJ4HlQ_81QaF5faE'
      }
      else if(level >= 151 && level < 200) {
        return 'https://www.ecotech.com/wp-content/uploads/2017/03/Ecotech-Air-Pollution-is-More-Dangerous-Than-Terrorism-Boy-with-Mask.jpg'
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
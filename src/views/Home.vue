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
      <v-tabs v-model="active" color="cyan" dark centered="true" slider-color="yellow" grow="true">
        <v-tab v-for="n in articles" :key="n">{{ n.date }}</v-tab>
        <v-tab-item v-for="(n,nIndex) in articles" :key="n">
          <v-card flat>
            <v-card-text></v-card-text>
            <v-container>
              <v-layout>
                <v-flex lg4 :key="data" v-for="(data, dataIndex)  in n.aqi">
                  <!-- <div v-if="!(nIndex == 0 && dataIndex == 0)"> -->
                  <div>
                    <v-card>
                      <v-img
                        id="jamie"
                        class="white--text"
                        height="200px"
                        :src="setImage(data.aqi)"
                      >
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

                    <!-- vue hover -->
                    <!-- <v-hover>
                      <v-card
                        slot-scope="{ hover }"
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                      >
                        <v-img
                          :aspect-ratio="16/9"
                          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                        >
                          <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                              style="height: 100%;"
                            >$14.99</div>
                          </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-4" style="position: relative;">
                          <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
                          <h3
                            class="display-1 font-weight-light orange--text mb-2"
                          >QW cooking utensils</h3>
                          <div
                            class="font-weight-light title mb-2"
                          >Our Vintage kitchen utensils delight any chef.
                            <br>Made of bamboo by hand
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-hover>-->
                    <!-- new hover -->
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>

    <!-- calender -->
    <v-layout>
      <v-flex>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="primary">
            <v-layout slot="day" slot-scope="{ present, past, date }" fill-height>
              <template v-if="past && tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-layout>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </div>
</template>

<style>
.jamie {
  opacity: 0.5;
}
.jamie:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>


<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE } from "@/store/actions.type";
var myDate = new Date();
var month = ("0" + (myDate.getMonth() + 1)).slice(-2);
var date = ("0" + myDate.getDate()).slice(-2);
var year = myDate.getFullYear();
var formattedDate = year + "-" + month + "-" + date;
console.log(formattedDate);

export default {
  name: "Home",
  data() {
    return {
      today: "year",
      tracked: {
        "2019-02-12": [23, 24, 24],
        "2019-02-09": [23, 45, 10],
        "2019-02-08": [10, 30, 10, 20, 30],
        "2019-02-07": [0, 78, 5],
        "2019-02-06": [0, 0, 50],
        "2019-02-05": [0, 10, 23],
        "2019-02-04": [2, 90],
        "2019-02-03": [10, 32],
        "2019-02-02": [80, 10, 10],
        "2019-02-01": [20, 25, 10]
      },
      colors: [
        "#00CC00",
        "#FFFF00",
        "#FF8C00",
        "#FF0000",
        "#CC0099",
        "#CC0000"
      ],
      category: [
        "Good",
        "Moderate",
        "Unhealthy-s",
        "Unhealthy",
        "v-Unhealthy",
        "Hazardous"
      ]
    };
  },
  methods: {
    fetchArticles() {
      // this.$store.dispatch(FETCH_ARTICLE);
    },
    setImage(level) {
      if (level >= 0 && level <= 50) {
        return "https://ak4.picdn.net/shutterstock/videos/6706324/thumb/1.jpg";
      } else if (level >= 51 && level < 100) {
        return "https://nac.today/_storage/asset/470652/storage/master/file/12632045/06395757.jpg";
      } else if (level >= 101 && level < 150) {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaGkibJvm7W_MkiF3VXVuXKUxMZGs9grlRJ4HlQ_81QaF5faE";
      } else if (level >= 151 && level < 200) {
        return "https://www.ecotech.com/wp-content/uploads/2017/03/Ecotech-Air-Pollution-is-More-Dangerous-Than-Terrorism-Boy-with-Mask.jpg";
      } else if (level >= 201 && level < 300) {
        return "https://images.wallpaperscraft.com/image/night_city_fires_light_helicopters_smoke_skyscrapers_21724_1920x1080.jpg";
      } else if (level > 300) {
        return "http://sciencenordic.com/sites/default/files/imagecache/620x/sn_146.jpg";
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
<template>
  <div>
    <v-container fill-height>
      <v-layout row wrap column align-center>
        <!-- <v-flex xs10 offset-xs1>
          <v-alert
            v-model="alert"
            dismissible
            type="success"
          >This is a success alert that is closable.</v-alert>
        </v-flex>-->
        <div class="text-xs-center">
          <v-btn v-if="!alert" color="primary" dark @click="alert = true">Reset</v-btn>
        </div>
        <v-flex>
          <h3 class="display-3">Welcome Back!</h3>

          <span class="subheading">Hello! {{getUserInfo.name}}, Welcome Home!</span>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout row class="justify-center" wrap>
      <v-flex lg5 sm12>
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
            <!-- <v-btn flat color="orange">Share</v-btn> -->
            <!-- <v-btn flat color="orange">Explore</v-btn> -->
            <v-btn icon @click="mainShow = !mainShow">
              <v-icon>{{ mainShow ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-slide-y-transition>
              <v-card-text v-show="mainShow">{{articles[0].aqi[0].suggestion}}</v-card-text>
            </v-slide-y-transition>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-divider class="my-3"></v-divider>

    <!-- Today and tomorrow tab -->
    <div>
      <v-tabs v-model="active" color="cyan" dark centered="true" slider-color="yellow" grow="true">
        <v-tab v-for="n in articles" :key="n">{{ n.date }}</v-tab>
        <v-tab-item v-for="(n) in articles" :key="n">
          <v-card flat>
            <v-container>
              <v-alert
                v-if="status.statusCode == 200"
                :value="true"
                color="success"
                icon="check_circle"
                outline
              >{{status.report}}</v-alert>
              <v-alert
                v-else
                :value="true"
                color="warning"
                icon="priority_high"
                outline
              >{{status.report}}</v-alert>
              <v-divider class="my-3"></v-divider>

              <v-layout>
                <v-flex lg4 :key="data" v-for="(data)  in n.aqi">
                  <!-- <div v-if="!(nIndex == 0 && dataIndex == 0)"> -->
                  <div>
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
                        <!-- <v-btn flat>Share</v-btn> -->
                        <v-btn
                          v-if="mask(data.aqi)"
                          @click="dialog = true"
                          flat
                          color="purple"
                        >Free mask!</v-btn>
                        <div class="text-xs-center">
                          <v-layout row justify-center>
                            <v-dialog v-model="dialog" max-width="290">
                              <v-card>
                                <v-card-title class="headline">Congratulations!</v-card-title>
                                <v-card-title class="grey title">derVmqo41vzoq0Ias</v-card-title>

                                <v-card-text>Use this generated id for receving mask (3M 9001A)</v-card-text>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="green darken-1"
                                    flat="flat"
                                    @click="dialog = false"
                                  >OK</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-layout>
                        </div>

                        <v-spacer></v-spacer>
                        <v-btn icon @click="show = !show">
                          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-slide-y-transition>
                        <v-card-text v-show="show">{{data.suggestion}}</v-card-text>
                      </v-slide-y-transition>
                    </v-card>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
        <v-divider class="my-3"></v-divider>

    <span class="title">My Calender</span>

    <!-- Calender -->
    <v-layout>
      <v-flex>
        <v-sheet height="500">
          <v-calendar :now="year" :value="year" color="primary">
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

    <!-- AI Calculate -->
    <p>AI : {{ calculateByAI }}</p>
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
/* .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
} */
</style>


<script>
import { mapGetters } from "vuex";
import { FETCH_ARTICLE } from "@/store/actions.type";
import axios from "axios";

// var myDate = new Date();
// var month = ("0" + (myDate.getMonth() + 1)).slice(-2);
// var date = ("0" + myDate.getDate()).slice(-2);
// var year = myDate.getFullYear();
// var formattedDate = year + "-" + month + "-" + date;
// console.log(formattedDate);

export default {
  name: "Home",
  data() {
    return {
      alert: true,
      active: 0,
      show: false,
      mainShow: false,
      dialog: false,
      year: "2019-02-12",
      status: {
        report: "We work as normal :)",
        statusCode: "200"
      },
      today: "year",
      tracked: {
        // "2019-02-31": [0, 10, 23, 12, 0],
        // "2019-02-30": [0, 0, 70, 30, 0],
        // "2019-02-29": [0, 10, 23, 12, 0],
        "2019-02-28": [0, 20, 30, 50, 0],
        "2019-02-27": [10, 30, 20, 40, 0],
        "2019-02-26": [0, 48, 45, 7, 0],
        "2019-02-25": [0, 0, 70, 30, 0],
        "2019-02-24": [0, 10, 23, 12, 0],
        "2019-02-23": [2, 48, 25, 15, 0],
        "2019-02-22": [10, 32, 23],
        "2019-02-21": [10, 10, 40, 30, 0],
        "2019-02-20": [20, 25, 30, 25, 0],
        "2019-02-19": [0, 20, 30, 50, 0],
        "2019-02-18": [10, 30, 20, 40, 0],
        "2019-02-17": [0, 48, 45, 7, 0],
        "2019-02-16": [0, 0, 70, 30, 0],
        "2019-02-15": [0, 10, 23, 12, 0],
        "2019-02-14": [2, 48, 25, 15, 0],
        "2019-02-13": [10, 32, 23],
        "2019-02-12": [10, 10, 40, 30, 0],
        "2019-02-11": [0, 20, 70, 10, 0],
        "2019-02-10": [20, 25, 30, 25, 0],
        "2019-02-09": [0, 20, 30, 50, 0],
        "2019-02-08": [10, 30, 20, 40, 0],
        "2019-02-07": [0, 48, 45, 7, 0],
        "2019-02-06": [0, 0, 70, 30, 0],
        "2019-02-05": [0, 40, 33, 27, 0],
        "2019-02-04": [2, 48, 35, 15, 0],
        "2019-02-03": [10, 32, 53, 5, 0],
        "2019-02-02": [10, 10, 40, 30, 0],
        "2019-02-01": [20, 25, 30, 25, 0]
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
      ],
      dialog: false
    };
  },
  methods: {
    fetchState(date) {
      console.log(
        "HEREE! " +
          "https://tot-hackathon-2019.firebaseapp.com/api/" +
          this.getCurrentBranch +
          "/" +
          date
      );
      axios
        .get(
          "https://tot-hackathon-2019.firebaseapp.com/api/" +
            this.getCurrentBranch +
            "/" +
            date
        )
        .then(function(response) {
          // status.status = response.data.status;
          return response.data.report;
        });
    },
    setIcon(level) {
      if (level == 500) {
        return {
          color: "warning",
          icon: "priority_high"
        };
      } else {
        return {
          color: "success",
          icon: "check_circle"
        };
      }
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
    },
    mask(level) {
      if (level >= 100) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function() {},
  computed: {
    ...mapGetters(["articles", "getCurrentBranch", "getUserInfo"]),
    calculateByAI() {
      let aqi = 0;
      let counter = 0;
      for (let i = 0; i < this.articles.length; i++) {
        for (let j = 0; j < this.articles[i].aqi.length; j++) {
          aqi += parseInt(this.articles[i].aqi[j].aqi);
          counter += 1;
        }
      }
      return aqi / counter;
    },
    watch: {
      active(value) {
        var vm = this;

        console.log(this.articles[value].timeStamp);
        axios
          .get(
            "https://tot-hackathon-2019.firebaseapp.com/api/" +
              this.getCurrentBranch +
              "/" +
              this.articles[value].timeStamp
          )
          .then(function(response) {
            vm.status.report = response.data.report;
            vm.status.statusCode = response.data.status;
          });
      }
    }
  }
};
</script>
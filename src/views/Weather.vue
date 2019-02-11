<template>
  <div>
    <v-layout>
      <v-container>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://cloud.lovindublin.com/images/_featuredImage/Screen-Shot-2017-05-06-at-13.24.02.png?mtime=20170506132419"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Sunny</h3>
                <div>Located two hours south of Sydney in the
                  <br>Southern Highlands of New South Wales, ...
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-container>
    </v-layout>

    <v-timeline>
      <v-timeline-item v-for="n in 4" :key="n" color="red lighten-2" large>
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-layout>
      <v-flex>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="primary">
            <template slot="day" slot-scope="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                  <div
                    v-if="!event.time"
                    slot="activator"
                    v-ripple
                    class="my-event"
                    v-html="event.title"
                  ></div>
                  <v-card color="grey lighten-4" min-width="350px" flat>
                    <v-toolbar color="primary" dark>
                      <v-btn icon>
                        <v-icon>edit</v-icon>
                      </v-btn>
                      <v-toolbar-title v-html="event.title"></v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-title primary-title>
                      <span v-html="event.details"></span>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="secondary">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
export default {
  name: "Home",
  data() {
    return {
      today: "2019-01-08",
      events: [
        {
          title: "Vacation",
          details: "Going to the beach!",
          date: "2018-12-30",
          open: false
        },
        {
          title: "Vacation",
          details: "Going to the beach!",
          date: "2018-12-31",
          open: false
        },
        {
          title: "Vacation",
          details: "Going to the beach!",
          date: "2019-01-01",
          open: false
        },
        {
          title: "Meeting",
          details: "Spending time on how we do not have enough time",
          date: "2019-01-07",
          open: false
        },
        {
          title: "30th Birthday",
          details: "Celebrate responsibly",
          date: "2019-01-03",
          open: false
        },
        {
          title: "New Year",
          details: "Eat chocolate until you pass out",
          date: "2019-01-01",
          open: false
        },
        {
          title: "Conference",
          details:
            "Mute myself the whole time and wonder why I am on this call",
          date: "2019-01-21",
          open: false
        },
        {
          title: "Hackathon",
          details: "Code like there is no tommorrow",
          date: "2019-02-01",
          open: false
        }
      ]
    };
  },
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    }
  }
};
</script>

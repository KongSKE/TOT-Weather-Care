<template>
  <div>
    <v-layout>
      <v-container>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img src="https://cloud.lovindublin.com/images/_featuredImage/Screen-Shot-2017-05-06-at-13.24.02.png?mtime=20170506132419" aspect-ratio="2.75"></v-img>
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
        return 'https://cloud.lovindublin.com/images/_featuredImage/Screen-Shot-2017-05-06-at-13.24.02.png?mtime=20170506132419'
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

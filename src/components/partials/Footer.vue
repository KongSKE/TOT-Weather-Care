<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon @click="socialLink(icon)" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong> TOT Hackathon</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
	name: 'Footer',
	data: () => ({
		icons: [
			'fab fa-facebook',
			'fab fa-twitter',
			'fab fa-linkedin'
		]
  }),
  methods: {
    socialLink(icon) {
      let app = icon.split('fab fa-')[1]
      console.log('Linked to ' + app);
      if(app == 'facebook') {
        window.location = 'https://web.facebook.com/TOTPublic/?_rdc=1&_rdr'
      }
      else if(app == 'twitter') {
        window.location = 'https://twitter.com/totpublic'
      }
      else if(app == 'linkedin') {
        window.location = 'https://th.linkedin.com/company/tot'
      }
    }
  }
};
</script>
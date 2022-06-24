<template>
  <v-app class="inspire" :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBar :drawer="drawer" />
    <v-container>
      <v-app-bar app color="#1E2337" flat>
        <v-btn
          icon
          dark
          class="d-lg-none d-xl-flex"
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-text-field
          label="Search here"
          class="pt-7 d-none d-sm-flex"
          dense
          append-icon="mdi-magnify"
          background-color="#2F3346"
          solo
          flat
          dark
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-badge
          color="orange"
          content="3"
          overlap
        >
          <v-btn class="ml-2" icon small>
            <v-icon color="orange">mdi-bell-outline</v-icon>
          </v-btn>
        </v-badge>
        <v-btn class="ml-5 mr-3" fab small color="#878A94">
          <v-avatar size="36">
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
          </v-avatar>
        </v-btn>
        <v-btn icon dark class="ml-n6">
          <v-icon x-small color="#878A94">fas fa-chevron-down</v-icon>
        </v-btn>
      </v-app-bar>

      <div class="d-flex flex-column justify-space-between align-center">
        <v-app-bar color="#2F3346">
          <v-icon color="#878A94">fas fa-caret-left</v-icon>
          <span class="ml-3 mr-3 white--text">Until The Sun Coners Up LP</span>
          <v-icon color="#878A94">fas fa-caret-right</v-icon>
        </v-app-bar>
      </div>
      <Carousel />
        <div class="d-flex flex-column justify-space-between align-center">
          <v-app-bar color="#2F3346" flat>
            <v-btn text class="white--text">
              <v-icon left dark color="#878A94">fas fa-caret-right</v-icon>
              2.54M Listeners
            </v-btn>
            <v-btn color="orange" dark>
              <v-icon left dark>fas fa-heart</v-icon>
              1.2M Likes
            </v-btn>
            <v-btn color="#1E2337" dark class="ml-2">
              <v-icon left dark>fas fa-retweet</v-icon>
              201K Repost
            </v-btn>
            <v-btn color="#1E2337" dark class="ml-2">
              <v-icon left dark>fas fa-share-square</v-icon>
              Share
            </v-btn>
            <v-btn color="#1E2337" dark class="ml-2">
              <v-icon left dark>fas fa-ellipsis-h</v-icon>
              More
            </v-btn>
          </v-app-bar>
        </div>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-row>
            <v-col cols="12" sm="2"></v-col>
            <v-col cols="12" sm="8" class="players">
              <v-card tile color="#1E2337" dark>
                <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>
                <v-row>
                  <v-col cols="12" sm="2">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                      max-height="40"
                      max-width="40"
                      class="mt-2 ml-2"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <h6 class="mt-5 ml-n16 grey--text text-lighten-1">La liberte <br>
                      <span class="grey--text text-darken-2">Soolking</span>
                    </h6>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <v-btn icon class="ml-n14 mt-4">
                      <v-icon>mdi-rewind</v-icon>
                    </v-btn>
                    <v-btn icon class="mt-4">
                      <v-icon color="orange">mdi-pause</v-icon>
                    </v-btn>
                    <v-btn icon class="mt-4">
                      <v-icon color="orange">mdi-fast-forward</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="5">
                    <v-app-bar flat color="#1E2337">
                      <span class="caption text-9xl ml-n14">01:44</span>
                      <v-slider :value="25" color="orange" class="mt-6"></v-slider>
                      <span class="caption text-9xl">04:30</span>
                    </v-app-bar>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon class="mt-4">
                      <v-icon small>fas fa-random</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon class="mt-4">
                      <v-icon small>fas fa-undo</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    SideBar,
    Carousel
  }
}
</script>

<style>
  .carousel-3d-container figure {
    margin: 0;
  }
  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    max-width: 100%;
    box-sizing: border-box;
  }
  .next span, .prev span {
    color: orange;
  }
  .players {
    position: absolute;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
</style>

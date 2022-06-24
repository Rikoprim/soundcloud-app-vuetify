<template>
  <v-navigation-drawer app color="#1E2337" dark :value="drawer">
    <div class="text-center mt-4">
      <v-icon x-large color="orange">fab fa-soundcloud</v-icon>
      <v-btn class="mt-3" text color="" outlined>
        Get SoundCloud Pro
      </v-btn>
    </div>
    <h5 class="mt-6 ml-5 grey--text">Menu</h5>
    <v-list flat dense class="mt-1 ml-2">
      <v-list-item-group v-model="selectedItem" color="orange" active-class="border">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon small v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider class="mx-5"></v-divider>
    <h5 class="mt-3 ml-5 grey--text">Collection</h5>
    <v-list flat dense class="mt-1 ml-2">
      <v-list-item-group>
        <v-list-item v-for="(item, i) in collections" :key="i" active-class="border">
          <v-list-item-icon>
            <v-icon small v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        {icon: "fas fa-satellite-dish", text: "Discover"},
        {icon: "fas fa-stream", text: "Stream"},
        {icon: "fas fa-user", text: "Community"},
        {icon: "fas fa-chart-pie", text: "Statistics"},
      ],
      collections: [
        {icon: "fas fa-heart", text: "Likes", route: "/likes"},
        {icon: "fas fa-music", text: "Playlists", route: "/playlists"},
        {icon: "fas fa-compact-disc", text: "Albums", route: "/albums"},
        {icon: "fas fa-podcast", text: "Podcast", route: "/podcast"},
        {icon: "fas fa-users", text: "Following", route: "/followings"},
      ]
    }),
    props: ["drawer"],
    watch: {
      drawer(value) {
        return value;
      },
    },
  }
</script>

<style scoped>
.border {
  border-right: 2px solid orange;
}
</style>
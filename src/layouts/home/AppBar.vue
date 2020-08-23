<template>
  <div>
    <v-app-bar
      outlined
      id="home-app-bar"
      app
      :dark="$vuetify.theme.dark"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/assets/logo.svg')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="52"
        width="100%"
      />

      <base-img
        :src="
          require(`@/assets/brand-${
            $vuetify.theme.dark ? 'dark' : 'light'
          }.svg`)
        "
        contain
        max-width="200"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          background-color="transparent"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-switch
        v-model="$vuetify.theme.dark"
        class="mx-2 mt-5 font-weight-bold"
        label="Dark"
      />

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>

    <home-drawer v-model="drawer" :items="items" />
  </div>
</template>

<script>
export default {
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer")
  },

  data: () => ({
    drawer: null,
    items: ["Home", "About", "Contact", "Projects"]
  })
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>

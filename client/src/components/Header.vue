<template>
  <v-toolbar dark class="cyan fixed-bar flex-grow-0">
    <v-toolbar-title class="mr-4 home" @click="navigateTo({name: 'root'})">TabTracker</v-toolbar-title>
    <!--TODO implement me-->
    <!--<v-toolbar-items>
      <v-btn text>
        Browse
      </v-btn>
    </v-toolbar-items>-->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn text @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
      console.log(this.$store)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fixed-bar {
    position: sticky;
    position: -webkit-sticky; /* for Safari */
    top: 0;
    z-index: 2;
  }
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: #F4D
  }
</style>

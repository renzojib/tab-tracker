<template>
<v-app>
  <v-layout column>
    <v-flex cols6 offset-cols12>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form autocomplete="off">
            <v-text-field
              v-model="email"
              autocomplete="null"
              label="Email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Password"
            ></v-text-field>
            <div class="error" v-html="error"/>
            <br>
            <v-btn dark class="cyan" v-on:click="register">Register</v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: rgb(255,0,0);
  }
</style>

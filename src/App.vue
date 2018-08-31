<template>
  <div id="app">
    <NavBar :isAuthenticated='isAuthenticated' @userAuthenticated='toggleAuthenticated'/>
    <router-view @userAuthenticated='toggleAuthenticated' ></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { authService } from './services/Auth'

export default {
  name: 'app',
  components: {
    NavBar
  },

  data(){
    return{
      isAuthenticated:authService.isAuthenticated()
    }
  },

  methods:{
    toggleAuthenticated(value){
      this.isAuthenticated = value
    }
  }
}
</script>

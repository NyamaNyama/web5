<template>
  <nav>
    <router-link to="/LogIn">LogIn</router-link> |
    <router-link to="/register">Reg</router-link>
  </nav>
  <router-view/>
</template>
<script>


import axios from 'axios';

 export default{
  name:'App',
  beforeCreate(){
    this.$store.commit('initializeStore')

    const access = this.$store.state.access

    if(access){
      axios.defaults.headers.common['Authorization'] = "JWT "+ access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
 }

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

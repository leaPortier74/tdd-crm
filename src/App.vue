<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <h2 class="text-2xl font-bold text-blue-800">
        Users list
      </h2>  
    </div>
    <CardUser />
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import HelloWorld from './components/HelloWorld.vue';
import CardUser from './components/Card.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, 
    CardUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

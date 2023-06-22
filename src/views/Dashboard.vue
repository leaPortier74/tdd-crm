<template>
  <div class="dashboard">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
  <router-view/>
    <card></card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'dashboard_page',
  components: {
    Card
  }
}
</script>

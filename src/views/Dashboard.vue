<template>
  <div class="dashboard">
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

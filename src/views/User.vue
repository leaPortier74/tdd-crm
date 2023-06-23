<template>
  <router-link to="/dashboard" custom v-slot="{navigate} ">
      <button id="dashboard" @click="navigate" role="link">Return</button>
  </router-link>
  <div class="user">
    <h1>User page</h1>
    <div class="flex flex-wrap" v-if="user">
      <h2>{{user.first_name}} {{user.last_name}}</h2>
      <h3>{{user.email}}</h3>
      <img v-bind:alt="`${user.first_name} ${user.last_name}`" v-bind:src="`${user.avatar}`" class="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined">
    </div>
  </div>
  <div>
    <router-link to="/" custom v-slot="{navigate} ">
        <button id="logout" @click="navigate" role="link">Logout</button>
    </router-link>
  </div>
</template>

<script>


export default {
  name: 'user_page',
  mounted(){
    console.log(this.$route.params.id)
    fetch(`https://reqres.in/api/users/${this.$route.params.id}`)
    .then(response => response.json())
    .then(data => {
    const user = data.data;
    this.user = user
    })
    .catch(error => console.error(error));
  },
  data(){
    return{
        user: this.user
    }
    
  }
}
</script>
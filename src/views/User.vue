<template>
  <router-link to="/dashboard" custom v-slot="{navigate} ">
    <button id="dashboard"  style="margin: 2rem 0; width: 15%;" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  @click="navigate" role="link">Return</button>
  </router-link>
  <div class="user">
    
<h1 class="mb-4 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Bienvenue sur votre profile</span></h1>

    <div class="" v-if="user">
      <img v-bind:alt="`${user.first_name} ${user.last_name}`" v-bind:src="`${user.avatar}`" class="rounded-xl shadow-lg mx-auto border-none" style="width: 15%;">
      <div class="flex justify-center px-5 py-5" style="text-align: left;">
    <div class="rounded-lg shadow-xl bg-gray-900 text-white" style="width:450px;">
        <div class="border-b border-gray-800 px-8 py-3">
            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div class="px-8 py-6">
            <p><em class="text-blue-400">const</em> <span class="text-green-400">aboutMe</span> <span class="text-pink-500">=</span> <em class="text-blue-400">function</em>() {</p>
            <p>&nbsp;&nbsp;<span class="text-pink-500">return</span> {</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span class="text-yellow-300">'{{user.first_name}} {{user.last_name}}'</span>,</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;mail: <span class="text-yellow-300">'{{user.email}}'</span>,</p>
            <p>&nbsp;&nbsp;}</p>
            <p>}</p>
        </div>
    </div>
</div>
    </div>
  </div>
  <div>
    <router-link to="/" custom v-slot="{navigate} ">
        <button id="logout" style="margin: 2rem 0; width: 25%;" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  @click="navigate" role="link">Logout</button>
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
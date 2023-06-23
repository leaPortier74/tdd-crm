<template>
    <div style='background-color:rgba(0, 0, 0, 0)'>
        <div class="container max-w-7xl mx-auto px-4" style="cursor: auto;">
            <div class="flex flex-wrap" v-if="users">
                <div v-for="user in users" v-bind:key="`user-${user.id}`" class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <router-link v-bind:to="`/user/${user.id}`" custom v-slot="{navigate} ">
                        <div class="px-6" @click="navigate" role="link">
                            <img v-bind:alt="`${user.first_name} ${user.last_name}`" v-bind:src="`${user.avatar}`" class="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined">
                            <div class="pt-6 text-center">
                                <h1 class="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">{{ user.first_name }} {{ user.last_name }}</h1>
                                <div class="flex items-center justify-center">
                                    <button
                                        class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                                        <i class="fab fa-twitter undefined text-lg"></i>
                                    </button>
                                    <button
                                        class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                                        <i class="fab fa-facebook-f undefined text-lg"></i>
                                    </button>
                                    <button
                                        class="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                                        <i class="fab fa-dribbble undefined text-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div>
        <router-link to="/" custom v-slot="{navigate} ">
            <button id="logout" @click="navigate" role="link">Logout</button>
        </router-link>
  </div>
</template>

<script>
import '@/assets/tailwind.css';



export default {
  name: 'CardUsers',
  mounted(){
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
    const users = data.data;
    this.users = users
    })
    .catch(error => console.error(error));
  },
  data(){
    return{
        users: this.users
    }
    
  }
}
</script>

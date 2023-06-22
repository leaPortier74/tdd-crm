<template>
    <div style='background-color:rgba(0, 0, 0, 0)'>
        <div class="container max-w-7xl mx-auto px-4" style="cursor: auto;">
            <div class="flex flex-wrap">
                <div v-for="user in users" v-bind:key="`user-${user.id}`" class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                    <div class="px-6">
                        <div class="pt-6 text-center">
                            <h1 class="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">{{ user.firstname }} {{ user.lastname }}</h1>
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
                </div>
            </div>
        </div>
    </div>
    <div>
    <button id="logout">Logout</button>
  </div>
  <div>
    <table id="usersTable">
    <thead>
        <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Details</th>
        </tr>
    </thead>
    <tbody></tbody>
    </table>
  </div>
</template>

<script>
import '@/assets/tailwind.css';

export default {
  name: 'CardUser',
  data(){
    return {
        users: Object
    }
  }
}
</script>

<!-- 
    import getUsers from './fetch.js'

let main = document.querySelector('#app').innerHTML = `
  <div>
    <button id="logout">Logout</button>
  </div>
  <div>
    <table id="usersTable">
    <thead>
        <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Details</th>
        </tr>
    </thead>
    <tbody></tbody>
    </table>
  </div>
`
 -->
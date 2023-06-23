<template>
    <div class="container max-w-7xl mx-auto px-4">
        <div v-if="users" class="flex flex-wrap w-full ">
            <div v-for="user in users" v-bind:key="`user-${user.id}`"
                class="fw-full md:w-6/12 lg:w-3/12 lg:mb-3 mb-12 px-4">
                <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    style="padding: 2rem; margin: 0.2rem;">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" style="display: initial;"
                        v-bind:alt="`${user.first_name} ${user.last_name}`" v-bind:src="`${user.avatar}`" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ user.first_name }} {{
                        user.last_name }}</h5>
                    <div class="mt-4 space-x-3 md:mt-6">
                        <router-link v-bind:to="`/user/${user.id}`" custom v-slot="{ navigate }">
                            <button @click="navigate" role="link"
                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Plus
                                d'information</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <router-link to="/" custom v-slot="{ navigate }">
            <button id="logout" style="margin: 2rem 0; width: 50%;" class="items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="navigate" role="link">Logout</button>
        </router-link>
    </div>
</template>

<script>
import '@/assets/tailwind.css';



export default {
    name: 'CardUsers',
    mounted() {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                const users = data.data;
                this.users = users
            })
            .catch(error => console.error(error));
    },
    data() {
        return {
            users: this.users
        }

    }
}
</script>

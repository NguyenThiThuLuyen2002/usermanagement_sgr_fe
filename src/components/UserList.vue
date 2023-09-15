<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// // dùng store
// import {}
export default {
    setup() {
        const search = ref('');
        const users = ref([]);

        const loadUsers = async () => {
            try {
                const response = await axios.get('http://13.228.225.243:3000/users/search_users');
                users.value = response.data.data;
                console.log('run')
            } catch (error) {
                console.error('Error loading users:', error);
                // if (error.response.status === 401) {
                //         console.log('Invalid Token')
                //         notify({
                //             title: "login failed !",
                //             text: "No Authentication",
                //             type: "error"
                //         });
                //         localStorage.removeItem('accessToken')
                //         router.push('/login')
                //     }
            }
        };
       

        onMounted(() => {
            loadUsers();
        });

        const filteredUsers = computed(() => {
            return users.value.filter(user => {
                return user.name.toLowerCase().includes(search.value.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.value.toLowerCase());
            });
        });


        //popup
        const closeAllPopup = () => {
            var popups = document.querySelectorAll('td.relative > div');
            popups.forEach(p => p.style.display = "none");
        }
        const autoClosePopup = (e) => {
            if (e.target.classList.contains('popup')) return;
            this.closeAllPopup()
        }
        const showPopup = (id) => {
            this.closeAllPopup()
            var popup = document.querySelector("#action-" + id)
            if (popup.dataset.display == "none") {
                popup.style.display = "block"
                popup.dataset.display = "block"
            } else {
                popup.style.display = "none"
                popup.dataset.display = "none"
            }
        }
        const closePop = () => {
            this.userData.forEach(u => u.isShowPopup = "hidden")
        }
        const onDelete = (id) => {
            this.userData = this.userData.filter(u => u.id !== id)
            // this.closeAllPopup();
        }

        return {
            search,
            filteredUsers,
            closeAllPopup,
            autoClosePopup,
            showPopup,
            closePop,
            onDelete
        };
    },
};
</script>

<template>
    <div class="bg-gray-200 w-full h-screen pt-10 pb-10">
        <div class=" w-3/4 m-auto bg-white rounded p-10">
            <div class="flex justify-between">
                <input v-model="search" type="text" placeholder="Search" class="border p-2 mb-4 rounded-md" />
                <button class="block  rounded px-2 py-2 text-white bg-green-400 mb-5 ">Create new</button>
            </div>


            <table class="w-full border-collapse border-b-2 m-auto">
                <thead class="text-xs text-gray-700 uppercase py-4 bg-white">
                    <tr>
                        <th class="border p-2">UserName</th>
                        <th class="border p-2">Email</th>
                        <th class="border p-2">Name</th>
                        <th class="border p-2">age</th>
                        <th class="border p-2">Created at</th>
                        <th class="border p-2">Status</th>


                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in filteredUsers" :key="user.id" class="text-xs text-gray-700 uppercase py-4 bg-white">
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.age }}</td>
                        <td>
                            {{ user.created_at.split('T')[0] }}
                        </td>
                        <td class="relative">
                            <button type="button"
                                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gray-500 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                Actions
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div :id="'action-' + user.id" data-display="none"
                                class="popup hidden absolute right-0 w-32 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none">
                                <div class="px-1 py-1 popup">
                                    <button
                                        class="popup hover:bg-gray-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="popup w-5 h-5 mr-2 text-violet-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                                            </path>
                                        </svg>
                                        Edit
                                    </button>
                                    <button
                                        class="popup hover:bg-red-400 hover:text-white text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="popup w-5 h-5 mr-2 text-violet-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  

<script>
import { ref, unref } from 'vue'
import axios from 'axios'
import { notify } from '@kyvg/vue3-notification'
import { useRouter } from 'vue-router'
// import router from '../router.js' // Đường dẫn đến tệp cấu hình Vue Router
import { useAuthStore } from '../store/index'
export default {

    setup() {
        const authStore = useAuthStore();

        const router = useRouter();
        const username = ref('');
        const password = ref('');
        const accessToken = ref('')

        const login = async () => {
            const isSuccess = await authStore.login(unref(username), unref(password))
            console.log(isSuccess)
            if (isSuccess) {
                router.push('/')
            }
        }

        //     axios.post('http://localhost:3001/auth/login', {
        //         username: username.value,
        //         password: password.value
        //     })
        //         // .then((response) => console.log(response))
        //         .then((response) => {
        //             console.log(response.data.token)
        //             if (response.data.token) { //để lấytoken
        //                 localStorage.setItem('accessToken', JSON.stringify(response.data.token))
        //                 accessToken.value = localStorage.getItem('accessToken')
        //             }
        //             console.log('login successfull')

        //             // return response.data
        //             if (response)
        //                router.push('/')

        //         })
        //         .catch((error) => {
        //             console.log("error", error);
        //             if (localStorage.accessToken)
        //                 notify({
        //                     title: "login successfull !",
        //                     text: "hhh",
        //                 })
        //             else
        //                 notify({
        //                     title: "login failed !",
        //                     text: "wrong password",
        //                     type: "error"
        //                 });

        //         });
        // }

        const logout = () => {
            localStorage.removeItem('accessToken')
            console.log('logout successfully')
            notify({
                title: "login out!",
                text: "bye"
            });

        }


        return {
            username,
            password,
            login,
            logout
        }
    }
}
</script>


<template>
    <div class="">
        <div class="loginform">
            <h1 class="text-center font-bold text-2xl">Sign in to your dashboard</h1>
            <form @submit.prevent="">
                <div class="inputwithicon ">
                    <input type="text" v-model="username" name="username" placeholder="Username" class="border-radius">
                    <i class="fa-regular fa-envelope icon"></i>
                </div>
                <div class="inputwithicon   ">
                    <input type="password" v-model="password" name="password" placeholder="Password" class="border-radius">
                    <i class="fa-solid fa-lock icon"></i>
                </div>

                <div class="flex">
                    <div>
                        <input type="checkbox" id="rememberme">
                        <label for="rememberme">Remember me</label>
                    </div>

                    <p><a href="#">forgot your password ?</a></p>
                </div>
                <button @click="login" type="submit" class="border-radius  bg-green-400"> Sign in</button>
            </form>
            <button @click="logout" type="submit" class="border-radius  bg-blue-300"> Sign out</button>
            <div>
                <p>Not Registered yet ? <a href="#">Create an account</a></p>
            </div>

        </div>


    </div>
</template>

<style>
.loginform {
    width: 30%;
    margin: 20px auto;
    padding: 0px;
    box-sizing: border-box;
}

button {
    color: black;
    font-size: 20px;
    background-color: rgb(64, 145, 216);
}

form {
    display: flex;
    flex-direction: column;
}

.border-radius {
    border-radius: 5px;
    border: solid 0.5px gray;
    margin: 10px;
    height: 50px;
    width: 100%;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 0px;
    height: 20px;
    width: 100%;
}

a {
    text-decoration: none;
}

.inputwithicon {
    position: relative;
}

.icon {
    position: absolute;
    top: 30px;
    left: 20px;
}

input {
    padding-left: 30px !important;
}
</style>
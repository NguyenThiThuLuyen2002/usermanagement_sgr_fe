import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    getters: {

    },
    actions: {
        async login(username, password) {
            try {
                const { data: respData } = await axios.post('http://localhost:3001/auth/login', {
                    username: username,
                    password: password,
                })

                if (respData.token) {
                    localStorage.setItem('accessToken', JSON.stringify(respData.token))
                    this.user = localStorage.getItem('accessToken')
                }

                return true
            } catch (error) {
                return false
            }
        }
    }

})
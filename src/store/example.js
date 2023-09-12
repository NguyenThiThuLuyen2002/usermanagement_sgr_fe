import {defineStore} from 'pinia'

export const useExampleStore =defineStore('example',{
    state: () => ({
        user: null,
        token:'',
        users: [],

    }),
    getters:{
        getUsers(){
            return this.users.filter((user) => user.age <20)
        },
    },
    actions: {
        setUser(){
            // return this.users.
        }
    }
})
<template>
    <div  class="w-full h-screen ">
        <div class="w-3/4  m-auto mt-4 p-10  bg-white rounded">
            <h1 class="font-bold">Account details</h1>
            <div class="flex border-b-2 mb-5 mt-5 pb-5">
                <img class="w-20 h-20 rounded-md" src="https://i.pravatar.cc/302" alt="">
                <div class=" ml-5">
                    <button class="rounded px-2 py-2 text-white bg-green-400 mb-5">Upload new photo</button>
                    <p>Allowed JPG, GIF or PNG. Max size of 800k</p>
                </div>
            </div>
            <div class="flex border rounded mb-5">
                <svg class="h-8 w-8 text-gray-700 mr-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                <input v-model.trim="userData.name" type="text" placeholder="ten" class=" w-full h-8">
            </div>
            <div class="flex border rounded mb-5">
                <svg class="h-8 w-8 text-gray-700 mr-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                <input v-model="userData.email" type="email" placeholder="email@email.com" class=" w-full h-8">
            </div>
            <div class="flex border rounded mb-5">
                <svg class="h-8 w-8 text-gray-700 mr-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
                <select v-model="userData.district">
                    <option value="DN">DN</option>
                    <option value="HCM">HCM</option>
                    <option value="HN">HN</option>
                </select>
            </div>
            <form class=" border rounded mb-5">
                <div class="flex justify-between ">
                    <label for="it">IT</label>
                    <input v-model="major" type="radio" id="it" name="mj" value="it">
                </div>
                <div class="flex justify-between ">
                    <label for="ds">DS</label>
                    <input v-model="major" type="radio" id="ds" name="mj" value="ds">
                </div>
                <div class="flex justify-between ">
                    <label for="mo">MO</label>
                    <input v-model="major" type="radio" id="mo" name="mj" value="mo">
                </div>
            </form>
            <form class=" border rounded mb-5">
                <div class="flex justify-between ">
                    <label for="male">Male</label>
                    <input type="checkbox" id="male" name="gender" value="male" v-model="gender">
                </div>
                <div class="flex justify-between ">
                    <label for="female">Female</label>
                    <input type="checkbox" id="female" name="gender" value="female" v-model="gender">
                </div>
                <div class="flex justify-between ">
                    <label for="AH">Apache Helikopter</label>
                    <input type="checkbox" id="AH" name="gender" value="Apache Helikopter" v-model="gender">
                </div>
            </form>
            <div class="flex">
                <button class="rounded px-2 py-2 text-white bg-green-400 mb-5" @click="saveChange">Save change</button>
                <button class="rounded px-2 py-2 text-white bg-gray-400 mb-5 ml-5">Reset</button>
            </div>
        </div>
    </div>
</template>
<script >

export default {
    data() {
        return {
            userData: {
                name: '',
                email: '',
                district: ''

            },
            major: ["IT", "DS", "MO"],
            gender: ["male", "female", "AH"],



        }
    },
    methods: {
        saveChange() {
            const data = {
                name: this.userData.name,
                email: this.userData.email,
                district: this.userData.district,
                major: this.major,
                gender: this.gender,

            }
            alert(JSON.stringify(data))
        },
        isNameValid() {

        }

    }


}
</script>


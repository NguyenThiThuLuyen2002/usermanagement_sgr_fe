<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-96 m-auto">
        <h1 class="text-2xl font-semibold mb-4 text-center">Register</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <input v-model="username" type="text" placeholder="Username" class="border p-2 w-full rounded-md" />
          </div>
          <div class="mb-4">
            <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full rounded-md" />
          </div>
          <div class="mb-4">
            <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full rounded-md" />
          </div>
          <div class="mb-4">
            <input v-model="gender" type="text" placeholder="Gender" class="border p-2 w-full rounded-md" />
          </div>
          <div class="mb-4">
            <input v-model="name" type="text" placeholder="Name" class="border p-2 w-full rounded-md" />
          </div>
          <div class="mb-4">
            <input v-model="age" type="number" placeholder="Age" class="border p-2 w-full rounded-md" />
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const email = ref('');
      const gender = ref('');
      const name = ref('');
      const age = ref(0);
  
      const register = async () => {
        try {
          const response = await axios.post('http://localhost:3001/auth/register', {
            username: username.value,
            password: password.value,
            email: email.value,
            gender: gender.value,
            name: name.value,
            age: age.value,
          });
          
          // Handle success, show notification or redirect
          console.log('Registration successful:', response.data);
        } catch (error) {
          // Handle error, show notification or error message
          console.error('Registration failed:', error);
        }
      };
  
      return {
        username,
        password,
        email,
        gender,
        name,
        age,
        register,
      };
    },
  };
  </script>
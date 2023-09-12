<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import FormLogin from './components/FLogin.vue'
// import FormRegister from './components/FRegister.vue'
// import UserList from './components/UserList.vue'
// import LeftSidebar from './components/sidebar/LeftSidebar.vue'
import userdetail from './components/users/UserDetail.vue'
</script> -->


<template>
  <router-link class="p-4" to="/">go to UserList </router-link>
  <router-link class="p-4" to="/login">go to Login </router-link>
  <router-view :key=" $route.fullPath"/>
  <Notifications/>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

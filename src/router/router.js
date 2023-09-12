import { createRouter, createWebHistory } from 'vue-router';
import UserList from '@/components/UserList.vue'; // Đường dẫn đến component UserList thực của bạn
import Login from '@/components/FLogin.vue'; // Đường dẫn đến component đăng nhập của bạn

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
    // meta: { requiresAuth: true } // Bạn có thể thêm một meta để xác định trang cần đăng nhập để truy cập
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem('accessToken')

  if (to.name !== 'Login' && !token) return '/login'
  if ( token && to.name == 'Login') return '/'
})

export default router;
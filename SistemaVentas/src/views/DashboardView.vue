<template>
    <div>
      <h1 class="text-3xl font-bold text-center">Bienvenido al Dashboard</h1>
      <button @click="logout" class="bg-red-500 text-white p-2 rounded">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('isAuth'); 
        this.$router.push('/login');
      }
    }
  };
  </script>
  
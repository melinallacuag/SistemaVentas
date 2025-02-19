<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <input v-model="username" type="text" placeholder="Usuario" class="w-full p-2 border rounded mb-4">
        <input v-model="password" type="password" placeholder="Contraseña" class="w-full p-2 border rounded mb-4">
        <button @click="login" class="w-full bg-blue-500 text-white p-2 rounded">Entrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === '1234') {
            localStorage.setItem('isAuth', 'true');
          this.$router.push('/dashboard');
        } else {
          alert('Credenciales incorrectas');
        }
      }
    }
  };
  </script>
  
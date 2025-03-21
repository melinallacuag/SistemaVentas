<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-[#fff]"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg');">
    <div class="bg-white p-4 rounded-[15px] shadow-md w-full max-w-sm">

      <div class="w-full flex items-center justify-center mb-6">
        <img src="../assets/LOGO-PAG.png" alt="Logo" class="h-[70px] mb-[20px] mt-[20px]">
      </div>

      <form @submit.prevent="handleLogin">

        <div class="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label for="codigo" class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input type="text" v-model="email" id="email" @input="handleInputIdUsuario"
              placeholder="correo@dominio.com"
              class="border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full text-sm" />
            <p v-if="errorMessages.email" class="text-red-500 text-xs ">{{ errorMessages.email }}</p>
          </div>
          <div>
            <label for="contraseña" class="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password"
                @input="handleInputContrasenaUsuario" placeholder="************"
                class="border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full text-sm" />
              <span @click="toggleShowPassword" class="absolute right-4 top-2 cursor-pointer">
                <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
              </span>
              <p v-if="errorMessages.password" class="text-red-500 text-xs">{{ errorMessages.password }}</p>
            </div>
          </div>
        </div>

        <button type="submit"
          class="w-full px-6 py-3 bg-[#f16e00] font-semibold text-white rounded-lg shadow-md hover:bg-[#ff7400] uppercase text-xs">
          Iniciar Sesión
        </button>
      </form>

      <p class="text-black text-sm mt-6 mb-4 text-center">
        <router-link to="/rcontrasena" class="text-[#5a6676] hover:text-[#ff7400] hover:no-underline font-[400]">
          ¿Olvidaste tu contraseña?
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      alertMessage: "",
      alertMessageError: "",
      errorMessages: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
  methods: {
    handleInputIdUsuario() {
      this.email = this.email.slice(0, 40);
      this.errorMessages.email = '';
    },
    handleInputContrasenaUsuario() {
      this.password = this.password.slice(0, 20);
      this.errorMessages.password = '';
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    validateForm() {
      let isValid = true;
      this.errorMessages = {};

      if (!this.email) {
        this.errorMessages.email = '* El campo correo electrónico es obligatoria';
        isValid = false;
      }else if (!this.email.includes("@")) {
        this.errorMessages.email = '* El correo debe contener "@"';
        isValid = false;
      } else if (!this.email.split("@")[1] || !this.email.split("@")[1].includes(".")) {
        this.errorMessages.email = '* Falta el dominio o el punto "." en el correo';
        isValid = false;
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
        this.errorMessages.email = '* Ingresa un correo electrónico válido';
        isValid = false;
      }

      if (!this.password) {
        this.errorMessages.password = '* El campo contraseña es obligatorio';
        isValid = false;
      }

      return isValid;
    },
    async handleLogin() {
      if (!this.validateForm()) return;

      try{

        await axios.get("/sanctum/csrf-cookie",{
          withCredentials: true,
        })

        const response = await axios.post("/api/login",{
            email:this.email,
            password: this.password,
          },
          {
            withCredentials: true,
            withXSRFToken: true,
            headers:{
              "Content-Type": "application/json",
              "Accept": "application/json",
            } 
          }
        )

        if(response.status === 200){
          this.$router.push('/');
        }

      }catch(error){
        console.log(error)
      }
    }
  }
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-[#fff]" style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg');">
    <div class="bg-white p-4 rounded-[15px] shadow-md w-full max-w-sm">

      <div class="w-full flex items-center justify-center mb-6">
        <img src="../assets/LOGO-PAG.png" alt="Logo" class="h-[70px] mb-[20px] mt-[20px]">
      </div>

      <form @submit.prevent="handleLogin">

        <div class="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label for="codigo" class="block text-sm font-medium text-black mb-2">Correo Electrónico</label>
            <input type="text" v-model="username" id="username" @input="handleInputIdUsuario"
              placeholder="Ingresar Correo Electrónico"
              class="border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full text-sm" />
            <p v-if="errorMessages.username" class="text-red-500 text-xs ">{{ errorMessages.username }}</p>
          </div>
          <div>
            <label for="contraseña" class="block text-sm font-medium text-black mb-2">Contraseña</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password"
                @input="handleInputContrasenaUsuario" placeholder="Ingresar Contraseña"
                class="border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full text-sm" />
              <span @click="toggleShowPassword" class="absolute right-4 top-2 cursor-pointer">
                <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
              </span>
              <p v-if="errorMessages.password" class="text-red-500 text-xs">{{ errorMessages.password }}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-end space-x-4 mt-6">
          <button type="submit"
            class="w-full px-6 py-3 bg-[#f16e00] font-semibold text-white rounded-lg shadow-md hover:bg-[#ff7400] uppercase text-xs">
            Iniciar Sesión
          </button>
        </div>
      </form>

      <p class="text-black text-sm mt-6 mb-4 text-center">
        <a href="https://powergroupsystem.com" target="_blank"
          class="text-[#5a6676] hover:text-[#4a5565] hover:no-underline font-[400]">
          ¿Haz olvidado tu contraseña?
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      alertMessage: "",
      alertMessageError: "",
      errorMessages: {
        username: "",
        password: "",
      },
      showPassword: false,
      showPasswordConfirmation: false,
    };
  },
  methods: {
    handleInputIdUsuario() {
      this.username = this.username.toUpperCase().slice(0, 30);
      this.errorMessages.username = '';
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

      if (!this.username) {
        this.errorMessages.username = '* El campo usuario es obligatoria';
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
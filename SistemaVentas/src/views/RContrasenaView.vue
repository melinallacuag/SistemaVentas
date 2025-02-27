<template>
    <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-[#fff]"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg');">
        <div class="bg-white p-4 rounded-[15px] shadow-md w-full max-w-sm">

            <p class="text-black text-xl mt-4 mb-4 text-left font-bold">Restablecer Contraseña </p>
            <p class="text-gray-700 text-sm mt-4 mb-4 text-left font-medium">Introduce tu correo electrónico. Te
                enviaremos un mensaje con un enlace para restablecer tu contraseña.</p>

            <form @submit.prevent="handlePasswordReset">
                <div class="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                        <input type="text" v-model="email" id="email" @input="handleInputEmail"
                            placeholder="correo@dominio.com"
                            class="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm mb-2" />
                        <p v-if="errorMessages.email" class="text-red-500 text-xs">{{ errorMessages.email }}</p>
                    </div>
                </div>

                <button type="submit"
                    class="w-full px-6 py-3 bg-[#f16e00] font-semibold text-white rounded-lg shadow-md hover:bg-[#ff7400] uppercase text-xs">
                    Enviar
                </button>
            </form>

            <p class="text-[#5a6676] text-sm mt-4 text-center font-[400]">
                <router-link to="/login" class="text-[#f16e00] hover:text-[#ff7400] font-[400]">
                    Iniciar Sesión
                </router-link>
                con tus credenciales
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            alertMessage: "",
            alertMessageError: "",
            errorMessages: {
                email: "",
            },
        };
    },
    methods: {
        handleInputEmail() {
            this.email = this.email.toUpperCase().slice(0, 30);
            this.errorMessages.email = '';
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

            return isValid;
        },
        async handlePasswordReset() {
            if (!this.validateForm()) return;
        }
    }
};
</script>
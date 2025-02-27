<template>
    <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-[#fff]"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url('https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg');">
        <div class="bg-white p-4 rounded-[15px] shadow-md w-full max-w-sm">

            <p class="text-black text-xl mt-4 mb-4 text-left font-bold">Cambiar Contraseña </p>
            <p class="text-gray-700 text-sm mt-4 mb-4 text-left font-medium">Introduce una nueva contraseña para restablecer el acceso a tu cuenta.</p>

            <form @submit.prevent="handlePasswordReset">
                <div class="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                        <input type="text" v-model="email" id="email" @input="handleInputEmail"
                            placeholder="Ingresar Correo Electrónico"
                            class="border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full text-sm" />
                        <p v-if="errorMessages.email" class="text-red-500 text-xs ">{{ errorMessages.email }}</p>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña</label>
                        <div class="relative">
                            <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password"
                                @input="handleInputContrasena" placeholder="Ingresar Nueva Contraseña"
                                class="border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full text-sm" />
                            <span @click="toggleShowPassword" class="absolute right-4 top-2 cursor-pointer">
                                <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                            </span>
                            <p v-if="errorMessages.password" class="text-red-500 text-xs">{{ errorMessages.password }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <label for="newpassword" class="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
                        <div class="relative">
                            <input :type="showPasswordConfirmation ? 'text' : 'password'" v-model="newpassword" id="newpassword" 
                                @input="handleInputNewContrasena" placeholder="Confirmar Contraseña"
                                class="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm mb-2" />
                            <span @click="toggleShowNewPassword" class="absolute right-4 top-2 cursor-pointer">
                                <i :class="showPasswordConfirmation ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                            </span>
                            <p v-if="errorMessages.newpassword" class="text-red-500 text-xs">{{ errorMessages.newpassword }}</p>
                        </div>
                    </div>
                </div>

                <button type="submit"
                    class="w-full px-6 py-3 bg-[#f16e00] font-semibold text-white rounded-lg shadow-md hover:bg-[#ff7400] uppercase text-xs">
                    Confirmar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            newpassword: '',
            alertMessage: "",
            alertMessageError: "",
            errorMessages: {
                email: "",
                password: "",
                newpassword: "",
            },
            showPassword: false,
            showPasswordConfirmation: false,
        };
    },
    methods: {
        handleInputEmail() {
            this.email = this.email.slice(0, 40);
            this.errorMessages.email = '';
        },
        handleInputContrasena() {
            this.password = this.password.slice(0, 20);
            this.errorMessages.password = '';
        },
        handleInputNewContrasena() {
            this.newpassword = this.newpassword.slice(0, 20);
            this.errorMessages.newpassword = '';
        },
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
        },
        toggleShowNewPassword() {
            this.showPasswordConfirmation = !this.showPasswordConfirmation;
        },
        validateForm() {
            let isValid = true;
            this.errorMessages = {};

            if (!this.email) {
                this.errorMessages.email = '* El campo correo electrónico es obligatoria';
                isValid = false;
            } else if (!this.email.includes("@")) {
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
            }else if (this.password.length < 8) {
                this.errorMessages.password = '* El campo Contraseña debe contener al menos 8 caracteres.';
                isValid = false;
            } else if (!/[A-Z]/.test(this.password)) {
                this.errorMessages.password = '* La contraseña debe incluir al menos una letra mayúscula';
                isValid = false;
            } else if (!/[0-9]/.test(this.password)) {
                this.errorMessages.password = '* La contraseña debe incluir al menos un número';
                isValid = false;
            }

            if (!this.newpassword) {
                this.errorMessages.newpassword = '* El campo confirmar contraseña es obligatorio';
                isValid = false;
            }else if (this.password !== this.newpassword) {
                this.errorMessages.newpassword = '* Las Contraseña son diferentes';
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
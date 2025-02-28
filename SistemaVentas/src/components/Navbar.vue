<template>
  <div class="w-full h-full flex relative bg-white">
    <div class="w-[280px] h-full bg-gray-200 text-white
        transition-transform transform md:relative fixed md:static top-0 left-0 z-20" :class="{
          '-translate-x-full': !showSide && isMobile,
          'translate-x-0': showSide || !isMobile
        }">
      <div class="h-[60px] w-full bg-[#000000] flex justify-center items-center relative">
        <div class="px-[20px] mb-2 mt-2">
          <img src="../assets/LOGO-PAG-BLANCO.png" alt="" class="h-[50px]">
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[0.2px] bg-[#fff]"></div>
      </div>
      <div class="h-[calc(100vh-60px)] bg-[#000000] py-[20px] overflow-hidden">
        <div class="flex flex-col justify-start h-full px-[20px] space-y-[10px]">
          <div class=" flex flex-col justify-between space-y-[10px]">
            <template v-for="route in accessibleRoutes" :key="route.name">
              <router-link :to="route.path" exact-active-class="bg-[#00a600] text-white"
                active-class="bg-[#00a600] text-white"
                class="gap-2 inline-flex relative items-center py-[10px] px-[10px] w-full text-xs uppercase font-semibold rounded-md border-gray-200 hover:bg-[#24be24] hover:text-white  transition duration-400 ease-in-out">
                <i class="fas fa-building"></i>
                {{ route.name }}
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-full bg-gray-400">
 
      <div class="h-[calc(100vh)] p-[20px] overflow-auto bg-cover bg-center bg-no-repeat"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://powergroupsystem.com/cliente/img/background/grifo.jpg);">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('isAuth')
      this.$router.push('/login')
    }
  }
}
</script>
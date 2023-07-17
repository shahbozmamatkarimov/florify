<template>
  <div class="fixed top-0 z-50 w-full">
    <div class="flex flex-wrap h-[70px]">
      <section class="relative mx-auto">
        <!-- navbar -->
        <nav
          class="navbar flex h-[70px] justify-between bg-gray-900 text-white w-screen"
        >
          <div
            class="container mx-auto xl:px-20 md:px-10 px-5 py-6 flex w-full items-center justify-between"
          >
            <router-link to="/">
              <img
                class="logo h-[40px] cursor-pointer"
                src="../public/logo.webp"
                alt="logo"
              />
            </router-link>
            <!-- Nav Links -->
            <ul
              class="hidden lg:flex px-4 text-lg mx-auto font-semibold font-heading space-x-12"
            >
              <li>
                <router-link class="hover:text-gray-200" to="/about"
                  >O нас</router-link
                >
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/buy_and_order"
                  >Оплата и доставка</router-link
                >
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/developing..."
                  >Категории</router-link
                >
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/contact"
                  >Контакты</router-link
                >
              </li>
            </ul>
            <!-- Header Icons -->
            <div class="flex items-center">
              <div
                class="flex items-center gap-2 cursor-pointer sm:mr-10 mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 cart"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <!-- <span class="flex absolute -mt-5 ml-3">
                  <span
                    class="absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex items-center justify-center text-xs rounded-full h-5 w-5 bg-pink-500"
                  >9+
                  </span>
                </span> -->
                <p class="font-semibold hover:text-gray-200">Корзина</p>
              </div>
              <div class="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
                <img src="../assets/svg/user.svg" alt="" />
                <p class="font-semibold">Войти</p>
              </div>
              <div>
                <!-- Responsive navbar -->
                <p
                  @click="
                    store.toggle = !store.toggle;
                    store.lang = false;
                  "
                  class="navbar-burger hover:text-gray-200 text-3xl pt-1 cursor-pointer self-center lg:hidden"
                >
                  <i class="bx bx-menu"></i>
                </p>
                <ul
                  :class="store.toggle ? 'h-0' : 'h-56'"
                  class="overflow-hidden duration-500 container lg:hidden flex flex-col w-full right-0 left-0 top-[70px] bg-white text-gray-700 shadow-md rounded z-50 absolute mx-auto font-semibold font-heading"
                >
                  <li class="flex justify-between font-semibold items-center">
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/"
                      >O нас</router-link
                    >
                    <div class="absolute right-5">
                      <i
                        @click="store.lang = !store.lang"
                        class="cursor-pointer bx bx-globe"
                      ></i>
                      <ul
                        @click="store.lang = false"
                        v-show="store.lang"
                        class="absolute text-[17px] text-black bg-white z-20 rounded border shadow overflow-hidden top-[40px] right-0"
                      >
                        <li class="px-2 hover:bg-gray-200 cursor-pointer">
                          Узбекский
                        </li>
                        <li class="px-2 hover:bg-gray-200 cursor-pointer">
                          Английский
                        </li>
                        <li class="px-2 hover:bg-gray-200 cursor-pointer">
                          Русский
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/"
                      >Оплата и доставка</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/"
                      >Категории</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/"
                      >Контакты</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  </div>
</template>

<script setup>
const store = reactive({
  toggle: true,
  lang: false,
});
</script>

<style lang="scss" scoped>
.navbar {
  background-image: url("../assets/images/navbar.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 400px) {
  .logo {
    height: 30px;
  }

  .icon {
    font-size: 18px;
  }

  .cart {
    height: 20px;
    width: 20px;
  }
}
</style>

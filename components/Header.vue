<template>
  <div class="fixed top-0 z-50 w-full">
    <div class="flex flex-wrap h-[70px]">
      <section class="relative mx-auto">
        <!-- navbar -->
        <nav
          class="navbar flex h-[70px] justify-between bg-gray-900 text-white w-screen"
        >
          <div
            class="container mx-auto xl:px-28 md:px-10 px-5 py-6 flex w-full items-center justify-between"
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
              class="hidden xl:flex px-4 text-lg mx-auto font-semibold font-heading space-x-12"
            >
              <li>
                <router-link class="hover:text-gray-200" to="/about">{{
                  $t("about")
                }}</router-link>
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/buy_and_order">{{
                  $t("payment_and_delivery")
                }}</router-link>
              </li>
              <li>
                <router-link
                  class="hover:text-gray-200"
                  to="/quality_assurance"
                  >{{ $t("quality_assurance") }}</router-link
                >
              </li>
              <li>
                <router-link class="hover:text-gray-200" to="/contact">{{
                  $t("contact")
                }}</router-link>
              </li>
            </ul>
            <!-- Header Icons -->
            <div class="flex items-center">
              <div class="flex items-center gap-2 cursor-pointer sm:mr-10 mr-3">
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
                <p class="font-semibold hover:text-gray-200 sm:block hidden">
                  {{ $t("basket") }}
                </p>
              </div>
              <div
                class="sm:flex hidden items-center gap-2 xl:mr-0 mr-10 hover:text-gray-200 cursor-pointer"
              >
                <img src="../assets/svg/user.svg" alt="" />
                <p class="font-semibold sm:block hidden">{{ $t("login") }}</p>
              </div>
              <div class="xl:flex hidden items-center ml-7">
                <i class="bx bx-globe text-2xl"></i>
                <form>
                  <select class="bg-transparent w-28 overflow-hidden" v-model="$i18n.locale">
                    <option class="bg-black" value="uz">{{ $t("uz") }}</option>
                    <option class="bg-black" value="ru">{{ $t("ru") }}</option>
                    <option class="bg-black" value="en">{{ $t("en") }}</option>
                  </select>
                </form>
              </div>
              <div>
                <!-- Responsive navbar -->
                <p
                  @click="
                    store.toggle = !store.toggle;
                    store.lang = false;
                  "
                  class="navbar-burger hover:text-gray-200 text-3xl pt-2 cursor-pointer self-center xl:hidden"
                >
                  <i class="bx bx-menu"></i>
                </p>
                <ul
                  :class="store.toggle ? 'h-0' : 'h-56'"
                  class="overflow-hidden duration-500 container xl:hidden flex flex-col w-full right-0 left-0 top-[70px] bg-white text-gray-700 shadow-md rounded z-50 absolute mx-auto font-semibold font-heading"
                >
                  <li class="flex justify-between font-semibold items-center">
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/about"
                      >O нас</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/buy_and_order"
                      >Оплата и доставка</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/quality_assurance"
                      >Гарантия качества</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      @click="store.toggle = true"
                      class="w-full hover:bg-gray-200 p-3 rounded-md inline-block"
                      to="/contact"
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

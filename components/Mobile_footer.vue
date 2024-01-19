<template>
  <footer
    class="flex items-center bg-white border-t border-black/5 w-full -mb-2 fixed bottom-0 h-[70px] rounded-t-xl"
  >
    <ul class="flex items-center justify-between w-full">
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/"
        >
          <img class="active h-[26px] w-6" src="@/assets/footer/logo.svg" alt="" />
          <img
            class="_active hidden h-6 w-6 mb-1 mt-1.5"
            src="/logo_mobile.svg"
            alt=""
          />
          <p class="text-[10px] leading-3">Asosiy</p>
        </router-link>
      </li>
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/order"
        >
          <img class="active h-[26px]" src="@/assets/footer/cart.svg" alt="" />
          <img class="_active h-[26px] hidden" src="@/assets/footer/_cart.svg" alt="" />
          <p class="text-[10px] leading-3">Savatcha</p>
        </router-link>
      </li>
      <li class="cursor-pointer w-[75px]">
        <div
          @click="checkAuth"
          class="flex flex-col gap-[2px] items-center justify-center"
        >
          <img class="active" v-if="$router.currentRoute.value.name != 'favorites'" src="@/assets/footer/heart.svg" alt="" />
          <img v-else class="_active" src="@/assets/footer/_heart.svg" alt="" />
          <p :class="$router.currentRoute.value.name != 'favorites'?'':'text-[#5c0099]'" class="text-[10px] leading-3">Tanlanganlar</p>
        </div>
      </li>
      <li class="flex flex-col gap-[2px] items-center justify-center w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/profile"
        >
          <img class="active" src="@/assets/footer/profile.svg" alt="" />
          <img
            class="_active hidden"
            src="@/assets/footer/_profile.svg"
            alt=""
          />
          <p class="text-[10px] leading-3">Profil</p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { useLoadingStore, useAuthStore } from "@/store";

const isLoading = useLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

function checkAuth() {
  if (!isLoading.store.isLogin) {
    authStore.store.loginModal = true;
  } else {
    router.push("/favorites");
  }
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #5c0099;
  .active {
    display: none;
  }
  ._active {
    display: block;
  }
}
</style>

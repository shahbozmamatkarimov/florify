<template>
  <main class="sm:hidden block px-5 pb-8">
    <div v-if="!isLoading.store.isLogin" class="mb-5">
      <h1 class="font-semibold text-center mb-3 text-2xl leading-9">
        Xush kelibsiz!
      </h1>
      <p class="text-sm text-[#555555] text-center">
        Mening buyurtmalarim, bildirishnomalar, qoldirilgan sharhlar va profil
        ko'rish uchun tizimga kiring. Bu odatda bir necha daqiqa vaqt oladi
        halos.
      </p>
    </div>
    <div v-else class="flex items-center gap-3 border-y py-6">
      <img src="@/assets/svg/user_profile.svg" alt="" />
      <h1>Rahmatulloh</h1>
    </div>
    <ul>
      <li class="py-6 border-b">
        <router-link
          class="flex items-center justify-between leading-[20px]"
          to="/orders"
        >
          Mening buyurtmalarim
          <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </router-link>
      </li>
      <li
        class="flex items-center justify-between leading-[20px] py-6 border-b"
      >
        Til
        <img src="@/assets/svg/profile_arrow.svg" alt="" />
      </li>
      <li
        class="flex items-center justify-between leading-[20px] py-6 border-b"
      >
        Ma'lumot
        <img src="@/assets/svg/profile_arrow.svg" alt="" />
      </li>
      <li class="py-6 border-b">
        <router-link
          class="flex items-center justify-between leading-[20px]"
          to="/"
        >
          Maxfiylik siyosati
          <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </router-link>
      </li>
      <li class="py-6 border-b">
        <router-link
          class="flex items-center justify-between leading-[20px]"
          to="/contact"
        >
          Biz bilan bog'lanish
          <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </router-link>
      </li>
    </ul>
    <button
      @click="useAuth.store.loginModal = true"
      class="bg-[#5C0099] mt-24 text-white w-full h-12 rounded-xl"
    >
      Tizimga kirish
    </button>
  </main>
</template>

<script setup>
import { useAuthStore, useLoadingStore } from "@/store";

const useAuth = useAuthStore();
const isLoading = useLoadingStore();

onMounted(() => {
  if (window.innerWidth > 639) {
    router.push("/");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 639) {
      router.push("/");
    }
  });
});
</script>

<style lang="scss" scoped></style>

<template>
  <main
    class="md:flex gap-32 container mx-auto xl:px-28 md:px-10 px-5 pb-[15rem] mt-[60px]"
  >
    <Tabs />
    <section>
      <h1 class="font-semibold text-2xl leading-7 mb-6">Личные данные</h1>
      <section
        class="2xl:grid grid-cols-3 border border-[#EDEDED] rounded-[2px]"
      >
        <section class="p-6 col-span-2">
          <div class="grid grid-cols-2 gap-4">
            <h1
              class="flex items-center px-3 h-[50px] rounded-[2px] border text-[#242424] border-[#EDEDED]"
            >
              Rahmatulloh
            </h1>
            <p
              class="flex items-center px-3 h-[50px] rounded-[2px] border text-[#242424] border-[#EDEDED]"
            >
              +998 91 476 9090
            </p>
          </div>
          <hr class="border border-[#EDEDED] my-6" />
          <button
            @click="isLogout = true"
            class="font-semibold rounded-[10px] bg-[#5C0099] text-white h-[50px] w-full"
          >
            Выйти из аккаунта
          </button>
        </section>
        <div class="border border-[#EDEDED] rounded-[4px] p-5 m-5 ml-2">
          <h1 class="text-lg font-semibold">Скачать приложение Florify</h1>
          <p class="text-sm text-[#929292] mt-2 mb-4">
            Больше бонусов, удобнее и проще.
          </p>
          <div class="flex gap-3 mb-5">
            <img src="@/assets/svg/appstore.svg" alt="app_store" />
            <img src="@/assets/svg/googleplay.svg" alt="play_market" />
          </div>
          <img src="@/assets/svg/scaner.svg" alt="play_market" />
        </div>
      </section>
    </section>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      v-model="isLogout"
      width="30%"
      align-center
    >
      <form @submit.prevent="isLogout = true">
        <h1 class="font-semibold text-2xl leading-7">Log out</h1>
        <p class="leading-6 mt-[14px] mb-5">
          Haqiqatdan ham hisobingizdan chiqmoqchimisiz?
        </p>
        <button
          @click="logout"
          class="font-semibold rounded-[10px] bg-[#5C0099] text-white h-[50px] w-full"
        >
          Выйти из аккаунта
        </button>
      </form>
    </el-dialog>
  </main>
</template>

<script setup>
useHead({
  title: "Private info",
  meta: [{ name: "florify", content: "private info" }],
});

import {useLoadingStore} from "@/store";

const isLoading = useLoadingStore()
const isLogout = ref(false);
const isMount = ref(false);
const router = useRouter();

function logout() {
    localStorage.removeItem("token");
    isLoading.store.isLogin = false;
    router.push("/")
}

onMounted(() => {
  isMount.value = true;
});
</script>

<style lang="scss" scoped></style>

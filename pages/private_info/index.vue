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
        <form @submit.prevent="handleSubmit" class="p-6 col-span-2">
          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              v-model="name"
              @input="changingName"
              placeholder="Ваше имя"
              class="flex items-center px-3 h-[50px] rounded-[2px] border bg-transparent text-[#242424] border-[#EDEDED]"
              required
            />
            <p
              class="flex items-center px-3 h-[50px] rounded-[2px] border text-[#242424] border-[#EDEDED]"
            >
              {{ useAuth.store.user }}
            </p>
          </div>
          <hr class="border border-[#EDEDED] my-6" />
          <div :class="isLoading.isLoadingType('updateUser')?'pointer-events-none':''">
            <button
              v-loading="isLoading.isLoadingType('updateUser')"
              :class="
                isLoading.store.name != name
                  ? 'bg-[#5C0099]'
                  : 'bg-[#E3E3E3] pointer-events-none'
              "
              class="font-semibold rounded-[10px] text-white h-[50px] w-full"
            >
              Готово
            </button>
          </div>
          <div class="flex justify-center mt-10">
            <button
              type="button"
              @click="isLogout = true"
              class="text-[#929292] border-b border-[#929292] font-semibold"
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
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

import { useLoadingStore, useAuthStore } from "@/store";

const isLoading = useLoadingStore();
const useAuth = useAuthStore();
const isLogout = ref(false);
const isMount = ref(false);
const router = useRouter();

useAuth.getUser();

const name = ref("");

name.value = isLoading.store.name;

const store = reactive({
  isChange: false,
});

function changingName() {
  if (name.value != isLoading.store.name) {
    store.isChange = true;
  } else {
    store.isChange = false;
  }
}

function logout() {
  localStorage.removeItem("token");
  isLoading.store.isLogin = false;
  router.push("/");
}

function handleSubmit() {
  if (!name.value) return;
  useAuth.updateUser(name.value);
}

onMounted(() => {
  isMount.value = true;
});
</script>

<style lang="scss" scoped></style>

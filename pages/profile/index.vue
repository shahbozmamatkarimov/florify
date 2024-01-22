<template>
  <main class="sm:hidden block px-5 pb-8">
    <div v-if="!isLoading.store.isLogin" class="mb-5">
      <h1 class="font-semibold text-center mb-3 text-2xl leading-9">
        {{ $t("welcome") }}
      </h1>
      <p class="text-sm text-[#555555] text-center">
        {{ $t("title_login") }}
      </p>
    </div>
    <div v-else>
      <div @click="$router.push('/private_info')" class="flex cursor-pointer items-center gap-3 border-y py-6">
        <img src="@/assets/svg/user_profile.svg" alt="" />
        <h1 class="max-w-fit truncate">
          {{ isLoading.store.name }}
        </h1>
      </div>
    </div>
    <ul>
      <li v-if="isLoading.store.isLogin" class="py-6 border-b">
        <router-link
          class="flex items-center justify-between leading-[20px]"
          to="/orders"
        >
          {{ $t("navbar.orders") }}
          <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </router-link>
      </li>
      <li class="cursor-pointer">
        <div
          @click="lang = !lang"
          class="flex items-center justify-between leading-[20px] py-6 border-b"
        >
          {{ $t("lang") }} <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </div>
        <div v-if="lang" class="mt-3 pb-3 space-y-2 border-b">
          <div @click="$i18n.locale = 'uz'" class="flex items-center gap-2">
            <p
              :class="$t('en') !== 'Ан' ? 'bg-[#5C0099]' : 'border'"
              class="h-4 w-4 rounded-full"
            ></p>
            O'zbekcha
          </div>
          <div @click="$i18n.locale = 'ru'" class="flex items-center gap-2">
            <p
              :class="$t('en') === 'Ан' ? 'bg-[#5C0099]' : 'border'"
              class="h-4 w-4 rounded-full"
            ></p>
            Русский
          </div>
        </div>
        <div
          class="flex lang_select cursor-pointer items-center gap-2 hover:text-[#5C0099] hover:font-semibold"
        >
          <div class="xl:flex hidden items-center">
            <el-dropdown @command="(command) => ($i18n.locale = command)">
              <div
                class="text-white outline-none cursor-pointer"
                @click.prevent
              >
                <p
                  v-if="$t('en') === 'In'"
                  class="flex items-center text-black leading-4 gap-2"
                >
                  Русский
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.125 5L11.625 9.5L7.125 14"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <p
                  v-else-if="$t('en') === 'Ан'"
                  class="flex items-center text-black leading-4 gap-2"
                >
                  Uzbekcha
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.125 5L11.625 9.5L7.125 14"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="uz">
                    <div class="flex gap-2">
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="@/assets/lang/uz.svg"
                        alt=""
                      />
                      Uzbekcha
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item command="ru">
                    <div class="flex w-12 gap-2">
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="@/assets/lang/ru.svg"
                        alt=""
                      />
                      Русский
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </li>
      <li
        class="cursor-pointer flex items-center justify-between leading-[20px] py-6 border-b"
      >
        {{ $t("info") }}
        <img src="@/assets/svg/profile_arrow.svg" alt="" />
      </li>
      <li class="py-6 border-b">
        <router-link
          class="flex items-center justify-between leading-[20px]"
          to="/privacy_policy"
        >
          {{ $t("privacy_policy") }}
          <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </router-link>
      </li>
      <li class="py-6 border-b">
        <router-link
          class="flex items-center justify-between leading-[20px]"
          to="/contact"
        >
          {{ $t("contact_with_us") }}
          <img src="@/assets/svg/profile_arrow.svg" alt="" />
        </router-link>
      </li>
      <li
        v-if="isLoading.store.isLogin"
        @click="useAuth.store.logOutModal = true"
        class="py-6 cursor-pointer border-b text-[#5C0099]"
      >
        {{ $t("logout") }}
      </li>
    </ul>
    <button
      v-if="!isLoading.store.isLogin"
      @click="useAuth.store.loginModal = true"
      class="bg-[#5C0099] mt-24 text-white w-full h-12 rounded-xl"
    >
      Tizimga kirish
    </button>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      v-model="useAuth.store.logOutModal"
      width="30%"
      align-center
    >
      <form @submit.prevent="isLogout = true">
        <h1 class="font-semibold text-2xl leading-7">Log out</h1>
        <p class="leading-6 mt-[14px] mb-5">
          Haqiqatdan ham hisobingizdan chiqmoqchimisiz?
        </p>
        <button
          @click="useAuth.logOut"
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
  title: "Profile",
  meta: [{ name: "florify", content: "profile" }],
});
import { useAuthStore, useLoadingStore } from "@/store";

const useAuth = useAuthStore();
const isLoading = useLoadingStore();
const isLogout = ref(false);
const isMount = ref(false);
const lang = ref(false);

onMounted(() => {
  isMount.value = true;
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

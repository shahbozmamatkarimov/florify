<template>
  <div
    class="flex flex-col gap-5 items-center justify-center pt-20 pb-32 w-full text-center"
  >
    <img src="@/assets/empty/nocart.svg" alt="" />
    <h1>Savatcha bo‘sh</h1>
    <p>Bosh sahifadagi to‘plamlardan yoki kerakli mahsulotni qidiruv orqali toping</p>
    <button
    @click="$router.push('/')"
      v-if="$router.currentRoute.value.name != 'index'"
      class="text-white mt-5 bg-[#5C0099] h-12 rounded-[12px] px-7"
    >
      Bosh sahifaga
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

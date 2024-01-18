<template>
  <div
    class="flex flex-col gap-5 items-center justify-center pt-20 pb-32 text-center"
  >
    <img src="@/assets/empty/nocategory.svg" alt="" />
    <h1>Sizga ko‘rsatadigan mahsulot yo‘q )</h1>
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

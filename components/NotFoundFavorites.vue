<template>
  <div
    class="flex flex-col gap-5 items-center justify-center pt-20 pb-32 text-center"
  >
    <img src="@/assets/empty/nofavorites.svg" alt="" />
    <h1>Sizga ko‘rsatadigan sevimli mahsulotlaringiz yo'q )</h1>
    <p>
      O'zingizga yoqqan mahsulotni topsangiz, uni yurak ustiga bosish orqali
      saqlang
    </p>
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

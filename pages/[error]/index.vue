<template>
  <main class="container min-h-screen max-h-screen mx-auto xl:px-28 md:px-10 px-5 py-20">
    <router-link class="cursor-pointer absolute top-0 bottom-0 xl:px-28 md:px-10 px-5 py-20 z-20" to="/">
      <img src="/not_found.svg" alt="" />
    </router-link>
    <div class="flex xl:flex-row flex-col min-h-[600px] h-[calc(100vh_-_200px)] items-center xl:justify-start justify-center xl:gap-20 gap-5">
      <h1 class="leading-[264px] text-white">404</h1>
      <div>
        <p class="text-38 font-bold">Мы не нашли страницу, которую вы ищете</p>
        <p class="mt-5 mb-6">
          Неверно набранный адрес или такой страницы на сайте больше не
          существует.
        </p>
        <p
          @click="$router.back()"
          class="cursor-pointer border-b text-[#5C0099] leading-[20px] max-w-fit border-[#5C0099]"
        >
          Назад
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Page not found",
  meta: [{ name: "florify", content: "page not found" }],
});

definePageMeta({
  layout: false,
});
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 900;
  font-size: 220px;
  text-shadow: 0 13.36px 85px #09090912, 0 -2px 1px #ffffff;
}

.text-38 {
  font-size: 38px;
}
</style>

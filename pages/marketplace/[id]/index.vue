<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-5 text-[#242424]">
    <section class="flex items-center gap-5 max-w-[730px] py-12">
      <div class="min-w-fit">
        <img
          v-if="!useSalesman.store.salesman.image?.length"
          class="md:h-24 md:w-24 h-16 w-16 rounded-full object-cover"
          src="@/assets/image/florify.png"
          alt="img"
        />
        <img
          v-else
          class="md:h-24 md:w-24 h-16 w-16 rounded-full object-cover"
          :src="baseUrlImage + useSalesman.store.salesman.image"
          alt="img"
        />
        <!-- baseUrlImage -->
      </div>
      <div class="flex flex-col gap-5">
        <h1 class="md:text-2xl sm:text-xl text-lg font-semibold">
          {{ useSalesman.store.salesman.store_name }}
        </h1>
        <pre
          class="md:-ml-8 -ml-8 !p-0 block w-full md:text-md sm:text-sm text-xs leading-6"
        >
          {{ useSalesman.store.salesman.description }}
        </pre>
        <!-- <button
          class="md:ml-0 -ml-20 md:text-md sm:text-sm text-xs flex items-center max-w-fit gap-5 border-2 border-[#242424] rounded-full py-2 px-8"
        >
          Подробнo <img src="@/assets/svg/arrow.svg" alt="" />
        </button> -->
      </div>
    </section>
    <section class="py-5 border-y-2 sm:text-sm text-xs text-[#454545]">
      <ul class="flex lg:gap-20 gap-5 max-w-[730px] leading-6">
        <li class="text-center">
          <h1>Рeйтинг</h1>
          <p class="flex justify-center gap-1">
            <img src="@/assets/svg/greenstar.svg" alt="" /> 4.91
          </p>
        </li>
        <li class="text-center">
          <h1>Oцeнки</h1>

          <p class="font-semibold">83</p>
        </li>
        <li class="text-center">
          <h1>Дocтaвкa</h1>
          <p class="font-semibold">30 000 cум</p>
        </li>
        <li class="text-center">
          <h1>Бoнуcы</h1>
          <p class="font-semibold">5%</p>
        </li>
        <li class="text-center">
          <h1>Нa Florify</h1>
          <p class="font-semibold">c 2023</p>
        </li>
      </ul>
    </section>
    <h1
      class="font-semibold md:text-2xl sm:text-xl text-lg pt-10 pb-7 border-b-2"
    >
      Товары BOTANICA Department of flowers
    </h1>
    <section class="sm:flex w-full">
      <nav class="sm:block hidden xl:w-[500px] w-[300px] pt-5 leading-9">
        <h1 class="md:text-xl sm:text-lg text-md font-semibold">Категории</h1>
        <ul class="md:text-[16px] text-sm leading-9">
          <li>Мaгaзин рeкoмeндуeт</li>
          <li>Цветы в коробке</li>
          <li>Шитье и бисер</li>
          <li>Мaгaзин рeкoмeндуeт</li>
          <li>Цветы в корзине</li>
          <li>Авторские букеты</li>
          <li>Монобукеты</li>
        </ul>
      </nav>
      <nav class="sm:hidden flex justify-center w-full py-3 border-b-2">
        <p>filter <i class="bx bx-filter-alt"></i></p>
      </nav>
      <!-- flowers -->
      <div class="w-full">
        <div class="grid lg:grid-cols-3 grid-cols-2 cards my-5 md:gap-7 gap-5">
          <div
            v-for="i in 12"
            :key="i"
            class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
              @click="$router.push('./фрида_кало')"
              class="img rounded-t-lg 2xl:h-72 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
              src="@/assets/image/image2.png"
              alt=""
            />
            <div class="md:p-5 p-3">
              <h5
                class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
              >
                Фрида Кало
              </h5>
              <div class="flex justify-between items-center">
                <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                  <span class="md:inline-block hidden"></span> 350 000
                  <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                </p>
                <div class="flex items-center sm:gap-3 gap-1">
                  <img
                    class="cursor-pointer"
                    src="@/assets/svg/heart.svg"
                    alt=""
                  />

                  <img
                    class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                    src="@/assets/svg/cart.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
        >
          {{ $t("home.show_more") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Salesman profile",
  meta: [{ name: "florify", content: "saleman profile" }],
});

import { useSalesmanStore } from "@/store";
const runtimeConfig = useRuntimeConfig();
// const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const useSalesman = useSalesmanStore();
useSalesman.get_salesman();

onMounted(() => {});

watch(
  () => useSalesman.store.salesman?.name,
  () => {
    useHead({
      title: useSalesman.store.salesman?.name,
      meta: [{ name: "florify", content: "saleman" }],
    });
  }
);
</script>

<style lang="scss" scoped></style>

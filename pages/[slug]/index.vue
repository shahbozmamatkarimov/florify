<template>
  <main>
    <section>
      <!-- Breadcrumb -->
      <nav
        class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Главная
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Все категории
          </li>
          <li>/</li>
          <li
            class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
          >
            Букет из "9 кустовых хризантем с эвкалиптом
          </li>
        </ol>
      </nav>
    </section>
    <section class="flex w-full">
      <a-carousel class="w-[524px]" arrows dots-class="slick-dots slick-thumb">
        <template #customPaging="props">
          <a>
            <img class="rounded-md" :src="getImgUrl(props.i)" />
          </a>
        </template>
        <div class="py-2" v-for="item in 4" :key="item">
          <img class="rounded-xl" :src="getImgUrl(item - 1)" />
        </div>
      </a-carousel>
      <div class="w-full leading-10">
        <ul class="border-b-2 pb-2">
          <li class="flex w-full justify-between font-semibold items-center">
            <h2><span>Артикул:</span><span> 333014199</span></h2>
            <p><i class="bx bx-heart">В желания</i></p>
          </li>
          <li class="text-2xl font-semibold">Букет из "9 кустовых хризантем с эвкалиптом 😍</li>
          <li>
            <p class="flex items-center gap-2"><i class="bx bxs-star text-[#FFA500]"></i>0.0 Оценок пока нет</p>
          </li>
          <li class="flex">
            <p class="w-24">Продавец:</p>
            <p>BOTANICA Department of flowers</p>
          </li>
          <li class="flex">
            <p class="w-24">Доставка:</p>
            <p>бесплатно</p>
          </li>
        </ul>
        <ul>
            <li>
                <h2>Цена:</h2>
                <p>800 000 uzs</p>
            </li>
            <li>
                <h2>Количество:</h2>
                <p></p>
            </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";
const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";

export default defineComponent({
  setup() {
    const getImgUrl = (i) => {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    };
    return {
      getImgUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
/* For demo */
:deep(.slick-dots) {
  position: relative;
  height: auto;
}
:deep(.slick-slide img) {
  display: block;
  margin: auto;
  width: 30rem;
  height: 30rem;
}

:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0;
}
:deep(.slick-thumb li) {
  width: 5rem;
  height: 6rem;
}
:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(50%);
  display: block;
}
:deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>

<template>
  <main
    class="container duration-1000 flex xl:gap-[14rem] md:gap-20 gap-10 mainSlider mx-auto xl:px-28 md:px-10 px-5 pb-5"
  >
    <div
      :class="productStore.state.sliderStep == 0 ? '' : 'h-0'"
      class="min-w-[100%]"
    >
      <section class="flex md:gap-7 gap-5">
        <div
          class="w-full bg-transparent h-full"
          v-if="!isLoading.isLoadingType('getAdvertising')"
        >
          <Swiper
            @slide-change-transition-end="slidechange"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-50%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            class="md:rounded-[20px] rounded-[10px] overflow-hidden"
          >
            <SwiperSlide
              v-for="slide in productStore.state.addvertising"
              :key="slide"
              class="md:rounded-[20px] rounded-[10px] overflow-hidden"
            >
              <div
                class="relative w-full carousel 2xl:xl:h-[360px] xl:h-[300px] lg:h-[260px] md:h-[200px] sm:h-[180px] h-[160px] min-h-[120px] overflow-hidden md:rounded-[20px] rounded-[10px]"
              >
                <img
                loading="lazy"
                  :src="baseUrlImage + slide.image"
                  class="absolute w-full bg-transparent -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            class="md:flex hidden justify-center items-center mt-4 mb-11 gap-[10px]"
          >
            <p
              :class="store.slideStep == i ? 'bg-[#323232]' : 'bg-[#D9D9D9]'"
              class="h-[10px] w-[10px] rounded-full"
              v-for="i in productStore.state.addvertising?.length"
            ></p>
          </div>
        </div>
        <div class="w-full" v-else>
          <div
            class="relative w-full carousel animate-pulse bg-gray-200 2xl:xl:h-[360px] xl:h-[300px] lg:h-[260px] md:h-[200px] sm:h-[180px] h-[160px] min-h-[120px] overflow-hidden rounded-[20px]"
          ></div>
          <div
            class="md:flex hidden justify-center items-center mt-4 mb-11 gap-[10px]"
          >
            <p
              :class="i == 1 ? 'bg-[#323232]' : 'bg-[#D9D9D9]'"
              class="h-[10px] w-[10px] rounded-full"
              v-for="i in 5"
            ></p>
          </div>
        </div>
      </section>
      <section
        v-if="productStore.state.categories?.length"
        class="flex items-center overflow-hidden overflow-x-auto mb-10 md:mt-0 mt-6 gap-4"
      >
        <div
          v-for="(i, index) in productStore.state.categories"
          @click="productStore.getOneProduct(i.id, index + 1)"
          class="relative cursor-pointer md:rounded-2xl rounded-lg overflow-hidden xl:h-[200px] xl:min-w-[200px] xl:w-[200px] lg:h-[180px] lg:min-w-[180px] lg:w-[180px] md:h-[160px] md:min-w-[160px] md:w-[160px] sm:h-[140px] sm:min-w-[140px] sm:w-[140px] h-[100px] min-w-[100px] w-[100px]"
        >
          <h1
            v-if="$t('uz') == 'Уз'"
            class="absolute break-words top-5 left-5 md:text-lg text-sm leading-[21px]"
          >
            {{ i.ru }}
          </h1>
          <h1
            v-else
            class="absolute break-words top-5 left-5 md:text-lg text-sm leading-[21px]"
          >
            {{ i.uz }}
          </h1>
          <img
          loading="lazy"
            class="h-full w-full object-cover"
            :src="baseUrlImage + i.image"
            alt=""
          />
        </div>
      </section>
      <section
        v-else
        class="flex items-center overflow-hidden overflow-x-auto mb-10 md:mt-0 mt-6 gap-4"
      >
        <div
          v-for="i in 10"
          class="relative bg-gray-200 animate-pulse cursor-pointer md:rounded-2xl rounded-lg overflow-hidden xl:h-[200px] xl:min-w-[200px] xl:w-[200px] lg:h-[180px] lg:min-w-[180px] lg:w-[180px] md:h-[160px] md:min-w-[160px] md:w-[160px] sm:h-[140px] sm:min-w-[140px] sm:w-[140px] h-[100px] min-w-[100px] w-[100px]"
        ></div>
      </section>

      <placeholderMain v-if="isLoading.isLoadingType('getAllProducts')" />

      <section>
        <div
          v-show="
            productStore.state.products[i.id]?.data?.records?.length &&
            !isLoading.isLoadingType('getAllProducts')
          "
          v-for="(i, index) in productStore.state.categories"
          :key="i.id"
        >
          <h1
            :class="index < 1 ? '' : 'sm:pt-7 pt-4'"
            class="sm:text-3xl text-lg -mt-2 pb-1 text-[#242424]"
          >
            {{ $t("en") == "In" ? i.uz : $t("en") == "Ан" ? i.ru : i.en }}
          </h1>
          <p class="sm:text-lg text-sm text-[#242424]">
            {{
              $t("en") == "In"
                ? i.uz_description
                : $t("en") == "Ан"
                ? i.ru_description
                : i.en_description
            }}
          </p>
          <div
            class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5"
          >
            <div
              v-for="(product, index) in productStore.state.products[i.id]?.data
                ?.records"
              :key="product.id"
              :id="product.id"
              class="relative card max-w-sm md:w-full w-[160px] md:p-0 p-[6px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
            >
              <img
              loading="lazy"
                @click="
                  $router.push(`/flowers/${product.id}?flower=${product.name}`)
                "
                class="img md:rounded-b-none rounded-b-lg rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-36 h-44 w-full object-cover"
                :src="`${baseUrlImage}${product?.images[0]?.image}`"
                alt=""
              />
              <div class="md:p-5 p-[6px]">
                <h5
                  class="mb-4 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
                >
                  {{ product.name }}
                </h5>
                <div
                  class="flex gap-1.5 mb-5 items-center bg-[#FCEAC9B2] px-2 py-1 rounded-[5px] max-w-fit"
                >
                  <img
                    class="md:min-w-[12px] min-w-[9px] -mt-[1px] md:h-[14px] h-[11px]"
                    src="@/assets/svg/cart.svg"
                    alt=""
                  />
                  <p class="md:text-lg text-[10px] leading-3">
                    {{ product.number_of_sales }} ta buyurtma
                  </p>
                </div>
                <div class="flex justify-between items-center">
                  <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                    <span class="md:inline-block hidden"></span>
                    {{ product.price }}
                    <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                  </p>
                  <div class="flex rounded-full sm:gap-3 gap-1">
                    <div
                      v-if="product.likes !== true"
                      :id="product.id"
                      @click="() => addToLike(index, i.id, true, product.id)"
                      class="absolute cursor-pointer duration-1000 flex top-5 right-5 bg-white rounded-full items-center justify-center md:h-9 md:w-9 h-8 w-8"
                    >
                      <img
                        class="md:h-5 md:w-5 h-4 w-4"
                        src="@/assets/svg/heart.svg"
                        alt=""
                      />
                    </div>
                    <div
                      v-else
                      @click="() => addToLike(index, i.id, false, product.id)"
                      :id="'id' + product.id"
                      class="absolute cursor-pointer duration-1000 flex top-5 right-5 bg-white rounded-full items-center justify-center md:h-9 md:w-9 h-8 w-8"
                    >
                      <img
                        class="duration-1000 md:h-5 md:w-5 h-4 w-4"
                        src="@/assets/svg/redHeart.svg"
                        alt=""
                      />
                    </div>
                    <div class="border border-[#EEEEEE] rounded-full p-1">
                      <img
                        @click="(e) => addToCart(e, product.id)"
                        class="cursor-pointer sm:h-5 sm:w-5 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                        src="@/assets/svg/cart.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="paginationNext(i.id)"
            v-if="
              productStore.state.products[i.id]?.data?.pagination?.total_pages >
              1
            "
            :class="
              isLoadingModal(i.id)
                ? 'bg-[#F1F1F2] border-gray-400 opacity-25 pointer-events-none'
                : ''
            "
            class="w-full font-semibold lg:h-14 h-10 rounded-xl bg-[#F1F1F2] overflow-hidden text-[#242424] hover:bg-black/10 duration-500"
            v-loading="isLoading.isLoadingType('getProductByCategory')"
          >
            {{ $t("home.show_more") }}
          </button>
        </div>
      </section>
      <NotFoundProduct v-if="productStore.state.products?.length" />
    </div>
    <div
      class="min-w-[100%] overflow-hidden pt-5"
      v-for="i in productStore.state.categories?.length + 2"
      :key="i"
    >
      <Category />
    </div>
    <!-- <section class="fixed">
      <div
        id="animateCard"
        :style="`top: ${store.mouseY}px; left: ${store.mouseX}px`"
        class="fixed z-[20000] card max-w-sm md:w-full w-[160px] md:p-0 p-[6px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
      >
        <img
          class="img md:rounded-b-none rounded-b-lg rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-36 h-44 w-full object-cover"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
          alt=""
        />
        <div class="md:p-5 p-[6px]">
          <h5
            class="mb-4 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
          >
            Apple
          </h5>
          <div
            class="flex gap-1.5 mb-5 items-center bg-[#FCEAC9B2] px-2 py-1 rounded-[5px] max-w-fit"
          >
            <img
              class="md:min-w-[12px] min-w-[9px] -mt-[1px] md:h-[14px] h-[11px]"
              src="@/assets/svg/cart.svg"
              alt=""
            />
            <p class="md:text-lg text-[10px] leading-3">0 ta buyurtma</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
              <span class="md:inline-block hidden"></span>
              200
              <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
            </p>
            <div class="flex rounded-full sm:gap-3 gap-1">
              <div
                class="absolute cursor-pointer duration-1000 flex top-5 right-5 bg-white rounded-full items-center justify-center md:h-9 md:w-9 h-8 w-8"
              >
                <img
                  class="md:h-5 md:w-5 h-4 w-4"
                  src="@/assets/svg/heart.svg"
                  alt=""
                />
              </div>
              <div class="border border-[#EEEEEE] rounded-full p-1">
                <img
                  class="cursor-pointer sm:h-5 sm:w-5 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script setup>
useHead({
  title: "florify",
  meta: [{ name: "description", content: "florify" }],
});
useSeoMeta({
  title: "florify",
  ogTitle: "florify",
  description: "Find your dream flowers with our website",
  keywords: "florify, florify, florafy, florifay",
  ogDescription: "Find your dream flowers with our website",
  ogImage: "/public/logo_mobile.svg",
  twitterCard: "/public/logo_mobile.svg",
  bodyAttrs: {
    class: "test",
  },
});

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import {
  useProductsStore,
  useImageCountStore,
  useAuthStore,
  useLoadingStore,
  useAddToCartStore,
} from "@/store";
import { initFlowbite } from "flowbite";
const isLoading = useLoadingStore();
const useAddToCart = useAddToCartStore();
const productStore = useProductsStore();
const authStore = useAuthStore();
const useImageCounter = useImageCountStore();
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));
const router = useRouter();
isLoading.addLoading("getAllProducts");
isLoading.addLoading("getAdvertising");

const store = reactive({
  slideStep: 1,
  mouseX: 0,
  mouseY: 0,
});

function slidechange() {
  if (store.slideStep != productStore.state.categories?.length) {
    store.slideStep++;
  } else {
    store.slideStep = 1;
  }
}

function paginationNext(id) {
  const pageInfo = productStore.state.products[id]?.data?.pagination;
  productStore.getProductByCategoryId(id, pageInfo.currentPage + 1);
}

function isLoadingModal(id) {
  if (
    productStore.state.products[id]?.data?.pagination?.total_pages ==
      productStore.state.products[id]?.data?.pagination?.currentPage ||
    isLoading.isLoadingType("getProductByCategory")
  ) {
    return true;
  }
  return false;
}

function addToCart(e, id) {
  // const div = document.getElementById(id);
  // const rect = div.getBoundingClientRect();
  // store.mouseX = rect.left;
  // store.mouseY = rect.top;
  // document.documentElement.style.setProperty("--pagex", rect.left);
  // document.documentElement.style.setProperty("--pagey", rect.top);

  // const rootStyles = getComputedStyle(document.documentElement);

  // const animatedDiv = document.getElementById("animateCard");
  // animatedDiv.classList.add("animateCard");

  const user_id = isLoading.store.salesman_id;
  useAddToCart.addcart.client_id = user_id;
  useAddToCart.addcart.product_id = id;
  useAddToCart.addToCart();
}

function addToLike(index, category_id, isLiked, id) {
  productStore.state.products[category_id].data.records[index].likes = isLiked;

  let method = "POST";
  if (isLiked) {
    method = "post";
  } else {
    method = "delete";
  }
  let product_id = id;
  const client_id = isLoading.store.salesman_id;
  axios({
    method,
    url: baseUrl + "/like",
    data: { client_id, product_id },
  })
    .then((res) => {
      console.log(res.data);
      if (res.data.statusCode === 400) {
        document.getElementById(id)?.classList?.toggle("hidden");
        document.getElementById("id" + id)?.classList?.toggle("hidden");
        authStore.store.loginModal = true;
      }
    })
    .catch((err) => {
      console.log(err);
      if (
        err.response.data.message ==
        "Mahsulot allaqachon sevimlilar ro'yxatiga qo'shilgan!"
      ) {
      } else {
        productStore.state.products[category_id].data.records[index].likes =
          !isLiked;
        authStore.store.loginModal = true;
      }
    });
}

watch(
  () => productStore.state.sliderStep,
  () => {
    const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${
      productStore.state.sliderStep * 100
    }%)`;
  }
);

watch(
  () => router.currentRoute.value,
  () => {
    if (router.currentRoute.value?.query?.page) {
      console.log("object");
      const image = document.querySelector(".mainSlider");
      image.style.transform = `translateX(-${
        router.currentRoute.value?.query?.page * 100
      }%)`;
      productStore.state.categoryPageId =
        router.currentRoute.value?.query?.page - 1;
      productStore.state.sliderStep = router.currentRoute.value?.query?.page;
    } else if (router.currentRoute.value?.query?.categories == "todays") {
      const image = document.querySelector(".mainSlider");
      image.style.transform = `translateX(-${
        (productStore.state.categories?.length + 1) * 100
      }%)`;
    } else {
      const image = document.querySelector(".mainSlider");
      image.style.transform = `translateX(0%)`;
      productStore.state.sliderStep = 0;
    }
  }
);

watch(
  () => productStore.state.todaysSlider,
  () => {
    const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${
      (productStore.state.categories?.length + 1) * 100
    }%)`;
  }
);

onMounted(() => {
  useImageCounter.imageCount();
  productStore.getAdvertising();
  productStore.getAllProducts();
  if (router.currentRoute.value?.query?.page) {
    const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${
      router.currentRoute.value?.query?.page * 100
    }%)`;
    productStore.state.categoryPageId =
      router.currentRoute.value?.query?.page - 1;
    productStore.state.sliderStep = router.currentRoute.value?.query?.page;
  } else if (router.currentRoute.value?.query?.categories == "todays") {
    const image = document.querySelector(".mainSlider");
    image.style.transform = `translateX(-${
      (productStore.state.categories?.length + 1) * 100
    }%)`;
  }
});
</script>

<style lang="scss" scoped></style>

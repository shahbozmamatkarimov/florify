<template>
  <main
    class="container duration-1000 flex xl:gap-[14rem] md:gap-20 gap-10 mainSlider mx-auto xl:px-28 md:px-10 px-5 pb-5"
  >
    <div
      :class="productStore.state.sliderStep == 0 ? '' : 'h-0'"
      class="min-w-[100%]"
    >
      <section class="flex md:gap-7 gap-5 sm:py-10 py-5">
        <Swiper
          v-if="!isLoading.isLoadingType('getAllProducts')"
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
        >
          <SwiperSlide
            v-for="slide in productStore.state.categories"
            :key="slide"
          >
            <div
              class="relative w-full carousel lg:h-[300px] md:h-60 sm:h-48 h-52 overflow-hidden rounded-xl"
            >
              <img
                :src="baseUrlImage + slide.image"
                class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <div
                class="flex flex-col items-center text-center justify-center h-full w-1/2 absolute"
              >
                <p class="xl:text-5xl px-2 md:text-3xl sm:text-2xl text-xl">
                  Букеты <br />
                  <span class="whitespace-nowrap"
                    >для <span class="text-[#B03A29]">Любимой</span></span
                  >
                </p>
                <p
                  class="flex items-center cursor-pointer gap-3 md:py-10 sm:py-4 py-2 font-medium md:text-xl sm:text-md text-sm"
                >
                  Подробнее
                  <svg
                    width="33"
                    height="21"
                    viewBox="0 0 33 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.555359 11C0.555359 11 36.5554 11 32.0554 11M32.0554 11C27.5554 11 18.5554 9 18.5554 1M32.0554 11C27.5554 10.8333 18.5554 12.8 18.5554 20"
                      stroke="#454545"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          v-else
          class="relative w-full carousel animate-pulse lg:h-[300px] bg-gray-200 md:h-60 sm:h-48 h-52 overflow-hidden rounded-xl"
        ></div>
        <div
          v-if="
            !isLoading.isLoadingType('getAdvertising') &&
            productStore.state.addvertising?.image
          "
          class="relative w-[320px] lg:min-w-[320px] md:min-w-[250px] min-w-[200px] lg:h-[300px] rounded-[10px] md:h-60 sm:h-48 sm:block hidden"
        >
          <p
            v-if="productStore.state.addvertising?.image"
            class="absolute right-0 px-4 py-2 bg-[#FFA500] rounded-es-xl rounded-se-xl"
          >
            -{{ productStore.state.addvertising?.discount }}%
          </p>
          <img
            class="h-full w-full object-cover bg-gray-100 border-0 rounded-xl"
            :src="baseUrlImage + productStore.state.addvertising?.image"
            alt=""
          />
        </div>
        <div
          v-else-if="
            isLoading.isLoadingType('getAdvertising') &&
            !productStore.state.addvertising?.image
          "
          class="relative animate-pulse bg-gray-200 w-[320px] lg:min-w-[320px] md:min-w-[250px] min-w-[200px] lg:h-[300px] rounded-[10px] md:h-60 sm:h-48 sm:block hidden"
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
              class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
            >
              <img
                @click="$router.push(`/flowers/${product.id}`)"
                class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
                :src="`${baseUrlImage}${product?.images[0]?.image}`"
                alt=""
              />
              <div class="md:p-5 p-3">
                <h5
                  class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
                >
                  {{ product.name }}
                </h5>
                <div class="flex justify-between items-center">
                  <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                    <span class="md:inline-block hidden"></span>
                    {{ product.price }}
                    <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                  </p>
                  <div class="flex items-center sm:gap-3 gap-1">
                    <img
                      v-if="product.likes !== true"
                      :id="product.id"
                      @click="() => addToLike(index, i.id, true, product.id)"
                      class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                      src="@/assets/svg/heart.svg"
                      alt=""
                    />
                    <img
                      v-else
                      @click="() => addToLike(index, i.id, false, product.id)"
                      :id="'id' + product.id"
                      class="cursor-pointer duration-1000 md:h-6 md:w-6 h-4 w-4"
                      src="@/assets/svg/redHeart.svg"
                      alt=""
                    />
                    <img
                      @click="() => addToCart(product.id)"
                      class="cursor-pointer sm:h-5 sm:w-5 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                      src="@/assets/svg/cart.svg"
                      alt=""
                    />
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
                : 'border-[#5C0099] text-[#5C0099]'
            "
            class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl overflow-hidden hover:bg-[#5C0099] duration-500 hover:text-white"
            v-loading="isLoading.isLoadingType('getProductByCategory')"
          >
            {{ $t("home.show_more") }}
          </button>
        </div>
      </section>
    </div>
    <div
      class="min-w-[100%] overflow-hidden pt-5"
      v-for="i in productStore.state.categories?.length + 2"
      :key="i"
    >
      <Category />
    </div>
  </main>
</template>

<script setup>
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

function addToCart(id) {
  const user_id = localStorage.getItem("user_id");
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
  const client_id = localStorage.getItem("user_id");
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

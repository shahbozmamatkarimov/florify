<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-20">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
            {{ $t("contacts.home") }}
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Просмотренные товары
          </li>
        </ol>
      </nav>
    </section>
    <h1 class="font-medium text-2xl">Просмотренные товары</h1>
    <!----------------------- Breadcrumb end---------------------------->

    <placeholder-slug
      v-if="
        isLoading.isLoadingType('getAllHistory') &&
        !useHistory.store.allHistory?.length
      "
    />
    <section v-else>
      <div>
        <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
          <div
            v-for="(i, index) in useHistory.store.allHistory"
            :key="i.id"
            class="relative card max-w-sm md:w-full w-[160px] md:p-0 p-[6px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
            loading="lazy"
              @click="$router.push(`./flowers/${i.product?.id}`)"
              class="img md:rounded-b-none rounded-b-lg rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-36 h-44 w-full object-cover"
              :src="`${baseUrlImage}${i.product?.images[0]?.image}`"
              alt=""
            />
            <div class="md:p-5 p-[6px]">
              <h5
                class="mb-4 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
              >
                {{ i.product?.name }}
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
                  {{ i.product.number_of_sales }} ta buyurtma
                </p>
              </div>
              <div class="flex justify-between items-center">
                <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                  <span class="md:inline-block hidden"></span>
                  {{ i.price }}
                  <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                </p>
                <div class="flex rounded-full sm:gap-3 gap-1">
                  <div
                    v-if="i.product.likes !== true"
                    :id="i.product.id"
                    @click="() => addToLike(index, true, i.product.id)"
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
                    @click="() => addToLike(index, false, i.product.id)"
                    :id="'id' + i.product.id"
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
                      @click="() => addToCart(i.product.id)"
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
          @click="showMoreHistory"
          v-if="useHistory.store.pagination.total_pages > 1"
          :class="
            useHistory.store.pagination.total_pages ==
            useHistory.store.pagination.currentPage
              ? 'bg-[#F1F1F2] border-gray-400 opacity-25 pointer-events-none'
              : ''
          "
          class="w-full font-semibold lg:h-14 h-10 rounded-xl bg-[#F1F1F2] overflow-hidden text-[#242424] hover:bg-black/10 duration-500"
          v-loading="isLoading.isLoadingType('getAllHistory')"
        >
          {{ $t("home.show_more") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "History", 
  meta: [{ name: "florify", content: "history" }],
});

import axios from "axios";
import {
  useHistoryStore,
  useAddToCartStore,
  useAuthStore,
  useLoadingStore,
} from "@/store";

const useAddToCart = useAddToCartStore();
const isLoading = useLoadingStore();
const useHistory = useHistoryStore();
const authStore = useAuthStore();

const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));
isLoading.addLoading("getAllHistory");

const store = reactive({
  data: "",
});

function showMoreHistory() {
  useHistory.store.pagination.currentPage += 1;
  useHistory.getHistory();
}

function addToCart(id) {
  const user_id = isLoading.store.salesman_id;
  useAddToCart.addcart.client_id = user_id;
  useAddToCart.addcart.product_id = id;
  useAddToCart.addToCart();
}

function addToLike(index, isLiked, id) {
  console.log(useHistory.store.allHistory[index]);
  useHistory.store.allHistory[index].product.likes = isLiked;
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
        useHistory.store.allHistory[index].product.likes = !isLiked;
        authStore.store.loginModal = true;
      }
    })
    .catch((err) => {
      useHistory.store.allHistory[index].product.likes = !isLiked;
      authStore.store.loginModal = true;
      console.log(err);
    });
}

onMounted(() => {
  useHistory.store.allHistory = [];
  useHistory.getHistory();
});
</script>

<style lang="scss" scoped></style>

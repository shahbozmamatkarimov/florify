<template>
  <main
    class="md:flex gap-32 container mx-auto xl:px-28 md:px-10 px-5 pb-[15rem] mt-[60px]"
  >
    <Tabs />
    <placeholder-slug
      v-if="
        isLoading.isLoadingType('getAllFavorites')
      "
    />
    <section v-else-if="useLike.store.allFavorites?.length">
      <div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 cards my-5 md:gap-7 gap-5">
          <div
            v-for="(i, index) in useLike.store.allFavorites"
            :key="i.id"
            class="relative card max-w-sm md:w-full w-[160px] md:p-0 p-[6px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
            loading="lazy"
              @click="$router.push(`./flowers/${i.product.id}?flower=${i.product.name}`)"
              class="img md:rounded-b-none rounded-b-lg rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-36 h-44 w-full object-cover"
              :src="`${baseUrlImage}${i.product.images[0]?.image}`"
              alt=""
            />
            <div class="md:p-5 p-[6px]">
              <h5
                class="mb-4 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
              >
                {{ i.product.name }}
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
                  {{ i.product.price }}
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
          v-if="useLike.store.pagination.total_pages > 1"
          :class="
            useLike.store.pagination.total_pages ==
            useLike.store.pagination.currentPage
              ? 'bg-[#F1F1F2] border-gray-400 opacity-25 pointer-events-none'
              : ''
          "
          class="w-full font-semibold lg:h-14 h-10 rounded-xl bg-[#F1F1F2] overflow-hidden text-[#242424] hover:bg-black/10 duration-500"
          v-loading="isLoading.isLoadingType('getAllFavorites')"
        >
          {{ $t("home.show_more") }}
        </button>
      </div>
    </section>
    <NotFoundFavorites v-else class="w-full" />
  </main>
</template>

<script setup>
useHead({
  title: "Favorites",
  meta: [{ name: "florify", content: "favorites" }],
});
import axios from "axios";
import {
  useLikeStore,
  useAddToCartStore,
  useAuthStore,
  useLoadingStore,
} from "@/store";

const useLike = useLikeStore();
const useAddToCart = useAddToCartStore();
const authStore = useAuthStore();
const isLoading = useLoadingStore();
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));
isLoading.addLoading("getAllFavorites");
// if (isLoading.store.isLogin) {
//   authStore.store.loginModal = true;
// }
const store = reactive({
  data: 8,
});

function showMoreHistory() {
  useLike.store.pagination.currentPage += 1;
  useLike.getFavorites();
}

function addToCart(id) {
  const user_id = isLoading.store.salesman_id;
  useAddToCart.addcart.client_id = user_id;
  useAddToCart.addcart.product_id = id;
  useAddToCart.addToCart();
}

function addToLike(index, isLiked, id) {
  console.log(useLike.store.allFavorites[index]);
  useLike.store.allFavorites[index].product.likes = isLiked;
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
        useLike.store.allFavorites[index].product.likes = !isLiked;
        authStore.store.loginModal = true;
      }
    })
    .catch((err) => {
      useLike.store.allFavorites[index].product.likes = !isLiked;
      authStore.store.loginModal = true;
      console.log(err);
    });
}

onMounted(() => {
  useLike.store.allFavorites = [];
  useLike.getFavorites();
});
</script>

<style lang="scss" scoped></style>

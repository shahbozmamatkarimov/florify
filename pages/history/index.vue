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
            class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
              @click="$router.push(`./flowers/${i.product?.id}`)"
              class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
              :src="`${baseUrlImage}${i.product?.images[0]?.image}`"
              alt=""
            />
            <div class="md:p-5 p-3">
              <h5
                class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
              >
                {{ i.product?.name }}
              </h5>
              <div class="flex justify-between items-center">
                <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                  <span class="md:inline-block hidden"></span>
                  {{ i.product?.price }}
                  <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                </p>
                <div class="flex items-center sm:gap-3 gap-1">
                  <img
                    v-if="i.product.likes !== true"
                    :id="i.product.id"
                    @click="() => addToLike(index, true, i.product.id)"
                    class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                    src="@/assets/svg/heart.svg"
                    alt=""
                  />
                  <img
                    v-else
                    @click="() => addToLike(index, false, i.product.id)"
                    :id="'id' + i.product.id"
                    class="cursor-pointer duration-1000 md:h-6 md:w-6 h-4 w-4"
                    src="@/assets/svg/redHeart.svg"
                    alt=""
                  />
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
        <button
          @click="showMoreHistory"
          v-if="useHistory.store.pagination.total_pages > 1"
          :class="
            useHistory.store.pagination.total_pages ==
            useHistory.store.pagination.currentPage
              ? 'bg-[#F1F1F2] border-gray-400 opacity-25 pointer-events-none'
              : 'border-[#5C0099] text-[#5C0099]'
          "
          class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl overflow-hidden hover:bg-[#5C0099] duration-500 hover:text-white"
          v-loading="isLoading.isLoadingType('getAllHistory')"
        >
          {{ $t("home.show_more") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
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
  const user_id = localStorage.getItem("user_id");
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
  const client_id = localStorage.getItem("user_id");
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

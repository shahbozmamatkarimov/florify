<template>
  <main class="container">
    <placeholderMain v-if="isLoading.isLoadingType('getProductByCategory') && !productStore?.state?.categories[productStore.state.categoryPageId]" />
    <section
      v-if="
        productStore?.state?.categories[productStore.state.categoryPageId] ||
        productStore.state.isTodays
      "
    >
      <div
        v-for="(i, index) in [
          productStore?.state?.categories[productStore.state.categoryPageId],
        ]"
        :key="i.id + 'category'"
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
          v-if="i.products?.length"
          class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5"
        >
          <div
            v-for="(product, index) in productStore.state.products[i.id]?.data
              ?.records"
            :key="product.id"
            class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
              @click="$router.push(`./flowers/${product.id}`)"
              class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
              :src="`${baseUrlImage}${product.images[0]?.image}`"
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
        <div v-else class="gap-2 pt-20 pb-32 max-w-fit text-center">
          <img src="@/assets/empty/nocategory.svg" alt="" />
          <h1>Mahsulotlar yo’q</h1>
        </div>
        <button
          @click="paginationNext(i.id)"
          v-if="
            productStore.state.products[i.id]?.data?.pagination?.total_pages > 1
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
    <section v-else>
      <div
        v-if="productStore.state.showProduct?.length"
        class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5"
      >
        <div
          v-for="(product, index) in productStore.state.showProduct"
          :key="product.id"
          class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img
            @click="$router.push(`/flowers/${product.id}`)"
            class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
            :src="`${baseUrlImage}${product.images[0]?.image}`"
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
                  @click="
                    () =>
                      addToLike(index, product.category_id, true, product.id)
                  "
                  class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                  src="@/assets/svg/heart.svg"
                  alt=""
                />
                <img
                  v-else
                  @click="
                    () =>
                      addToLike(index, product.category_id, false, product.id)
                  "
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
        @click="showTodaysProduct()"
        v-if="productStore.todays.pagination?.total_pages > 1"
        :class="
          productStore.todays.pagination?.total_pages ==
          productStore.todays.pagination?.currentPage
            ? 'bg-[#F1F1F2] border-gray-400 opacity-25 pointer-events-none'
            : 'border-[#5C0099] text-[#5C0099]'
        "
        class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl overflow-hidden hover:bg-[#5C0099] duration-500 hover:text-white"
        v-loading="isLoading.isLoadingType('getProductByCategory')"
      >
        {{ $t("home.show_more") }}
      </button>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
// import { initFlowbite } from "flowbite";
import { useProductsStore, useAuthStore, useLoadingStore, useAddToCartStore } from "@/store";

const isLoading = useLoadingStore();
const productStore = useProductsStore();
const runtimeConfig = useRuntimeConfig();
const useAddToCart = useAddToCartStore();
const authStore = useAuthStore();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));
const router = useRouter();
isLoading.addLoading('getProductByCategory')

const store = reactive({
  width: "",
  isLoading: false,
  page: 1,
  allProducts: "",
  data: 8,
});

function showTodaysProduct() {
  productStore.todays.pagination.currentPage += 1;
  productStore.getTodays();
}

function isLikedChecker(isLike, index) {
  if (isLike?.length) {
    productStore.showProductById[0].product[index].likes = "";
  } else {
    productStore.showProductById[0].product[index].likes = "true";
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

function addToCart(id) {
  const user_id = localStorage.getItem("user_id");
  useAddToCart.addcart.client_id = user_id;
  useAddToCart.addcart.product_id = id;
  useAddToCart.addToCart();
}

function addToLike(index, category_id, isLiked, id) {
  if (router.currentRoute.value?.query?.categories == "todays") {
    productStore.state.showProduct[index].likes = isLiked;
  } else {
    productStore.state.products[category_id].data.records[index].likes =
      isLiked;
  }
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
        if (router.currentRoute.value?.query?.categories == "todays") {
          productStore.state.showProduct[index].likes = !isLiked;
        } else {
          productStore.state.products[category_id].data.records[index].likes =
            !isLiked;
        }
        authStore.store.loginModal = true;
      }
    })
    .catch((err) => {
      if (router.currentRoute.value?.query?.categories == "todays") {
        productStore.state.showProduct[index].likes = !isLiked;
      } else {
        productStore.state.products[category_id].data.records[index].likes =
          !isLiked;
      }
      authStore.store.loginModal = true;
      console.log(err);
    });
}

// onBeforeMount(() => {
//   window.addEventListener("resize", () => {
//     store.width = window.innerWidth;
//     if (store.width < 501) {
//       store.data = 4;
//     } else if (store.width < 1024) {
//       store.data = 6;
//     } else {
//       store.data = 8;
//     }
//   });
//   store.width = window.innerWidth;
//   if (store.width < 501) {
//     store.data = 4;
//   } else if (store.width < 1024) {
//     store.data = 6;
//   } else {
//     store.data = 8;
//   }
//   store.width = window.innerWidth;
//   // initFlowbite();
// });
</script>

<style lang="scss" scoped>
@media (max-width: 580px) {
  .card .img {
    height: 9rem;
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .card .img {
    height: 12rem;
  }
  .carousel {
    height: 10rem;
  }
  .filter {
    gap: 1.4rem;
  }
  .filter select {
    font-size: 16px;
    padding: 0 30px 0 5px;
    border-radius: 5px;
  }

  .filter select:first-child {
    padding-left: 10px;
  }
}

@media (max-width: 400px) {
  .filter {
    gap: 0.5rem;
  }
  .filter select {
    font-size: 10px;
    padding: 0 30px 0 5px;
    border-radius: 5px;
  }
}

@media (max-width: 450px) {
  .card .img {
    height: 10rem;
  }
}

@media (max-width: 350px) {
  .card .img {
    height: 9rem;
  }
  .cards {
    gap: 0.5rem;
  }
}
</style>

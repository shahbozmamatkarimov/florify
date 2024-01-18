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
          <h1>{{ $t("rate") }}</h1>
          <p class="flex justify-center gap-1">
            <img src="@/assets/svg/greenstar.svg" alt="" /> 4.91
          </p>
        </li>
        <li class="text-center">
          <h1>{{ $t("reyting") }}</h1>

          <p class="font-semibold">83</p>
        </li>
        <li class="text-center">
          <h1>{{ $t("order.delivery") }}</h1>
          <p class="font-semibold">30 000 {{ $t("home.sum") }}</p>
        </li>
        <!-- <li class="text-center">
          <h1>Бoнуcы</h1>
          <p class="font-semibold">5%</p>
        </li> -->
        <li class="text-center">
          <h1>{{ $t("in_florify") }}</h1>
          <p class="font-semibold">
            <span v-if="$t('uz') == 'Уз'">c</span>
            {{ new Date(useSalesman.store.salesman.createdAt).getFullYear() }}
          </p>
        </li>
      </ul>
    </section>
    <h1
      class="font-semibold md:text-2xl sm:text-xl text-lg pt-10 pb-7 border-b-2"
    >
      <span v-if="$t('uz') == 'Уз'">Товары</span>
      {{ useSalesman.store.salesman.store_name }}
      <span v-if="$t('uz') != 'Уз'">Tovarlari</span>
    </h1>
    <section class="sm:flex w-full">
      <nav
        class="sticky top-40 sm:block flex xl:w-[500px] sm:border-b-0 sm:pb-0 pb-5 border-b-2 sm:w-[300px] pt-5 leading-9"
      >
        <h1 class="sm:block hidden md:text-xl sm:text-lg text-md font-semibold">
          {{ $t("category") }}
        </h1>
        <ul
          class="md:text-[16px] sm:block flex gap-3 overflow-hidden overflow-x-auto w-full text-sm leading-9"
        >
          <!-- <li>Мaгaзин рeкoмeндуeт</li>
          <li>Цветы в коробке</li>
          <li>Шитье и бисер</li>
          <li>Мaгaзин рeкoмeндуeт</li>
          <li>Цветы в корзине</li>
          <li>Авторские букеты</li> -->
          <li
            class="cursor-pointer"
            v-for="(i, index) in productStore.state.categories"
            @click="clickProduct(i.id)"
          >
            <p
              v-if="$t('uz') == 'Уз'"
              class="truncate sm:w-[90%] md:text-lg text-sm leading-[21px]"
            >
              {{ i.ru }}
            </p>
            <p
              v-else
              class="truncate sm:w-[90%] md:text-lg text-sm leading-[21px]"
            >
              {{ i.uz }}
            </p>
          </li>
        </ul>
      </nav>
      <!-- flowers -->
      <div v-if="isLoading.isLoadingType('getSalesmanProCategory')" class="col-span-full w-full">
        <PlaceHolderSalesmanProfile />
      </div>
      <div
        v-else-if="productStore.state.salesmanProduct?.length"
        class="w-full min-h-[600px]"
      >
        <div
          v-if="!isLoading.isLoadingType('getSalesmanProCategory')"
          class="grid lg:grid-cols-3 grid-cols-2 cards my-5 md:gap-7 gap-5"
        >
          <div
            v-for="(product, index) in productStore.state.salesmanProduct"
            :key="product.id"
            class="relative card bg-[#FFFFFF] max-w-sm md:w-full w-[160px] md:p-0 p-[6px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-gray-200 rounded-lg"
          >
            <img
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
                    @click="() => addToLike(index, true, product.id)"
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
                    @click="() => addToLike(index, false, product.id)"
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
        </div>
        <button
          @click="paginationNext()"
          v-if="
            productStore.state.salesman_pagination.total_pages > 1 &&
            productStore.state.salesman_pagination.currentPage <
              productStore.state.salesman_pagination.total_pages
          "
          :class="
            isLoading.isLoadingType('getSalesmanProCategory')
              ? 'bg-[#F1F1F2] border-gray-400 opacity-25 pointer-events-none'
              : 'border-[#5C0099] text-[#5C0099]'
          "
          class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl overflow-hidden hover:bg-[#5C0099] duration-500 hover:text-white"
          v-loading="isLoading.isLoadingType('getSalesmanProCategory')"
        >
          {{ $t("home.show_more") }}
        </button>
      </div>
      <div v-else>
        <NotFoundProduct />
      </div>
      <!-- <placeholderMain class="w-full"
        v-else
      /> -->
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Salesman profile",
  meta: [{ name: "florify", content: "saleman profile" }],
});
import axios from "axios";
import {
  useSalesmanStore,
  useProductsStore,
  useLoadingStore,
  useAddToCartStore,
} from "@/store";
const runtimeConfig = useRuntimeConfig();
const router = useRouter();
const productStore = useProductsStore();
const useAddToCart = useAddToCartStore();
const isLoading = useLoadingStore();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const store = reactive({
  category_id: "",
  salesman_id: "",
});

store.salesman_id = router.currentRoute.value.params?.id;

const useSalesman = useSalesmanStore();
useSalesman.get_salesman();

function paginationNext() {
  productStore.state.salesman_pagination.currentPage += 1;
  productStore.getSalesmanProCategory(store.category_id, store.salesman_id);
}

function clickProduct(category_id) {
  productStore.state.salesman_pagination.currentPage = 1;
  store.category_id = category_id;
  productStore.getSalesmanProCategory(store.category_id, store.salesman_id);
}

function addToCart(id) {
  const user_id = isLoading.store.salesman_id;
  useAddToCart.addcart.client_id = user_id;
  useAddToCart.addcart.product_id = id;
  useAddToCart.addToCart();
}

function addToLike(index, isLiked, id) {
  productStore.state.salesmanProduct[index].likes = isLiked;

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
        productStore.state.salesmanProduct[index].likes = !isLiked;
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
        productStore.state.salesmanProduct[index].likes = !isLiked;
        authStore.store.loginModal = true;
      }
    });
}

watch(
  () => productStore.state.categories,
  () => {
    productStore.getSalesmanProCategory(
      productStore.state.categories[0]?.id,
      store.salesman_id
    );
  }
);

// onMounted(() => {});

watch(
  () => useSalesman.store.salesman?.name,
  () => {
    useHead({
      title: useSalesman.store.salesman?.name,
      meta: [{ name: "florify", content: "saleman" }],
    });
  }
);

onMounted(() => {
  productStore.getSalesmanProCategory(
    productStore.state.categories[0]?.id,
    store.salesman_id
  );
});
</script>

<style lang="scss" scoped></style>

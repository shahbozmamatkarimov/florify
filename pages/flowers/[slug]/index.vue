<template>
  <main>
    <!----------------------- Breadcrumb ---------------------------->
    <section class="container mx-auto xl:px-28 md:px-10 px-5">
      <nav class="sm:flex hidden py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center font-medium text-gray-700 hover:text-blue-600"
          >
            Главная
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Все категории
          </li>
          <li>/</li>
          <li class="ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">
            {{ useProduct.state.getById?.name }}
          </li>
        </ol>
      </nav>
      <button
        class="flex items-center justify-center bg-gray-200 rounded-md px-5 my-3 py-1 gap-2 sm:hidden"
      >
        <i class="bx bx-arrow-back pt-1"></i> назад
      </button>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <section
      class="container mx-auto xl:px-28 md:px-10 px-5 flex md:flex-row flex-col gap-10 w-full"
    >
      <!---------------------- carousel -------------------------->
      <div
        class="2xl:max-w-[522px] xl:max-w-[508px] lg:max-w-[452px] md:max-w-[324px] sm:max-w-[450px] max-w-[calc(100vw_-_40px)] w-full overflow-hidden"
      >
        <div
          v-if="useProduct.state.getById"
          class="flex max-w-[600px] bg-white rounded-xl duration-1000"
          id="carouselMain"
        >
          <img
            v-for="i in useProduct.state.getById?.images"
            :key="i"
            class="carouselImg 2xl:min-w-[522px] xl:min-w-[508px] lg:min-w-[452px] md:min-w-[324px] sm:min-w-[450px] min-w-[calc(100vw_-_40px)] lg:h-[524px] md:h-[424px] bg-white object-contain rounded-xl border border-gray-200 object-center"
            :src="baseUrlImage + i.image"
            alt=""
          />
        </div>
        <div
          v-if="useProduct.state.getById?.images?.length > 1"
          id="carousel"
          class="grid grid-cols-5 w-full gap-[10px] mt-[10px]"
        >
          <img
            id="img"
            v-for="(i, index) in useProduct.state.getById?.images"
            @click="store.slideStep = index + 1"
            :key="index"
            :class="store.slideStep == index + 1 ? 'border-black p-1' : ''"
            class="bottomIMages lg:h-[110px] md:h-[80px] sm:h-[110px] h-[150px] bg-white w-full cursor-pointer duration-500 object-contain border border-gray-200 rounded-lg"
            :src="baseUrlImage + i.image"
            alt=""
          />
        </div>
      </div>

      <!---------------------- carousel end -------------------------->

      <!---------------------- about flower -------------------------->

      <div class="w-full leading-10">
        <ul class="border-b-2 pb-6 mb-[3px] leading-[19px] space-y-6">
          <li
            class="flex leading-[19px] flex-wrap w-full justify-between font-semibold items-center"
          >
            <h2>
              <span class="leading-[19px]">Артикул:</span>
              <span class="leading-[19px]">{{
                useProduct.state.getById?.id
              }}</span>
            </h2>
            <p
              v-if="true"
              @click="addToLikeProduct(true, useProduct.state.getById?.id)"
              class="flex items-center gap-3 cupoi"
            >
              <img
                v-if="useProduct.state.getById?.likes !== true"
                :id="useProduct.state.getById?.id"
                @click="
                  () =>
                    addToLike(
                      index,
                      true,
                      useProduct.state.getById?.id,
                      'history'
                    )
                "
                class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                src="@/assets/svg/heart.svg"
                alt=""
              />
              <img
                v-else
                @click="
                  () =>
                    addToLike(
                      index,
                      false,
                      useProduct.state.getById?.id,
                      'history'
                    )
                "
                :id="'id' + useProduct.state.getById?.id"
                class="cursor-pointer duration-1000 md:h-6 md:w-6 h-4 w-4"
                src="@/assets/svg/redHeart.svg"
                alt=""
              />
              В желания
            </p>
          </li>
          <li class="leading-[19px] lg:text-2xl text-lg font-semibold">
            {{ useProduct.state.getById?.name }}
          </li>
          <li class="flex items-center gap-5 leading-[19px]">
            <div>
              <p
                v-if="useProduct.state.getById?.likes?.length"
                class="flex items-center gap-2"
              >
                <i class="bx bxs-star text-[#FFA500]"></i
                >{{
                  Math.ceil(
                    (useProduct.state.getById?.likes?.length / 50) * 10
                  ) / 10
                }}
                ( {{ useProduct.state.getById?.likes?.length }} оценка )
              </p>
              <p v-else class="flex items-center gap-2">
                <i class="bx bxs-star text-[#FFA500]"></i>0.0 Оценок пока нет
              </p>
            </div>
            <p>Более 1500 заказов</p>
          </li>
          <li class="flex flex-wrap">
            <p class="w-24">Продавец:</p>
            <p
              @click="$router.push('/marketplace')"
              class="font-bold hover:underline cursor-pointer"
            >
              BOTANICA Department of flowers
            </p>
          </li>
          <li class="flex flex-wrap">
            <p class="w-24">Доставка:</p>
            <p class="font-bold">бесплатно</p>
          </li>
        </ul>
        <ul class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 pt-2">
          <li>
            <h2>Цена:</h2>
            <p class="font-bold">{{ useProduct.state.getById?.price }} uzs</p>
          </li>
          <li>
            <h2>Количество:</h2>
            <div
              class="flex items-center justify-around h-10 max-w-[120px] rounded-md overflow-hidden bg-[#EEEEEE] mt-1"
            >
              <button
                @click="() => changeQuantity('dec')"
                class="hover:bg-gray-200 h-full w-full"
              >
                <img class="mx-auto" src="@/assets/svg/minus.svg" alt="-" />
              </button>
              <p class="w-full text-center text-xl leading-6">
                {{ store.quantity }}
              </p>
              <button
                @click="() => changeQuantity('inc')"
                class="hover:bg-gray-200 h-full w-full"
              >
                <img class="mx-auto" src="@/assets/svg/plus.svg" alt="+" />
              </button>
            </div>
          </li>
        </ul>
        <div class="grid grid-cols-2 gap-5 my-5">
          <button
            @click="addToCart"
            class="md:text-md text-sm sm:h-16 h-12 bg-[#5C0099] active:opacity-50 text-white font-semibold rounded-xl border border-[#5C0099]"
          >
            Добавить в корзину
          </button>
          <button
            @click="() => addToCart('router')"
            class="md:text-md text-sm sm:h-16 h-12 text-[#5C0099] active:opacity-50 rounded-xl font-semibold border border-[#5C0099]"
          >
            Купить в 1 клик
          </button>
        </div>
        <div>
          <h1 class="font-bold text-lg">Сocтaв</h1>
          <ul class="ul pl-8 leading-9">
            <li>Ваксфлауэр - 2 шт.</li>
            <li>Эвкалипт - 2 шт.</li>
            <li>Роза пионовидная - 11 шт.</li>
            <li>Упаковка дизайнерская - 1 шт.</li>
          </ul>
        </div>
      </div>

      <!---------------------- about flower end -------------------------->
    </section>

    <section class="mt-20">
      <h1
        class="container mx-auto xl:px-28 md:px-10 px-5 mb-10 text-2xl leading-7 font-semibold"
      >
        {{ store.prodcut_comments?.length }} oтзывa o дocтaвкe тoвaрoв в
        Ташкенте
      </h1>
      <div class="marquee" v-show="!isLoading.isLoadingType('getComments')">
        <ul class="marquee-content">
          <li v-for="i in 100">
            <div
              v-for="i in store.prodcut_comments"
              class="comments flex gap-3 bg-white min-w-[440px] w-[440px] rounded-xl p-5"
            >
              <div
                class="flex items-center justify-center h-[52px] min-w-[52px] w-[52px] rounded-full text-white text-[28px] font-semibold bg-[#F1C8C2]"
              >
                <p class="leading-[34px]">У</p>
              </div>
              <div>
                <div>
                  <h1 class="leading-5">Ўғилой</h1>
                </div>
                <div class="flex mt-[6px] items-center gap-1">
                  <div v-for="i in 5">
                    <img
                      v-show="2 >= i"
                      class="h-4 w-4 cursor-pointer"
                      src="@/assets/svg/star_yellow.svg"
                      alt=""
                    />
                    <img
                      class="h-4 w-4 cursor-pointer"
                      v-show="2 < i"
                      src="@/assets/svg/light_star.svg"
                      alt=""
                    />
                  </div>
                  <p class="ml-4 text-[#999999]">25 апреля 2023 г.</p>
                </div>
                <pre
                  class="mt-5 leading-6 break-words whitespace-pre-line h-[72px] overflow-hidden overflow-y-auto"
                  >{{ i.text }}</pre
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="flex items-center gap-5 animate-pulse"
        v-show="isLoading.isLoadingType('getComments')"
      >
        <div
          v-for="i in 10"
          class="bg-gray-200 rounded-xl min-w-[440px] h-[220px]"
        ></div>
      </div>
    </section>

    <!------------------------ same flowers ----------------------------->

    <section class="container mx-auto xl:px-28 md:px-10 px-5">
      <h1 class="sm:text-3xl mt-10 sm:pb-2 text-md">
        Другие товары этого магазина
      </h1>
      <div class="flex overflow-hidden overflow-x-auto cards gap-5">
        <div
          v-if="isLoading.isLoadingType('getSalesmanProducts')"
          v-for="i in 25"
          :key="i"
          class="card 2xl:min-w-[310px] xl:min-w-[247px] lg:min-w-[220px] md:min-w-[212px] sm:min-w-[185px] min-w-[150px] my-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <div
            class="img border bg-gray-200 animate-pulse rounded-t-lg 2xl:h-80 xl:h-64 md:h-52 sm:h-44 h-44 w-full object-cover"
          ></div>
          <div class="md:p-5 p-3 mt-4">
            <h5
              class="bg-gray-200 rounded-2xl max-w-[96px] -mt-1 mb-1 h-5 animate-pulse"
            ></h5>
            <div class="flex justify-between items-center">
              <p
                class="bg-gray-200 rounded-2xl max-w-[112px] w-full h-5 animate-pulse"
              ></p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img
                  class="animate-pulse -mr-1 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/heartLoad.svg"
                  alt=""
                />

                <img
                  class="animate-pulse md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/cartLoad.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="product?.id != $router.currentRoute.value.params.slug"
          v-for="(product, index) in useProduct.state.salesmanProducts"
          :key="product.id"
          class="card 2xl:min-w-[310px] xl:min-w-[247px] lg:min-w-[220px] md:min-w-[212px] sm:min-w-[185px] min-w-[150px] my-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
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
                  @click="() => addToLike(index, true, product.id)"
                  class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                  src="@/assets/svg/heart.svg"
                  alt=""
                />
                <img
                  v-else
                  @click="() => addToLike(index, false, product.id)"
                  :id="'id' + product.id"
                  class="cursor-pointer duration-1000 md:h-6 md:w-6 h-4 w-4"
                  src="@/assets/svg/redHeart.svg"
                  alt=""
                />
                <img
                  @click="() => addToCartSalesman(product.id)"
                  class="cursor-pointer sm:h-5 sm:w-5 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-20 container mx-auto xl:px-28 md:px-10 px-5">
      <h1 class="sm:text-3xl pb-2 text-md">Просмотренные товары</h1>
      <div class="flex overflow-hidden overflow-x-auto cards gap-5">
        <div
          v-if="isLoading.isLoadingType('getAllHistory')"
          v-for="i in 25"
          :key="i"
          class="card 2xl:min-w-[310px] xl:min-w-[247px] lg:min-w-[220px] md:min-w-[212px] sm:min-w-[185px] min-w-[150px] my-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <div
            class="img border bg-gray-200 animate-pulse rounded-t-lg 2xl:h-80 xl:h-64 md:h-52 sm:h-44 h-44 w-full object-cover"
          ></div>
          <div class="md:p-5 p-3 mt-4">
            <h5
              class="bg-gray-200 rounded-2xl max-w-[96px] -mt-1 mb-1 h-5 animate-pulse"
            ></h5>
            <div class="flex justify-between items-center">
              <p
                class="bg-gray-200 rounded-2xl max-w-[112px] w-full h-5 animate-pulse"
              ></p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img
                  class="animate-pulse -mr-1 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/heartLoad.svg"
                  alt=""
                />

                <img
                  class="animate-pulse md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/cartLoad.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="product?.id != $router.currentRoute.value.params.slug"
          v-for="(product, index) in useHistory.store.allHistory"
          :key="product.id"
          class="card 2xl:min-w-[310px] xl:min-w-[247px] lg:min-w-[220px] md:min-w-[212px] sm:min-w-[185px] min-w-[150px] my-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img
            @click="$router.push(`/flowers/${product.product.id}`)"
            class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
            :src="`${baseUrlImage}${product.product?.images[0]?.image}`"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              {{ product.product.name }}
            </h5>
            <div class="flex justify-between items-center">
              <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                <span class="md:inline-block hidden"></span>
                {{ product.product.price }}
                <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img
                  v-if="product.product.likes !== true"
                  :id="product.product.id"
                  @click="
                    () => addToLike(index, true, product.product.id, 'history')
                  "
                  class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                  src="@/assets/svg/heart.svg"
                  alt=""
                />
                <img
                  v-else
                  @click="
                    () => addToLike(index, false, product.product.id, 'history')
                  "
                  :id="'id' + product.product.id"
                  class="cursor-pointer duration-1000 md:h-6 md:w-6 h-4 w-4"
                  src="@/assets/svg/redHeart.svg"
                  alt=""
                />
                <img
                  @click="() => addToCartSalesman(product.product.id)"
                  class="cursor-pointer sm:h-5 sm:w-5 md:max-h-6 md:max-w-6 max-h-4 max-w-4"
                  src="@/assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
import {
  useProductsStore,
  useHistoryStore,
  useAddToCartStore,
  useLoadingStore,
} from "@/store";

const useProduct = useProductsStore();
const useHistory = useHistoryStore();
const useAddToCart = useAddToCartStore();
const isLoading = useLoadingStore();
isLoading.addLoading("getProductByCategory");
isLoading.addLoading("getAllHistory");
isLoading.addLoading("getComments");

const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const router = useRouter();
const store = reactive({
  slideStep: 1,
  product_id: "",
  quantity: 1,
  btn: "",
  language: "ru-RU",
  prodcut_comments: [],
});

function addToCart(is_router) {
  const id = router.currentRoute.value.params.slug;
  let product = JSON.parse(localStorage.getItem("addToCart")) || [];
  let is_defined = false;
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      is_defined = true;
    }
  }

  if (is_defined) {
    if (is_router == "router") {
      router.push("/order");
    }
    return;
  }

  axios
    .get(baseUrl + `/product/id/${id}`)
    .then((res) => {
      console.log(res.data);
      if (res.data?.statusCode == 200) {
        res.data.data.product.client_quantity = store.quantity;
        product.push(res.data?.data?.product);
        localStorage.setItem("addToCart", JSON.stringify(product));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  if (is_router == "router") {
    router.push("/order");
  }
}

function changeQuantity(e) {
  useAddToCart.store.products =
    JSON.parse(localStorage.getItem("addToCart")) || [];
  const id = router.currentRoute.value.params.slug;
  let is_quantity = true;
  for (let i = 0; i < useAddToCart.store.products.length; i++) {
    if (useAddToCart.store.products[i].id == id) {
      is_quantity = false;
      if (e == "inc") {
        if (
          useAddToCart.store.products[i].quantity !=
          useAddToCart.store.products[i].client_quantity
        ) {
          useAddToCart.store.products[i].client_quantity += 1;
          localStorage.setItem(
            "addToCart",
            JSON.stringify(useAddToCart.store.products)
          );
          store.quantity = useAddToCart.store.products[i].client_quantity;
        }
      } else if (e == "dec") {
        if (useAddToCart.store.products[i].client_quantity > 1) {
          useAddToCart.store.products[i].client_quantity -= 1;
          localStorage.setItem(
            "addToCart",
            JSON.stringify(useAddToCart.store.products)
          );
          store.quantity = useAddToCart.store.products[i].client_quantity;
        }
      }
      break;
    }
  }

  if (is_quantity) {
    if (e == "inc" && store.quantity < useProduct.state.getById?.quantity) {
      store.quantity += 1;
    } else if (e == "dec" && store.quantity > 1) {
      store.quantity -= 1;
    }
  }
}

function getQuantity() {
  useAddToCart.store.products =
    JSON.parse(localStorage.getItem("addToCart")) || [];
  const id = router.currentRoute.value.params.slug;
  for (let i = 0; i < useAddToCart.store.products.length; i++) {
    if (useAddToCart.store.products[i].id == id) {
      if (
        useAddToCart.store.products[i].quantity !=
        useAddToCart.store.products[i].client_quantity
      ) {
        store.quantity = useAddToCart.store.products[i].client_quantity;
        break;
      }
    } else {
      store.quantity = 1;
    }
  }
}

function increment() {
  if (store.quantity < useProduct.state.getById?.quantity) {
    store.quantity++;
  }
}

function decrement() {
  if (store.quantity > 1) {
    store.quantity--;
  }
}

function addToCartSalesman(id) {
  const user_id = localStorage.getItem("user_id");
  useAddToCart.addcart.client_id = user_id;
  useAddToCart.addcart.product_id = id;
  useAddToCart.addToCart();
}

function addToLike(index, isLiked, id, type) {
  if (type == "history") {
    useHistory.store.allHistory[index].product.likes = isLiked;
  } else {
    useProduct.state.salesmanProducts[index].likes = isLiked;
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
        if (type == "history") {
          useHistory.store.allHistory[index].product.likes = !isLiked;
          authStore.store.loginModal = true;
        } else {
          useProduct.state.salesmanProducts[index].likes = !isLiked;
          authStore.store.loginModal = true;
        }
      }
    })
    .catch((err) => {
      console.log(err);
      if (
        err.response.data.message ==
        "Mahsulot allaqachon sevimlilar ro'yxatiga qo'shilgan!"
      ) {
      } else {
        if (type == "history") {
          useHistory.store.allHistory[index].product.likes = !isLiked;
          authStore.store.loginModal = true;
        } else {
          useProduct.state.salesmanProducts[index].likes = !isLiked;
          authStore.store.loginModal = true;
        }
      }
    });
}

function getComments() {
  isLoading.addLoading("getComments");
  const product_id = router.currentRoute.value.params.slug;
  axios
    .get(baseUrl + "/comment/productId/" + product_id)
    .then((res) => {
      console.log(res);
      store.prodcut_comments = res?.data?.data?.comments;
      console.log(store.prodcut_comments);
      const root = document.documentElement;
      // const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      //   "--marquee-elements-displayed"
      // );
      const marqueeContent = document.querySelector("ul.marquee-content");
      marqueeContent.addEventListener("scroll", () => {
        console.log("object");
      });
      const content_length = marqueeContent.querySelectorAll(".comments");
      console.log(content_length);
      console.log(marqueeContent);
      root.style.setProperty("--marquee-elements", 300);
      isLoading.removeLoading("getComments");
    })
    .catch((err) => {
      isLoading.removeLoading("getComments");
      console.log(err);
    });
}

watch(
  () => store.slideStep,
  () => {
    document.getElementById("carouselMain").style.transform = `translateX(-${
      store.slideStep * 100 - 100
    }%)`;
  }
);

onMounted(() => {
  store.product_id = +router.currentRoute.value.params.slug;
  getQuantity();
  getComments();
  useProduct.getById(store.product_id);
  useHistory.addToWatched(store.product_id);
  useHistory.getUserHistory();
});
</script>

<style lang="scss" scoped>
input:focus {
  outline: none !important;
  outline: 0 !important;
}

.ul {
  list-style-type: disc;
}

@media (max-width: 500px) {
  .bottomIMages {
    height: 120px;
  }
}

@media (max-width: 450px) {
  .carouselImg {
    height: 450px;
  }
  .bottomIMages {
    height: 100px;
  }
}

@media (max-width: 400px) {
  .carouselImg {
    height: 400px;
  }
  .bottomIMages {
    height: 80px;
  }
}

@media (max-width: 350px) {
  .carouselImg {
    height: 350px;
  }
}
</style>

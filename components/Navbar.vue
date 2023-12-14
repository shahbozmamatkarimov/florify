<template>
  <main>
    <nav class="navbar container mx-auto xl:px-28 md:px-10 px-5 mt-[70px]">
      <div class="grid grid-cols-5 sm:py-5 py-3 sm:gap-6 gap-2">
        <form
          class="items-center grid md:grid-cols-3 grid-cols-5 sm:gap-6 gap-2 relative md:col-span-3 col-span-5"
        >
          <div class="flex items-center relative md:col-span-2 col-span-4">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
            >
              <img class="location" src="../assets/svg/location.svg" alt="" />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="border md:h-14 h-10 border-gray-300 placeholder-gray-800 md:text-lg rounded-xl outline-none block w-full pl-12 p-2.5"
              :placeholder="$t('navbar.address')"
              required
            />
          </div>
          <button
            class="locate md:h-14 h-10 text-center whitespace-nowrap flex items-center justify-center bg-[#5C0099] text-white rounded-xl"
          >
            {{ $t("navbar.show") }}
          </button>
        </form>
        <div class="relative md:col-span-2 col-span-full w-full">
          <form class="relative">
            <input
              v-model="productStore.search.search"
              type="search"
              class="border md:h-14 h-10 relative border-gray-300 placeholder-gray-800 md:text-lg rounded-xl outline-none block w-full p-2.5"
              :placeholder="$t('navbar.search')"
              required
            />
            <button
              type="submit"
              class="flex justify-center items-center border border-gray-300 border-l-0 absolute top-0 right-0 h-full p-2.5 font-medium bg-[#F3F3F3] rounded-r-xl sm:w-16 w-10"
            >
              <img src="../assets/svg/searchIcon.svg" alt="" />
            </button>
          </form>
          <div
            v-if="productStore.search.search?.length > 0"
            class="p-6 absolute z-50 w-full bg-white rounded-b-xl"
          >
            <h1 class="text-xl leading-6 font-medium">Популярное</h1>
            <div
              class="space-y-4 mt-6 max-h-[calc(100vh_-_250px)] overflow-hidden overflow-y-auto"
            >
              <div
                v-for="i in 5"
                class="flex items-center gap-3 border-b pb-4 border-[#E6E6E6]"
              >
                <img
                  class="h-20 w-20 rounded-[10px]"
                  src="@/assets/image/image1.png"
                  alt=""
                />
                <div class="space-y-1 font-medium">
                  <p class="leading-[21px] text-[#5C0099] text-lg">
                    Разноцветные тюльпаны
                  </p>
                  <p class="leading-[19px]">3330077923</p>
                </div>
              </div>
              <p class="text-[#5C0099] text-xl leading-6 font-medium">
                Показать все результаты (4)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul
          class="flex category gap-6 font-medium text-gray-600 py-1 md:pr-0 pr-10 overflow-hidden overflow-x-auto"
        >
          <li
            @click="
              productStore.getAllProducts();
              $router.push('/');
              productStore.state.sliderStep = 0;
            "
            :class="
              !$router.currentRoute.value?.query?.page
                ? 'text-[#5C0099] font-bold'
                : ''
            "
            class="cursor-pointer hover:text-[#5C0099]"
          >
            {{ $t("navbar.all") }}
          </li>
          <li
            @click="productStore.getOneProduct(i.id, index + 1)"
            v-for="(i, index) in productStore.state.categories"
            :key="i.id"
            :class="
              $router.currentRoute.value?.query?.page == index + 1
                ? 'text-[#5C0099] font-bold'
                : ''
            "
            class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
          >
            <router-link v-if="$t('en') == 'In'" to="/">
              {{ i.uz }}
            </router-link>
            <router-link v-else-if="$t('en') == 'Ан'" to="/">
              {{ i.ru }}
            </router-link>
            <router-link v-if="$t('en') == 'En'" to="/">
              {{ i.en }}
            </router-link>
          </li>
          <li
            :class="
              $router.currentRoute.value?.query?.categories == 'todays'
                ? 'text-[#5C0099] font-bold'
                : ''
            "
            @click="
              productStore.getOneProduct(
                'today',
                productStore.state.categories?.length + 1
              )
            "
            class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
          >
            {{ $t("navbar.presents") }}
          </li>
          <li
            :class="
              $router.currentRoute.value?.name == 'history'
                ? 'text-[#5C0099] font-bold'
                : ''
            "
            @click="$router.push('/history')"
            class="cursor-pointer flex items-center gap-1 whitespace-nowrap hover:text-[#5C0099]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11.3C2 11.3 4.7 5 11 5C17.3 5 20 11.3 20 11.3C20 11.3 17.3 17.6 11 17.6C4.7 17.6 2 11.3 2 11.3Z"
                :stroke="
                  $router.currentRoute.value?.name == 'history'
                    ? '#5C0099'
                    : '#555555'
                "
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9998 14C12.491 14 13.6998 12.7912 13.6998 11.3C13.6998 9.80884 12.491 8.60001 10.9998 8.60001C9.50864 8.60001 8.2998 9.80884 8.2998 11.3C8.2998 12.7912 9.50864 14 10.9998 14Z"
                :stroke="
                  $router.currentRoute.value?.name == 'history'
                    ? '#5C0099'
                    : '#555555'
                "
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $t("navbar.watched") }}
          </li>
          <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
            {{ $t("navbar.orders") }}
          </li>
          <li
            :class="
              $router.currentRoute.value?.name == 'favorites'
                ? 'text-[#5C0099] font-bold'
                : ''
            "
            @click="$router.push('/favorites')"
            class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]"
          >
            {{ $t("navbar.favorites") }}
          </li>
        </ul>
      </div>
    </nav>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      v-model="authStore.store.loginModal"
      width="30%"
      align-center
    >
      <form
        v-loading="authStore.store.isLoading"
        @submit.prevent="authStore.handleSubmit()"
      >
        <h1 class="font-semibold text-2xl leading-7">Введите номер телефона</h1>
        <p class="leading-6 mt-[14px] mb-5">
          Напишите номер своего мобильного телефона и вам придет СМС с кодом для
          входа
        </p>
        <h1 class="leading-[21px]">Номер телефона *</h1>
        <input
          v-model="authStore.store.phone"
          :class="!authStore.store.isVerified ? 'border !border-[#EC3434]' : ''"
          class="h-14 mt-[6px] mb-[55px] rounded-[10px] w-full"
          type="text"
          placeholder="+998 99 999 99 99"
        />
        <label for="1">
          <button
            class="h-14 bg-[#5C0099] rounded-xl w-full text-white text-semibold leading-5"
          >
            Получить СМС с кодом
          </button>
        </label>
        <p class="text-sm leading-5 mt-[30px]">
          Avtotizatsiyadan o'tish orqali siz
          <span class="underline"
            >shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
            bildirasiz</span
          >
        </p>
      </form>
    </el-dialog>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      v-model="authStore.store.otpModal"
      width="30%"
      align-center
    >
      <form
        v-loading="authStore.store.isLoading"
        @submit.prevent="authStore.verifyOtp()"
      >
        <h1 class="font-semibold text-2xl leading-7">Tasdiqlash kodi</h1>
        <p class="leading-6 mt-[14px] mb-5">
          Tasdiqlash kodi +998 99 *** ** 03 raqamiga yuborilgan
        </p>
        <div class="flex items-center justify-center text-2xl gap-[10px]">
          <input
            id="1"
            @input="(e) => nextNumber(e, 2)"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
          <input
            @input="(e) => nextNumber(e, 3)"
            id="2"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
          <input
            @input="(e) => nextNumber(e, 4)"
            id="3"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
          <input
            @input="(e) => nextNumber(e, 5)"
            id="4"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
          />
        </div>
        <button
          class="h-14 bg-[#5C0099] rounded-xl w-full text-white text-semibold leading-5"
        >
          Kodni tasdiqlash
        </button>
      </form>
    </el-dialog>

    <!-- add to cart drawer -->
    <el-drawer
      v-if="isMount"
      class="rounded-l-[40px] min-w-[500px] px-[30px]"
      v-model="productStore.state.addToProductDrawer"
      title="I am the title"
      :with-header="false"
    >
      <div class="flex sticky top-0 py-2 items-center justify-between bg-white">
        <h1 class="font-semibold text-2xl">Состав заказа</h1>
        <img
          @click="productStore.state.addToProductDrawer = false"
          class="h-6 w-6 rounded-lg cursor-pointer"
          src="../assets/svg/x.svg"
          alt="x"
        />
      </div>
      <div
        class="space-y-4 w-full mt-6 -mb-2 max-h-[calc(100vh_-_125px)] overflow-hidden overflow-y-auto"
      >
        <div
          v-if="isLoading.isLoadingType('addToCart')"
          class="animate-pulse"
          v-for="i in 5"
        >
          <div class="tableImg flex w-full text-start">
            <div class="bg-gray-200 h-20 min-w-[80px] rounded-[10px]"></div>
            <div class="pl relative pl-3 w-full">
              <div class="flex w-full items-start justify-between">
                <h1
                  class="h-6 rounded-[5px] bg-gray-200 xl:w-[70%] w-[90%]"
                ></h1>
              </div>
              <p class="bg-gray-200 rounded-[5px] h-5 w-24 mt-3"></p>
              <p
                class="flex justify-between sm:text-md text-sm w-full absolute bottom-0"
              >
                <span class="bg-gray-200 rounded-[5px] h-5 w-9"></span
                ><span class="bg-gray-200 rounded-[5px] h-5 w-24 mr-3"></span>
              </p>
            </div>
          </div>
          <hr class="sm:my-5 my-4 w-full" />
        </div>
        <div v-else v-for="i in useAddToCart.store.products">
          <div class="tableImg flex w-full text-start">
            <img
              v-if="i.images[0]?.image"
              class="h-20 w-20 rounded-[10px]"
              :src="baseUrlImage + i.images[0]?.image"
              alt="Jese image"
            />
            <div
              v-else
              class="h-20 min-w-[80px] rounded-[10px] bg-gray-200"
            ></div>
            <div class="pl relative pl-3 w-full">
              <div class="flex w-full items-start justify-between">
                <h1
                  class="sm:font-bold font-semibold lg:text-md sm:text-lg text-sm xl:w-[70%] w-[90%] overflow-hidden"
                >
                  {{ i.name }}
                </h1>
                <img
                  @click="changeQuantity('delete', i.id)"
                  class="cursor-pointer mt-2 h-4 w-4"
                  src="@/assets/svg/x.svg"
                  alt="x"
                />
              </div>
              <p
                class="price pb-5 font-normal sm:text-md text-xs text-gray-500 sm:pt-2 py-2"
              >
                Cтандартний
              </p>
              <div
                class="flex justify-between sm:text-md text-sm w-full absolute bottom-0"
              >
                <div
                  class="flex items-center justify-around h-6 w-full max-w-[80px] text-xs rounded-[3px] overflow-hidden bg-[#EEEEEE] mt-1"
                >
                  <button
                    @click="changeQuantity('dec', i.id)"
                    class="hover:bg-gray-200 h-full w-full"
                  >
                    <img
                      class="mx-auto h-4 w-4"
                      src="@/assets/svg/minus.svg"
                      alt="-"
                    />
                  </button>
                  <input
                    type="number"
                    @change="(e) => changeQuantity(e, i.id)"
                    v-model="i.client_quantity"
                    class="w-full bg-transparent p-0 text-center leading-6"
                  />
                  <button
                    @click="changeQuantity('inc', i.id)"
                    class="hover:bg-gray-200 h-full w-full"
                  >
                    <img
                      class="mx-auto h-4 w-4"
                      src="@/assets/svg/plus.svg"
                      alt="+"
                    />
                  </button>
                </div>
                <span class="font-semibold pr-3">
                  {{ i.price }}
                  сум</span
                >
              </div>
            </div>
          </div>
          <hr class="sm:my-5 my-4 w-full" />
        </div>
        <div class="flex justify-between items-center">
          <p>Доставка</p>
          <p class="font-semibold">Бесплатно</p>
        </div>
        <hr class="sm:my-5 my-2" />
        <div class="flex justify-between py-2 items-center">
          <p>Общая стоимость</p>
          <p class="font-semibold">{{ useAddToCart.store.total_price }} сум</p>
        </div>
        <button
          @click="() => pushToOrder()"
          class="sm:h-16 h-10 sm:my-5 my-2 flex justify-center sm:text-md text-sm items-center w-full font-semibold text-white rounded-xl bg-[#5C0099]"
        >
          Оформить заказ
        </button>
        <h1 class="sm:text-md text-sm">
          Нажимая на кнопку, вы соглашаетесь с условиями оказания услуг и
          политикой обработки персональных данных
        </h1>
      </div>
    </el-drawer>
  </main>
</template>

<script setup>
import {
  useProductsStore,
  useAddToCartStore,
  useAuthStore,
  useLoadingStore,
} from "@/store";
const productStore = useProductsStore();
const useAddToCart = useAddToCartStore();
const authStore = useAuthStore();
const isLoading = useLoadingStore();
const isMount = ref(false);
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const store = reactive({
  loginModal: false,
  otpStep: 1,
  width: "",
  quintity: 1,
});

function nextNumber(e, val) {
  if (val != 5) {
    store.otpStep = val;
  } else {
    store.otpStep = 5;
  }
  authStore.store.otp.push(document.getElementById(val - 1)?.value);
  if (e.inputType === "deleteContentBackward") return;
  document.getElementById(val)?.focus();
}

function pushToOrder() {
  productStore.state.addToProductDrawer = false;
  router.push("/order");
}

function changeQuantity(e, id) {
  for (var i = 0; i < useAddToCart.store.products.length; i++) {
    if (useAddToCart.store.products[i].id == id) {
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
        }
      } else if (e == "dec") {
        if (useAddToCart.store.products[i].client_quantity > 1) {
          useAddToCart.store.products[i].client_quantity -= 1;
          localStorage.setItem(
            "addToCart",
            JSON.stringify(useAddToCart.store.products)
          );
        }
      } else if (e == "delete") {
        useAddToCart.store.products?.splice(i, 1);
        localStorage.setItem(
          "addToCart",
          JSON.stringify(useAddToCart.store.products)
        );
      } else {
        useAddToCart.store.products[i].client_quantity = +e.target.value || 1;
        localStorage.setItem(
          "addToCart",
          JSON.stringify(useAddToCart.store.products)
        );
      }
    }
  }
  useAddToCart.totalPrice();
}

onBeforeMount(() => {
  window.addEventListener("resize", () => {
    store.width = window.innerWidth;
    if (store.width < 501) {
      isLoading.store.limit = 4;
    } else if (store.width < 1024) {
      isLoading.store.limit = 6;
    } else {
      isLoading.store.limit = 8;
    }
  });
  store.width = window.innerWidth;
  if (store.width < 501) {
    isLoading.store.limit = 4;
  } else if (store.width < 1024) {
    isLoading.store.limit = 6;
  } else {
    isLoading.store.limit = 8;
  }
});

function increment() {
  // if (store.quintity < productStore.state.getById?.quantity) {
  store.quintity++;
  // }
}

function decrement() {
  if (store.quintity > 1) {
    store.quintity--;
  }
}

onMounted(() => {
  isMount.value = true;
  productStore.getAllProducts();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      authStore.store.otp = [];
      const otp = document.querySelectorAll(".otp");
      for (let i of otp) {
        i.value = "";
      }
      document.getElementById(1)?.focus();
    }
  });
});
</script>

<style lang="scss" scoped>
.category::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

@media (max-width: 500px) {
  .navbar,
  input {
    font-size: 12px;
  }

  input,
  .locate {
    height: 32px;
    border-radius: 10px;
  }

  .location {
    height: 15px;
  }
}

@media (max-width: 350px) {
  .locate {
    font-size: 9px;
  }
}
</style>

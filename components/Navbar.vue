<template>
  <main>
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
          @input="(e) => phoneNumber(e)"
          minlength="13"
          maxlength="13"
          :class="!authStore.store.isVerified ? 'border !border-[#EC3434]' : ''"
          class="h-14 mt-[6px] mb-[55px] rounded-[10px] w-full"
          type="tel"
          placeholder="+998 99 999 99 99"
          required
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
        <!-- <h1 class="font-semibold text-2xl leading-7">Tasdiqlash kodi</h1> -->
        <h1 class="leading-[21px]">Username *</h1>
        <input
          :class="checkLocalStorage() ? 'pointer-events-none' : ''"
          v-model="authStore.store.name"
          class="h-14 mt-[6px] mb-[55px] rounded-[10px] w-full"
          type="text"
          placeholder="John Doe"
          required
        />
        <p class="leading-6 -mt-5 mb-5">
          Tasdiqlash kodi {{ authStore.store.phone }} raqamiga yuborilgan
        </p>
        <div class="flex items-center justify-start text-2xl gap-[10px]">
          <input
            id="1"
            @input="(e) => nextNumber(e, 2)"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
            required
          />
          <input
            @input="(e) => nextNumber(e, 3)"
            id="2"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
            required
          />
          <input
            @input="(e) => nextNumber(e, 4)"
            id="3"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
            required
          />
          <input
            @input="(e) => nextNumber(e, 5)"
            id="4"
            :class="!authStore.store.isVerified ? 'border-[#EC3434]' : ''"
            class="otp h-14 w-14 mt-[6px] mb-[55px] text-center rounded-[10px]"
            maxlength="1"
            type="text"
            required
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
      <div class="flex py-2 items-center justify-between bg-white">
        <h1 class="font-semibold text-2xl">{{ $t("order.order_list") }}</h1>
        <img
          @click="productStore.state.addToProductDrawer = false"
          class="h-6 w-6 rounded-lg object-cover cursor-pointer"
          src="../assets/svg/x.svg"
          alt="x"
        />
      </div>
      <div
        class="space-y-4 w-full mt-6 -mb-2 max-h-[calc(100vh_-_125px)] overflow-hidden overflow-y-auto"
      >
        <div
          v-if="useAddToCart.store.products?.length"
          v-for="i in useAddToCart.store.products"
        >
          <div class="tableImg flex w-full text-start">
            <img
              v-if="i.images[0]?.image"
              class="h-20 w-20 rounded-[10px] object-cover"
              :src="baseUrlImage + i.images[0]?.image"
              alt=""
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
        <NotFoundCart v-else />
        <div v-if="useAddToCart.store.products?.length">
          <div class="flex justify-between items-center">
            <p>{{ $t("order.delivery") }}</p>
            <p class="font-semibold">{{ $t("order.free") }}</p>
          </div>
          <hr class="sm:my-5 my-2" />
          <div class="flex justify-between py-2 items-center">
            <p>{{ $t("order.total") }}</p>
            <p class="font-semibold">
              {{ useAddToCart.store.total_price }} {{ $t("home.sum") }}
            </p>
          </div>
          <button
            @click="() => pushToOrder()"
            class="sm:h-16 h-10 sm:my-5 my-2 flex justify-center sm:text-md text-sm items-center w-full font-semibold text-white rounded-xl bg-[#5C0099]"
          >
            {{ $t("get_order") }}
          </button>
          <h1 class="sm:text-md text-sm">
            {{ $t("order_description") }}
          </h1>
        </div>
      </div>
    </el-drawer>

    <!-- menu drawer -->
    <el-drawer
      v-if="isMount"
      class="sm:min-w-[400px] min-w-full px-5 py-5 menu_drawer"
      v-model="productStore.state.menu"
      :with-header="false"
    >
      <img
        @click="productStore.state.menu = false"
        class="h-6 w-6 rounded-lg object-cover cursor-pointer"
        src="../assets/svg/x.svg"
        alt="x"
      />
      <ul class="mt-10 space-y-6 font-medium leading-[19px]">
        <!-- <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/favorites"
            >{{ $t("navbar.favorites") }}</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/orders"
            >{{ $t("navbar.orders") }}</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/history"
            >{{ $t("navbar.watched") }}</router-link
          >
        </li> -->
        <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/about"
            >{{ $t("about") }}</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/buy_and_order"
            >{{ $t("payment_and_delivery") }}</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/quality_assurance"
            >{{ $t("quality_assurance") }}</router-link
          >
        </li>
        <li>
          <router-link
            class="hover:text-[#5C0099] hover:font-semibold"
            to="/contact"
            >{{ $t("contact") }}</router-link
          >
        </li>
        <li
          class="flex lang_select cursor-pointer items-center gap-2 hover:text-[#5C0099] hover:font-semibold"
        >
          <div class="xl:flex hidden items-center">
            <el-dropdown @command="(command) => ($i18n.locale = command)">
              <div
                class="text-white outline-none cursor-pointer"
                @click.prevent
              >
                <p
                  v-if="$t('en') !== 'In'"
                  class="flex items-center text-black leading-4 gap-2"
                >
                  Русский
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.125 5L11.625 9.5L7.125 14"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <p
                  v-else-if="$t('en') !== 'Ан'"
                  class="flex items-center text-black leading-4 gap-2"
                >
                  Uzbekcha
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.125 5L11.625 9.5L7.125 14"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="uz">
                    <div class="flex gap-2">
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="../assets/lang/uz.svg"
                        alt=""
                      />
                      Uzbekcha
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item command="ru">
                    <div class="flex w-12 gap-2">
                      <img
                        class="w-6 h-6 object-cover rounded-full"
                        src="../assets/lang/ru.svg"
                        alt=""
                      />
                      Русский
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </li>
      </ul>
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
  searchInput: "",
  searchedData: "",
});

function searchAddress() {
  productStore.state.isAddressModal = true;
  // https://yandex.ru/dev/geosearch/doc/ru/examples
  // searchable map docs
  fetch(
    `https://suggest-maps.yandex.uz/v1/suggest?apikey=6005c090-df95-40ae-a9cd-3d972b1b46f3&text=${store.searchInput}&lang=uz_UZ`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      store.searchedData = res.results;
    })
    .catch((err) => console.log(err));
}

function phoneNumber(e) {
  if (e.target.value?.length < 4) {
    authStore.store.phone = "+998";
  }
  const val = e.target.value?.slice(-1);
  if (isNaN(val)) {
    authStore.store.phone = authStore.store.phone.slice(0, -1);
  }
  authStore.store.phone = authStore.store.phone.slice(0, 13);
}

function focused(search_type) {
  isLoading.store.isOpen = true;
  if (search_type == "product") {
    productStore.state.isSearchingModal = true;
  } else {
    productStore.state.isAddressModal = true;
  }
}

function clickedModal(click_type, value) {
  if (click_type == "product") {
    router.push(`/flowers/${value}`);
    productStore.state.isSearchingModal = false;
  } else {
    store.searchInput = value;
    productStore.state.isAddressModal = false;
  }
}

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

function showSearchRes() {
  productStore.search.pagination.currentPage += 1;
  productStore.searchProduct("show_more");
}

function checkLocalStorage() {
  const isEmpty = localStorage.getItem("name");
  if (isEmpty) {
    return true;
  }
  return false;
}

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

function changeQuantity(e, id) {
  for (let i = 0; i < useAddToCart.store.products.length; i++) {
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
        useAddToCart.store.totalCount = useAddToCart.store.products?.length;
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

watch(
  () => router.currentRoute.value,
  () => (productStore.state.menu = false)
);

onMounted(() => {
  isMount.value = true;
  productStore.getAllProducts();

  authStore.store.name = localStorage.getItem("name");

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
.router-link-exact-active {
  color: #5c0099;
  font-weight: bold;
}
.category::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.lang_select:hover svg {
  transform: rotate(90deg);
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

@media (max-width: 400px) {
  .menu_drawer {
    min-width: 100% !important;
  }
}

@media (max-width: 350px) {
  .locate {
    font-size: 9px;
  }
}
</style>

<template>
  <div class="fixed top-0 z-50 w-full -mt-[1px]">
    <div
      :class="
        $router.currentRoute.value.name == 'index' ? ']' : 'overflow-hidden'
      "
      class="flex flex-wrap h-[70px]"
    >
      <section class="relative w-full mx-auto">
        <nav class="flex items-center md:hidden h-[76px] bg-white">
          <div
            class="flex items-center justify-between container md:px-10 px-5 mx-auto"
          >
            <div class="flex items-center gap-2">
              <img
                @click="$router.push('/')"
                class="lg:hidden block logo h-[40px] cursor-pointer"
                src="/logo_mobile.svg"
                alt="logo"
              />
              <div>
                <h1>Florify</h1>
                <p class="text-xs">{{$t("easy_use_app")}}</p>
              </div>
            </div>
            <button class="px-[14px] h-9 bg-[#5C0099] text-white rounded-lg">
              {{ $t("download") }}
            </button>
          </div>
        </nav>
        <!-- navbar -->
        <nav class="flex h-[70px] -mt-[1px] justify-between bg-white w-screen">
          <div
            class="container mx-auto xl:px-28 md:px-10 px-5 py-6 flex w-full items-center justify-between"
          >
            <ul
              class="flex justify-between w-full sm:px-4 sm:ml-0 ml-5 sm:mr-0 -mr-5 mx-auto"
            >
              <li class="md:block hidden w-full max-w-fit">
                <router-link to="/">
                  <img
                    class="lg:block hidden logo h-[40px] cursor-pointer"
                    src="../public/icon.svg"
                    alt="logo"
                  />
                  <img
                    class="lg:hidden block logo h-[40px] cursor-pointer"
                    src="../public/logo_mobile.svg"
                    alt="logo"
                  />
                </router-link>
              </li>
              <li class="xl:flex hidden items-center w-full max-w-fit gap-2">
                <img src="@/assets/svg/locate.svg" alt="" />
                <p>{{ $t('city') }}:</p>
                <p class="leading-5 border-b border-black">Ташкент</p>
              </li>
              <li class="relative flex sm:max-w-fit sm:w-auto w-full">
                <img
                  class="sm:-mr-8 -mr-11 z-10"
                  src="@/assets/svg/search.svg"
                  alt=""
                />
                <input
                  v-model="useProduct.search.search"
                  @input="useProduct.searchProduct"
                  @focus="focused('product')"
                  type="search"
                  :placeholder="$t('navbar.search')"
                  class="sm:w-[400px] w-full search_input sm:pl-11 pl-14 md:h-[46px] h-[50px] text-[#454545] text-lg rounded-lg bg-[#F4F7F9] border-none outline-none ring-0"
                />
                <div
                  v-if="useProduct.state.isSearchingModal"
                  v-loading="isLoading.isLoadingType('getSearchProducts')"
                  class="p-6 mt-12 -ml-3 absolute z-[60] w-[400px] bg-white rounded-b-xl"
                >
                  <h1 class="text-xl leading-6 font-medium">{{$t('popular')}}</h1>
                  <div
                    class="space-y-4 mt-6 max-h-[calc(100vh_-_250px)] overflow-hidden overflow-y-auto"
                  >
                    <div
                      v-for="i in useProduct.state.search_products"
                      @click="clickedModal('product', i.id)"
                      class="flex items-center cursor-pointer gap-3 border-b pb-4 border-[#E6E6E6]"
                    >
                      <img
                        class="h-20 w-20 rounded-[10px] object-cover"
                        :src="baseUrlImage + i.images[0]?.image"
                        alt=""
                      />
                      <div class="space-y-1 font-medium">
                        <p class="leading-[21px] text-[#5C0099] text-lg">
                          {{ i.name }}
                        </p>
                        <p class="leading-[19px]">{{ i.id }}</p>
                      </div>
                    </div>
                    <p
                      v-if="
                        useProduct.search.pagination.currentPage <
                        useProduct.search.pagination.total_pages
                      "
                      @click="showSearchRes"
                      class="text-[#5C0099] text-xl leading-6 font-medium"
                    >
                      {{$t('show_all')}} ({{
                        useProduct.search.pagination.total_count -
                        useProduct.search.pagination.currentPage * 10
                      }})
                    </p>
                  </div>
                </div>
              </li>
              <ul
                class="sm:flex hidden cursor-pointer items-center max-w-fit w-full gap-10"
              >
                <li
                  @click="checkAuth"
                  class="sm:flex hidden items-center w-full max-w-fit gap-3"
                >
                  <img src="@/assets/svg/login.svg" alt="" />
                  <p v-if="!isLoading.store.isLogin" class="2xl:block hidden">
                    {{ $t("login") }}
                  </p>
                  <p
                    v-if="isLoading.store.isLogin"
                    class="2xl:block hidden w-[100px] truncate"
                  >
                    {{ isLoading.store.name }}
                  </p>
                </li>
                <li
                  @click="addToCart"
                  class="relative sm:flex hidden cursor-pointer items-center w-full max-w-fit gap-3"
                >
                  <p v-if="useAddToCart.store.totalCount"
                    class="flex items-center justify-center overflow-hidden text-white text-[8px] font-bold h-4 w-4 bg-[red] absolute left-4 -top-1 rounded-full"
                  >
                    {{ useAddToCart.store.totalCount }}
                  </p>
                  <img src="@/assets/svg/cartWhite.svg" alt="" />
                  <p class="2xl:block hidden">{{ $t("basket") }}</p>
                </li>
                <li
                  @click="useProduct.state.menu = true"
                  class="sm:flex hidden cursor-pointer items-center w-full max-w-fit gap-3"
                >
                  <img
                    class="sm:h-6 sm:w-6 sm:p-0 p-2 h-12 w-12"
                    src="@/assets/svg/menu.svg"
                    alt=""
                  />
                  <p class="2xl:block hidden">{{ $t("navbar.all") }}</p>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  </div>
</template>

<script setup>
import {
  useAuthStore,
  useProductsStore,
  useAddToCartStore,
  useLoadingStore,
} from "@/store";

const authStore = useAuthStore();
const isLoading = useLoadingStore();
const useProduct = useProductsStore();
const useAddToCart = useAddToCartStore();
const runtimeConfig = useRuntimeConfig();
const router = useRouter();
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const store = reactive({
  toggle: true,
  lang: false,
});

function focused(search_type) {
  useProduct.searchProduct();
  isLoading.store.isOpen = true;
  if (search_type == "product") {
    useProduct.state.isSearchingModal = true;
  } else {
    useProduct.state.isAddressModal = true;
  }
}

function clickedModal(click_type, value) {
  router.push(`/flowers/${value}`);
  useProduct.state.isSearchingModal = false;
}

function checkAuth() {
  if (!isLoading.store.isLogin) {
    authStore.store.loginModal = true;
  } else {
    router.push("/favorites");
  }
}

// function checkCart() {}

const addToCart = () => {
  useProduct.state.addToProductDrawer = true;
  useAddToCart.getAddToCart();
};

onMounted(() => {
  useAddToCart.store.totalCount = JSON.parse(localStorage.getItem("addToCart"))?.length; 

  // let token;
  // window.addEventListener('storage', () => {
  //   console.log("Local");
  //   token = localStorage.getItem("token");
  //   localStorage.setItem(token);
  // });
});
</script>

<style lang="scss" scoped>
.navbar {
  background-image: url("../assets/images/navbar.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 400px) {
  .logo {
    height: 30px;
  }

  .icon {
    font-size: 18px;
  }

  .cart {
    height: 20px;
    width: 20px;
  }
}
</style>

<template>
  <main class="container">
    <placeholderMain v-if="productStore.state.isLoading" />
    <section>
      <div
        v-show="!productStore.state.isLoading"
        v-for="(i, index) in productStore.showProductById"
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
          v-if="i.product?.length"
          class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5"
        >
          <div
            v-show="index < store.data"
            v-for="(product, index) in i.product"
            class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
              @click="$router.push(`./flowers/${product.id}`)"
              class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
              :src="`${baseUrlImage}${product.image[0]?.image}`"
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
                    :id="product.id"
                    @click="() => addToLike(product.id, 'nolike')"
                    :class="!product.likes?.is_like ? '' : 'hidden'"
                    class="cursor-pointer md:h-6 duration-1000 md:w-6 h-4 w-4"
                    src="@/assets/svg/heart.svg"
                    alt=""
                  />
                  <img
                    @click="() => addToLike(product.id, 'liked')"
                    :id="'id' + product.id"
                    :class="!product.likes?.is_like ? 'hidden' : ''"
                    class="cursor-pointer duration-1000 md:h-6 md:w-6 h-4 w-4"
                    src="@/assets/svg/redHeart.svg"
                    alt=""
                  />
                  <img
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
          v-if="i.product?.length > store.data"
          class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
        >
          {{ $t("home.show_more") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
// import { initFlowbite } from "flowbite";
import { useProductsStore, useAuthStore } from "@/store";

const productStore = useProductsStore();
const runtimeConfig = useRuntimeConfig();
const authStore = useAuthStore();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const store = reactive({
  width: "",
  isLoading: false,
  page: 1,
  allProducts: "",
  data: 8,
});

const getAllProducts = () => {
  store.isLoading = true;
  axios
    .get(baseUrl + `/category`)
    .then((res) => {
      console.log(res);
      store.allProducts = res;
      store.isLoading = false;
    })
    .catch((err) => {
      console.log(err);
    });
};

function addToLike(id, isLiked) {
  document.getElementById(id)?.classList?.toggle("hidden");
  document.getElementById("id" + id)?.classList?.toggle("hidden");
  console.log(isLiked);
  let method = "POST";
  if (isLiked == "nolike") {
    method = "DELETE";
  } else {
    method = "POST";
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
      document.getElementById(id)?.classList?.toggle("hidden");
      document.getElementById("id" + id)?.classList?.toggle("hidden");
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

onMounted(() => {
  getAllProducts();
  // watchEffect(() => {
  //   const image = document.querySelector(".mainSlider");
  //   image.style.transform = `translateX(-${
  //     productStore.state.isCategory * 100
  //   }%)`;
  // });
});
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

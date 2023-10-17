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
            <!-- {{ $t("contacts.contact") }} -->
            Просмотренные товары
          </li>
        </ol>
      </nav>
    </section>
    <h1 class="font-medium text-2xl">Просмотренные товары</h1>
    <!----------------------- Breadcrumb end---------------------------->

    <placeholder-slug v-if="useHistory.store.isLoading" />
    <section v-else>
      <div>
        <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
          <div
            v-for="i in useHistory.store.allHistory"
            :key="i.id"
            class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
          >
            <img
              v-if="i.product?.image?.length"
              @click="$router.push(`./${i.product.name}`)"
              class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
              :src="`${baseUrlImage}${i.product.image[0]?.image}`"
              alt=""
            />
            <div class="md:p-5 p-3">
              <h5
                class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
              >
                {{ i.product.name }}
              </h5>
              <div class="flex justify-between items-center">
                <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                  <span class="md:inline-block hidden"></span>
                  {{ i.product.price }}
                  <span class="sm:inline hidden">{{ $t("home.sum") }}</span>
                </p>
                <div class="flex items-center sm:gap-3 gap-1">
                  <img
                    :id="i.product.id"
                    @click="() => addToLike(i.id, i.product.id, 'nolike')"
                    class="cursor-pointer md:h-6 duration-1000 md:w-6 h-3 w-3"
                    src="@/assets/svg/heart.svg"
                    alt=""
                  />
                  <img
                    @click="() => addToLike(i.id, i.product.id, 'liked')"
                    :id="'id' + i.product.id"
                    class="cursor-pointer hidden duration-1000 md:h-6 md:w-6 h-3 w-3"
                    src="@/assets/svg/redHeart.svg"
                    alt=""
                  />
                  <img
                    class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                    src="@/assets/svg/cart.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <button
              v-if="i.product.length > store.data"
              class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
            >
              {{ $t("home.show_more") }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useProductsStore, useHistoryStore, useAuthStore } from "@/store";

const productStore = useProductsStore();
const useHistory = useHistoryStore();
const authStore = useAuthStore();

const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const store = reactive({
  data: "",
});

function addToLike(productId, id, isLiked) {
  document.getElementById(id)?.classList?.toggle("hidden");
  document.getElementById("id" + id)?.classList?.toggle("hidden");

  let method = "POST";
  if (isLiked == "nolike") {
    method = "POST";
  } else {
    method = "DELETE";
  }
  let product_id = id;
  const client_id = localStorage.getItem("user_id");
  fetch(baseUrl + "/like", {
    method: method,
    body: JSON.stringify({
      client_id,
      product_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (
        res.statusCode === 400 &&
        res.message != "Mahsulot allaqachon sevimlilar ro'yxatiga qo'shilgan!"
      ) {
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

onMounted(() => {
  useHistory.getHistory();
});
</script>

<style lang="scss" scoped></style>

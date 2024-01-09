<template>
  <main
    class="flex gap-32 container mx-auto xl:px-28 md:px-10 px-5 pb-[15rem] mt-[60px]"
  >
    <aside class="text-xl leading-6 space-y-7 whitespace-nowrap">
      <h1 class="text-[#242424] font-bold">Мои заказы</h1>
      <ul class="space-y-7">
        <li>Избранное</li>
        <li>Отзывы на товары</li>
        <li>Личные данные</li>
        <li>Служба поддержки</li>
      </ul>
    </aside>
    <section class="w-full">
      <h1 class="text-2xl font-medium leading-7">Мои заказы</h1>
      <nav>
        <ul class="border-b">
          <li
            class="text-[#5C0099] font-medium text-lg leading-[50px] mt-2 max-w-min whitespace-nowrap border-b-2 border-[#5C0099]"
          >
            Все заказы
          </li>
        </ul>
      </nav>

      <div class="grid grid-cols-2 mt-6 gap-5">
        <div
          v-if="store.isLoading"
          v-for="i in 6"
          class="h-[300px] rounded-[4px] animate-pulse bg-gray-200"
        ></div>
        <div v-else v-for="i in store.orders">
          <div class="bg-white rounded-[4px]">
            <ul
              class="flex items-center justify-between border-b border-[#E6E6E6] p-5"
            >
              <li class="font-medium">#{{ i.id }}</li>
              <li>
                <button
                  v-if="i.status == 'PAID'"
                  class="bg-[#0881781A] px-3 rounded-[4px] py-[6px] text-[#088178]"
                >
                  Выдан покупателю
                </button>
                <button
                  v-else-if="i.status == 'CANCELLED'"
                  @click="
                    $router.push(
                      `/payment?order_id=${i.id}&amount=${i.totalAmount}&status=cancelled`
                    )
                  "
                  class="bg-[#FF61611A] px-3 rounded-[4px] py-[6px] text-[#FF6161]"
                >
                  Отказано
                </button>
                <button
                  v-else
                  @click="
                    $router.push(
                      `/payment?order_id=${i.id}&amount=${i.totalAmount}`
                    )
                  "
                  class="bg-[#FF61611A] px-3 rounded-[4px] py-[6px] text-[#FF6161]"
                >
                  PENDING
                </button>
              </li>
            </ul>
            <ul class="p-5 space-y-5 border-b border-[#E6E6E6]">
              <li class="flex items-center justify-between">
                <p>Сумма заказа:</p>
                <p>{{ i.totalAmount }} сум</p>
              </li>
              <li class="flex items-center justify-between">
                <p>Дата заказа:</p>
                <p>{{ i.createdAt.slice(0, 10) }}</p>
              </li>
              <li class="flex items-center justify-between">
                <p>Дата доставки:</p>
                <p>{{ getOrderData(i.delivery_time) }}</p>
              </li>
              <li class="flex items-center justify-between">
                <p class="border-b border-[#000000] leading-4 text-sm">
                  Электронный чек
                </p>
              </li>
            </ul>
            <div v-if="store.show_more == i">
              <div v-for="i in i.items" class="flex gap-4 p-5 relative">
                <img
                  class="h-[100px] w-[100px] rounded-[4px] object-cover"
                  src="@/assets/images/carousel.png"
                  alt=""
                />
                <div class="space-y-[10px]">
                  <h1 class="pt-[3px] h-10 text-sm leading-[18px] line-clamp-2">
                    {{ i.product?.name }}
                  </h1>
                  <p>{{ i.product?.price }} сум x {{ i.quantity }} шт</p>
                  <button
                    @click="sendCommentModal(i.product?.id)"
                    class="border-b whitespace-nowrap border-[#5C0099] right-5 absolute leading-[19px] text-[#5C0099]"
                  >
                    Оставить отзыв
                  </button>
                </div>
              </div>
            </div>
            <div
              @click="showMore(i)"
              class="flex items-center justify-between cursor-pointer text-sm p-5"
            >
              <p>{{ i.items.length }} товар</p>
              <svg
                :class="store.show_more == i ? 'rotate-180' : ''"
                width="16"
                height="7"
                viewBox="0 0 16 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6.5C7.93442 6.5008 7.86941 6.48786 7.80913 6.46203C7.74885 6.4362 7.69465 6.39804 7.65 6.35L3.15 1.85C2.95 1.65 2.95 1.34 3.15 1.14C3.35 0.939998 3.66 0.939998 3.86 1.14L8.01 5.29L12.15 1.15C12.35 0.949998 12.66 0.949998 12.86 1.15C13.06 1.35 13.06 1.66 12.86 1.86L8.36 6.36C8.26 6.46 8.13 6.51 8.01 6.51L8 6.5Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <el-dialog
      v-if="isMount"
      close-icon="false"
      v-model="store.comment_modal"
      width="30%"
      align-center
      class="rounded"
    >
      <div
        class="flex items-center justify-between h-[58px] px-6 -mx-[30px] -mt-[30px] rounded-t bg-[#F5F5F5]"
      >
        <h1>Мой отзыв</h1>
        <img
          @click="store.comment_modal = false"
          class="cursor-pointer"
          src="@/assets/svg/x.svg"
          alt=""
        />
      </div>
      <form @submit.prevent="sendComment">
        <h1 class="mt-[30px]">Общая оценка</h1>
        <div class="flex items-center sm:justify-center mt-10 mb-8 gap-5">
          <div class="flex items-center justify-center gap-5">
            <div v-for="i in 5">
              <img
                v-show="store.rate >= i"
                class="cursor-pointer"
                @mousemove="store.rate = i"
                src="@/assets/svg/star_yellow.svg"
                alt=""
              />
              <img
                class="cursor-pointer"
                v-show="store.rate < i"
                @mousemove="store.rate = i"
                src="@/assets/svg/star.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <h1>Комментария</h1>
        <el-input
          v-model="store.comment"
          :autosize="{ minRows: 4, maxRows: 8 }"
          type="textarea"
          resize="none"
          class="placeholder-[#565656] mt-3 mb-8"
          placeholder="Напишите отзыв"
          required
        />
        <button
          class="bg-[#F2F4F7] py-4 mt-10 w-full text-center rounded-[10px]"
        >
          Готово
        </button>
        <div class="bg-white h-6 rounded-b -mx-[30px] -mb-[30px]"></div>
      </form>
    </el-dialog>
  </main>
</template>

<script setup>
import axios from "axios";
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));
const isMount = ref(false);
const store = reactive({
  show_more: "",
  orders: "",
  isLoading: true,
  comment_modal: false,
  comment: "",
  rate: 0,
  product_id: 1,
});

const months = {
  uz: [
    "Yanvar",
    "Fevral",
    "Mart",
    "April",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ],
  ru: [
    "Январь",
    "Февраль",
    "Mарта",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
};

function showMore(id) {
  if (store.show_more == id) {
    store.show_more = "";
  } else {
    store.show_more = id;
  }
}

function getOrders() {
  store.isLoading = true;
  const token = localStorage.getItem("token");
  axios
    .get(baseUrl + "/orders", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      store.isLoading = false;
      console.log(res);
      store.orders = res.data;
    })
    .catch((err) => {
      console.log(err);
      store.isLoading = false;
    });
}

function sendCommentModal(id) {
  store.comment_modal = true;
  store.product_id = id;
}

function sendComment() {
  store.comment_modal = false;
  const client_id = localStorage.getItem("user_id");
  const product_id = store.product_id;
  axios
    .post(baseUrl + "/comment", {
      rate: store.rate,
      text: store.comment,
      client_id,
      product_id,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOrderData(delivery_time) {
  delivery_time = delivery_time.split(",");
  const data = delivery_time[0].split("-");
  const month = months.ru[data[1] - 1];
  const str =
    data[0] +
    " " +
    month +
    " " +
    "с" +
    " " +
    delivery_time[1] +
    " " +
    "до" +
    " " +
    delivery_time[2] +
    ", " +
    data[2];
  return str;
}

onMounted(() => {
  isMount.value = true;
  getOrders();
});
</script>

<style lang="scss" scoped></style>

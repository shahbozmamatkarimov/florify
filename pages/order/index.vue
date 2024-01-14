<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-[15rem]">
    <form @submit.prevent="addToPayment" class="grid xl:grid-cols-2 gap-16">
      <div>
        <h1 class="font-semibold sm:text-2xl text-xl py-5">
          {{ $t("order.order") }}
        </h1>
        <ul class="leading-10">
          <li>
            <p class="font-semibold sm:text-2xl text-xl sm:py-5 py-3">
              {{ $t("order.whom") }}
            </p>
            <div
              @click="isFullDetails"
              class="grid grid-cols-2 gap-5 sm:h-[53px]"
            >
              <button
                type="button"
                @click="store.to_whom_bouquet = 'another'"
                :class="
                  store.to_whom_bouquet == 'another'
                    ? 'border-[#5C0099]'
                    : 'border-[#D9D9D9]'
                "
                class="h-full border-2 rounded"
              >
                {{ $t("order.another") }}
              </button>
              <button
                type="button"
                @click="store.to_whom_bouquet = 'myself'"
                :class="
                  store.to_whom_bouquet == 'myself'
                    ? 'border-[#5C0099]'
                    : 'border-[#D9D9D9]'
                "
                class="h-full border-2 rounded"
              >
                {{ $t("order.myself") }}
              </button>
            </div>
          </li>
          <li>
            <h1 class="font-semibold sm:text-2xl text-xl pt-7 pb-1">
              {{ $t("order.your_contact") }}
            </h1>
            <div class="grid grid-cols-2 gap-5">
              <p>{{ $t("order.surname") }} *</p>
              <p>{{ $t("order.name") }} *</p>
            </div>
          </li>
        </ul>
        <div class="grid grid-cols-2 gap-5 sm:h-[53px]">
          <input
            type="text"
            v-model="store.customer_firstname"
            class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
            :placeholder="$t('order.enter_surname')"
            required
          />
          <input
            type="text"
            v-model="store.customer_lastname"
            class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
            :placeholder="$t('order.enter_name')"
            required
          />
        </div>
        <p class="text-[#5C0099] pl-4 py-2">
          {{ $t("order.plase_enter_surname") }}
        </p>
        <p class="py-2">
          {{ $t("order.curyer_info") }}
        </p>
        <h1 class="pt-2 pb-4">{{ $t("order.phone_number") }} *</h1>
        <div class="grid sm:grid-cols-2 gap-5 sm:h-[53px]">
          <input
            type="tel"
            minlength="13"
            maxlength="13"
            v-model="store.customer_phone"
            class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
            placeholder="+998 __ ___-__-__"
            required
          />
        </div>

        <div v-if="store.to_whom_bouquet == 'another'">
          <div>
            <h1 class="font-semibold sm:text-xl text-xl py-5">
              {{ $t("order.receiver_phone") }}
            </h1>
          </div>
          <div class="grid grid-cols-2 pb-2 gap-5">
            <p>{{ $t("order.name") }} *</p>
            <p>{{ $t("order.phone_number") }} *</p>
          </div>

          <div class="grid grid-cols-2 gap-5 sm:h-[53px]">
            <input
              type="text"
              v-model="store.receiver_name"
              class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
              :placeholder="$t('order.enter_name')"
              required
            />
            <input
              type="tel"
              minlength="13"
              maxlength="13"
              v-model="store.receiver_phone"
              class="h-full bg-transparent border-2 border-[#D9D9D9] rounded"
              placeholder="+998 __ ___-__-__"
              required
            />
          </div>
        </div>
        <hr class="my-5" />

        <!------------------------ Yetkazib berish ------------------------------->
        <ul class="leading-10">
          <!-- <li>
            <h1 class="text-2xl font-semibold py-3">Доставка</h1>
          </li>
          <li class="flex items-center">
            <img src="../../assets/svg/location1.svg" alt="" />
            <select
              class="text-[#5C0099] border-none rounded bg-transparent outline-none"
            >
              <option value="1">Ташкент</option>
              <option value="1">Ташкент</option>
              <option value="1">Ташкент</option>
            </select>
          </li> -->
          <li>
            <h1 class="font-semibold text-xl pt-3 pb-5">
              {{ $t("order.address") }} *
            </h1>
            <input
              @input="checkAddress"
              v-model="address.shipping_address"
              type="text"
              class="md:h-14 h-10 w-full bg-transparent placeholder-[#454545] border-2 border-[#D9D9D9] rounded"
              :placeholder="$t('order.enter_address')"
              required
            />
            <p class="text-[#5C0099] pl-4 pb-4">
              {{ $t("order.please_enter_address") }}
            </p>
            <div>
              <ul>
                <li
                  class="grid sm:grid-cols-3 grid-cols-2 ext-gray-700 h-14 -my-3 gap-5"
                >
                  <p>{{ $t("order.office") }}</p>
                  <p>{{ $t("order.enter_address") }}</p>
                  <p class="sm:pt-0 pt-5">{{ $t("order.floor") }}</p>
                </li>
                <li
                  class="grid sm:grid-cols-3 grid-cols-2 sm:pb-0 pb-24 md:h-14 h-10 gap-5"
                >
                  <input
                    type="text"
                    @input="checkAddress"
                    v-model="address.apartment"
                    class="h-full col-span-1 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                  />
                  <input
                    @input="checkAddress"
                    v-model="address.entrance"
                    class="h-full col-span-1 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                    type="text"
                  />
                  <input
                    @input="checkAddress"
                    v-model="address.floor"
                    class="sm:h-full h-10 sm:mt-0 mt-3 sm:col-span-1 col-span-2 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                    type="text"
                  />
                </li>
              </ul>
            </div>
          </li>
          <li class="leading-7 pt-5">
            <h1 class="text-gray-700 py-2">{{ $t("order.comment_curyer") }}</h1>
            <textarea
              v-model="store.comment_for_courier"
              class="h-20 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
            ></textarea>
            <p>
              {{ $t("order.comment_description") }}
            </p>
          </li>
          <li v-show="store.to_whom_bouquet == 'another'">
            <div class="flex items-center gap-5">
              <h1 class="text-xl font-semibold py-2 mb-1">
                {{ $t("order.free_convert") }}
              </h1>
              <img src="@/assets/svg/convert_msg.svg" alt="" />

              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="store.is_message"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C0099]"
                ></div>
              </label>
            </div>
            <div v-show="store.is_message">
              <label for="convert" class="text-gray-700 py-2"
                >{{$t('order.convert_text')}}…</label
              >
              <textarea
                v-model="store.postcard_text"
                id="convert"
                class="h-20 bg-transparent w-full rounded border-2 border-[#D9D9D9]"
                :placeholder="$t('order.convert_placeholder')"
              ></textarea>
            </div>
          </li>
          <li class="pb-7">
            <h1 class="font-semibold text-xl pt-7">
              {{ $t("order.delivery_time") }} *
            </h1>
            <div class="flex pt-1 w-full gap-[23px] items-center">
              <div class="relative w-full -mr-[5px]">
                <img
                  class="absolute z-10 top-[26px] left-3"
                  src="@/assets/svg/calendar.svg"
                  alt=""
                />
                <el-date-picker
                  prefix-icon="false"
                  type="date"
                  @change="checkTime()"
                  v-model="time.date"
                  class="rounded-[10px] bg-transparent"
                  placeholder="DD / MM / YY"
                  format="DD/MM/YYYY"
                />
              </div>
              <div class="relative top-3 w-full time">
                <img
                  class="absolute opacity-40 z-10 top-[22px] left-3"
                  src="@/assets/svg/clock.svg"
                  alt=""
                />
                <div
                  class="flex border-2 border-[#D9D9D9] rounded-[4px] h-[56px]"
                >
                  <el-time-picker
                    @change="checkTime()"
                    v-model="time.time"
                    prefix-icon="false"
                    class="rounded-[10px] !min-w-[80px] max-w-min"
                    placeholder="10:00"
                    format="HH:mm"
                  />
                  <p class="mt-2 -ml-[9px] text-[#454545]">-</p>
                  <el-time-picker
                    @change="checkTime()"
                    v-model="time.time2"
                    prefix-icon="false"
                    class="rounded-[10px] !min-w-[80px] max-w-min -ml-[30px]"
                    placeholder="10:00"
                    format="HH:mm"
                  />
                </div>
              </div>
            </div>
          </li>
          <li v-if="store.delivery_time">
            <div
              class="flex items-center text-lg gap-5 px-5 my-5 rounded text-[#45D469] bg-green-100 h-16"
            >
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00015 10.17L2.53015 6.69995C2.34317 6.51298 2.08957 6.40793 1.82515 6.40793C1.56072 6.40793 1.30712 6.51298 1.12015 6.69995C0.933168 6.88693 0.828125 7.14053 0.828125 7.40495C0.828125 7.53589 0.853914 7.66553 0.904019 7.7865C0.954124 7.90746 1.02756 8.01737 1.12015 8.10995L5.30015 12.29C5.69015 12.68 6.32015 12.68 6.71015 12.29L17.2901 1.70996C17.4771 1.52298 17.5822 1.26938 17.5822 1.00496C17.5822 0.740529 17.4771 0.486933 17.2901 0.299955C17.1032 0.112978 16.8496 0.00793457 16.5851 0.00793457C16.3207 0.00793457 16.0671 0.112978 15.8801 0.299955L6.00015 10.17Z"
                  fill="#45D469"
                />
              </svg>
              <p class="order_address">
                Доставим заказ {{ delivery_data[0] }}
                {{
                  $t("uz") == "Uz"
                    ? months.uz[delivery_data[1] - 1]
                    : months.ru[delivery_data[1] - 1]
                }}
                с {{ delivery_data[2] }} до {{ delivery_data[3] }},
                {{ delivery_data[4] }}
              </p>
            </div>
          </li>
        </ul>
        <h1 class="text-2xl font-semibold my-5">
          {{ $t("order.payment_type") }}
        </h1>
        <div class="grid sm:h-20 sm:grid-cols-2 gap-5">
          <div
            @click="store.payment_type = 'ONLINE'"
            :class="
              store.payment_type == 'ONLINE'
                ? 'ring-2 ring-[#5C0099] bg-transparent'
                : 'bg-[#F1F1F1]'
            "
            class="flex h-20 justify-between items-center cursor-pointer active:ring-2 px-5 py-2 rounded border-2 border-transparent"
          >
            <div>
              <h1 class="py-2">{{ $t("order.onlayn") }}</h1>
              <!-- <div class="flex items-center gap-5">
                <img src="../../assets/svg/humo.svg" alt="" />
                <img src="../../assets/svg/uzcard.svg" alt="" />
              </div> -->
            </div>
            <img
              v-if="store.payment_type == 'ONLINE'"
              src="@/assets/svg/radio_icon.svg"
              alt=""
            />
            <img v-else src="@/assets/svg/radio_icon1.svg" alt="" />
          </div>
          <div
            @click="store.payment_type = 'OFFLINE'"
            :class="
              store.payment_type == 'OFFLINE'
                ? 'ring-2 ring-[#5C0099] bg-transparent'
                : 'bg-[#F1F1F1]'
            "
            class="flex justify-between items-center cursor-pointer h-20 px-5 py-2 rounded border-2 border-transparent"
          >
            <div>
              <h1>{{ $t("order.offline1") }}</h1>
              <p>{{ $t("order.offline2") }}</p>
            </div>
            <img
              v-if="store.payment_type == 'ONLINE'"
              src="@/assets/svg/radio_icon1.svg"
              alt=""
            />
            <img v-else src="@/assets/svg/radio_icon.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="xl:mt-16">
        <div
          class="border-2 sticky top-24 border-[#D9D9D9] rounded-xl sm:p-7 p-4"
        >
          <h1 class="sm:pb-5 pb-3 font-semibold text-2xl">
            {{ $t("order.order_list") }}
          </h1>
          <div class="max-h-[950px] overflow-hidden overflow-y-auto">
            <table class="w-full">
              <tbody class="w-full space-y-4">
                <th
                  v-for="i in useAddToCart.store.products"
                  class="tableImg flex w-full text-start"
                >
                  <img
                    v-if="i.images[0]?.image"
                    class="img sm:w-40 w-20 min-w-[5rem] sm:min-w-[10rem] mr-2 sm:h-32 h-16 object-cover object-top rounded-md"
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
                        class="sm:font-bold font-semibold lg:text-md sm:text-lg text-sm xl:w-[70%] w-[90 %] overflow-hidden"
                      >
                        {{ i.name }}
                      </h1>
                      <img
                        @click="changeQuantity(i.id)"
                        class="cursor-pointer"
                        src="../../assets/svg/x.svg"
                        alt="x"
                      />
                    </div>
                    <p
                      class="price pb-5 font-normal sm:text-md text-xs text-gray-500 sm:pt-2 py-2"
                    >
                      Cтандартний
                    </p>
                    <p
                      class="flex justify-between sm:text-md text-sm w-full absolute bottom-0"
                    >
                      <span class="font-normal"
                        >{{ i.client_quantity }} шт.</span
                      ><span class="font-semibold pr-3">{{ i.price }} сум</span>
                    </p>
                  </div>
                </th>
              </tbody>
            </table>
          </div>
          <hr class="sm:my-5 my-2" />
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
            type="submit"
            :class="is_submit ? '' : 'opacity-50'"
            class="sm:h-16 h-10 sm:my-5 my-2 flex justify-center sm:text-md text-sm items-center w-full font-semibold text-white rounded-xl bg-[#5C0099]"
          >
          {{ $t("order.order") }}
          </button>
          <h1 class="sm:text-md text-sm">
            {{ $t("order.warning") }}
          </h1>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import axios from "axios";
import { useAddToCartStore, useLoadingStore } from "@/store";
const useAddToCart = useAddToCartStore();
const isLoading = useLoadingStore();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const baseUrl = runtimeConfig.public.baseURL;
const baseUrlImage = ref(runtimeConfig.public.baseURL?.slice(0, -3));

const is_submit = ref(false);

const delivery_data = ref("");

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

const store = reactive({
  to_whom_bouquet: "myself",
  customer_firstname: "",
  customer_lastname: "",
  customer_phone: "",
  receiver_name: "",
  receiver_phone: "",
  full_address: "",
  comment_for_courier: "",
  delivery_time: "",
  postcard_text: "",
  payment_type: "ONLINE",
});

const address = reactive({
  shipping_address: "",
  apartment: "",
  entrance: "",
  floor: "",
});

const time = reactive({
  date: "",
  time: "",
  time2: "",
});

function checkAddress() {
  if (address.shipping_address) {
    store.full_address = address.shipping_address;
    store.full_address +=
      (" ", address.apartment, address.entrance, address.floor);
    isFullDetails();
  }
}

function checkTime() {
  console.log("time");
  if (time.date && time.time && time.time2) {
    const newTime = new Date(time.time);
    const newTime2 = new Date(time.time2);
    let newDate = new Date(time.date);
    newDate = [
      newDate.getDate(),
      newDate.getMonth() + 1,
      newDate.getFullYear(),
    ].join("-");
    store.delivery_time = [
      newDate,
      [newTime.getHours(), ":", newTime.getMinutes()].join(""),
      [newTime2.getHours(), ":", newTime2.getMinutes()].join(""),
    ].join();
    console.log(store.delivery_time);
    getDeliveryDate();
    isFullDetails();
  }
}

function getDeliveryDate() {
  const delivery_time = store.delivery_time.split(",");
  const day = delivery_time[0].split("-")[0];
  const month = delivery_time[0].split("-")[1];
  const year = delivery_time[0].split("-")[2];
  const start = delivery_time[1];
  const end = delivery_time[2];
  delivery_data.value = [day, month, start, end, year];
}

function isFullDetails() {
  is_submit.value = false;
  if (
    store.customer_firstname &&
    store.customer_lastname &&
    store.customer_phone &&
    store.delivery_time
  ) {
    if (store.full_address) {
      if (store.delivery_time) {
        if (store.to_whom_bouquet != "myself") {
          if (store.receiver_name && store.receiver_phone) {
            is_submit.value = true;
          }
        } else {
          is_submit.value = true;
        }
      }
    }
  }
  if (is_submit.value) {
  } else {
    return false;
  }
}

function addToPayment() {
  const token = localStorage.getItem("token");
  if (is_submit.value) {
    const client_id = isLoading.store.salesman_id;
    let items = [];
    const orders = JSON.parse(localStorage.getItem("addToCart"));
    for (let i of orders) {
      items.push({ product_id: i.id, quantity: i.client_quantity });
    }
    console.log(items);
    console.log(store);
    axios
      .post(
        baseUrl + "/orders",
        { ...store, client_id, items },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        const order_id = res.data?.data?.order.id;
        router.push(
          `/payment?order_id=${order_id}&amount=${useAddToCart.store.total_price}`
        );
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function changeQuantity(id) {
  for (let i = 0; i < useAddToCart.store.products.length; i++) {
    if (useAddToCart.store.products[i].id == id) {
      useAddToCart.store.products?.splice(i, 1);
      localStorage.setItem(
        "addToCart",
        JSON.stringify(useAddToCart.store.products)
      );
    }
  }
  useAddToCart.totalPrice();
}

onMounted(() => {
  useAddToCart.getAddToCart();
  window.addEventListener("input", () => {
    isFullDetails();
  });
});
</script>

<style lang="scss" scoped>
@media (max-width: 350px) {
  .tableImg {
    display: block;
  }

  .img {
    height: 150px;
    width: 100%;
  }

  .pl {
    padding-left: 0;
    padding-top: 7px;
  }
  .price {
    padding-bottom: 25px;
    padding-top: 5px;
  }
}
</style>

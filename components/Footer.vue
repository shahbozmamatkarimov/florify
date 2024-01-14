<template>
  <footer class="bg-[#FFFFFF] pt-20">
    <div
      class="footer grid lg:grid-cols-6 grid-cols-4 overflow-hidden container mx-auto xl:px-28 md:px-10 px-5"
    >
      <div class="lg:block hidden">
        <router-link to="/">
          <img class="w-28" src="../assets/svg/footerLogo.svg" alt="logo" />
        </router-link>
      </div>
      <ul>
        <li>О сервисе</li>
        <li>
          <router-link to="/about"> {{$t("about")}} </router-link>
        </li>
        <li>
          <router-link to="/contact"> {{$t("contact")}} </router-link>
        </li>
        <li>
          <router-link to="/quality_assurance"> {{$t("quality_assurance") }} </router-link>
        </li>
        <li
          v-for="(i, index) in productStore.state.categories"
          @click="productStore.getOneProduct(i.id, index + 1)"
        >
          <router-link to="/about">
            <p
              v-if="$t('uz') == 'Уз'"
              class="truncate w-[90%] md:text-lg text-sm leading-[21px]"
            >
              {{ i.ru }}
            </p>
            <p
              v-else
              class="truncate w-[90%] md:text-lg text-sm leading-[21px]"
            >
              {{ i.uz }}
            </p>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>Вопросы</li>
        <li>Вопросы и ответы</li>
        <li>Доставка</li>
        <li>Оплата</li>
        <li>Скидки</li>
      </ul>
      <ul>
        <li>Сотрудничество</li>
        <li>Партнёрство</li>
        <li>Корпоративным клиентам</li>
      </ul>
      <div class="lg:block hidden"></div>
      <ul class="text-end contact">
        <li>Свяжитесь с нами</li>
        <li>
          <a :href="`tel:${store.contacts.phone}`">{{
            store.contacts.phone
          }}</a>
        </li>
        <li>
          <a :href="`tel:${store.contacts.additional_phone}`">{{
            store.contacts.additional_phone
          }}</a>
        </li>
        <li class="break-words"><a :href="`mailto:${store.contacts.email}`">{{
          store.contacts.email
        }}</a></li>
      </ul>
    </div>
    <div class="container mx-auto overflow-hidden xl:px-28 md:px-10 px-5">
      <p class="flex justify-between items-center">
        <span></span>
        <span class="font-bold pt-10 text-end">
          Узбекистан, город Ташкент, Мирабадский район, пр. Н. Назарбаева, 193,
          LES OFFICE, почтовый индекс 050013 <br />
          ТОО "Florify.uz (Флорифай.уз)"</span
        >
      </p>
      <ul class="flex items-center gap-5 float-right py-10">
        <li>
          <a
            :href="store.contacts.facebook"
            target="_blank"
            class="flex items-center justify-center rounded-full h-14 w-14 bg-[#FFA500] p-3"
          >
            <img src="../assets/networks/facebook.svg" alt="" />
          </a>
        </li>
        <li class="cursor-pointer">
          <a
            :href="store.contacts.instagramm"
            target="_blank"
            class="flex items-center justify-center rounded-full h-14 w-14 bg-[#FFA500] p-3"
          >
            <img src="../assets/networks/instagram.svg" alt="" />
          </a>
        </li>
        <li>
          <a
            :href="store.contacts.telegram"
            target="_blank"
            class="flex items-center justify-center rounded-full h-14 w-14 bg-[#FFA500] p-3"
          >
            <img src="../assets/networks/telegram.svg" alt="" />
          </a>
        </li>
      </ul>
      <hr class="w-full" />
      <p class="text-end py-5 font-bold">Заказывайте через приложение</p>
      <div
        class="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-center pb-10"
      >
        <ul class="flex gap-10">
          <li class="underline whitespace-nowrap">Персональные данные</li>
          <li class="underline whitespace-nowrap">
            Политика конфиденциальности
          </li>
          <li class="underline whitespace-nowrap">Публичная оферта</li>
          <li class="underline whitespace-nowrap">Согласие пользователя</li>
        </ul>
        <div class="flex items-center gap-5">
          <img src="../assets/svg/appstore.svg" alt="app store" />
          <img src="../assets/svg/googleplay.svg" alt="google play" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useProductsStore } from "@/store";
import axios from "axios";

const runtimeconfig = useRuntimeConfig();
const baseUrl = runtimeconfig.public.baseURL;

const store = reactive({
  contacts: {},
});

axios
  .get(baseUrl + "/socialNetwork")
  .then((res) => {
    console.log(res);
    if (res.data.statusCode == 200) {
      const contact_data = res.data?.data?.social_networks;
      console.log(contact_data);
      for (let i of contact_data) {
        console.log(i.name);
        console.log(i.link);
        store.contacts[i.name] = i.link;
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });

const productStore = useProductsStore();
</script>

<style lang="scss" scoped>
.footer ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  li:nth-child(1) {
    font-weight: 700;
    text-decoration: none;
  }

  li {
    text-decoration: underline;
    line-height: 19.2px;
  }
}

.contact li {
  text-decoration: none !important;
}
</style>

<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-20">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            @click="$router.push('/')"
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
            {{ $t("contacts.home") }}
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            {{ $t("contacts.contact") }}
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <section>
      <h1 class="text-3xl font-semibold pb-10 text-[#212121]">
        {{ $t("contacts.contact") }}
      </h1>
      <div class="grid md:grid-cols-2">
        <img
          class="w-full object-cover"
          src="../../assets/svg/map.svg"
          alt="map"
        />
        <div class="xl:px-10 px-5 pt-5 border-y">
          <h1
            class="2xl:text-2xl lg:text-xl sm:text-lg text-md text-[#242424] font-semibold"
          >
            {{ $t("contacts.description") }}
          </h1>
          <div
            class="grid grid-cols-2 lg:-mb-5 md:-mb-40 sm:gap-0 gap-2 2xl:text-lg lg:text-md sm:text-sm text-xs lg:py-10 py-5"
          >
            <ul>
              <li
                class="2xl:mb-7 lg:mb-5 sm:mb-1 sm:min-h-[4rem] min-h-[3.5rem]"
              >
                {{ $t("contacts.address") }}
              </li>
              <li
                class="2xl:mb-7 lg:mb-5 sm:mb-1 sm:min-h-[4rem] min-h-[3.5rem]"
              >
                {{ $t("contacts.phone") }}
              </li>
              <li
                class="2xl:mb-7 lg:mb-5 sm:mb-1 sm:min-h-[4rem] min-h-[3.5rem]"
              >
                {{ $t("contacts.email") }}
              </li>
            </ul>
            <ul>
              <li
                class="sm:min-h-[4rem] min-h-[3.5rem] 2xl:mb-7 lg:mb-5 sm:mb-1"
              >
                123376, г. Ташкент, ул. Каримова, 1 Florify M.CH.J
              </li>
              <li
                class="sm:min-h-[4rem] min-h-[3.5rem] 2xl:mb-7 lg:mb-5 sm:mb-1"
              >
                <p>
                  <a :href="`tel:${store.contacts.phone}`">{{
                    store.contacts.phone
                  }}</a>
                </p>
                <p>
                  <a :href="`tel:${store.contacts.additional_phone}`">{{
                    store.contacts.additional_phone
                  }}</a>
                </p>
              </li>
              <li class="sm:h-16 h-14 2xl:mb-7 lg:mb-5 sm:mb-1">
                <a :href="`mailto:${store.contacts.email}`">{{
                  store.contacts.email
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Contact us",
  meta: [{ name: "florify", content: "contact us" }],
});

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
        store.contacts[i.name] = i.link;
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<style lang="scss" scoped></style>

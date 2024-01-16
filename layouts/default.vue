<template>
  <div>
    <header>
      <Header />
    </header>
    <nav>
      <Navbar />
    </nav>
    <div :class="$router.currentRoute.value.name == 'index'?'mt-[160px]':'mt-[90px]'" class="overflow-hidden mb:pb-0 pb-20 md:mt-[94px] sm:pb-0 max-w-screen container mx-auto">
      <!-- <section
        v-if="$router.currentRoute.value.fullPath == '/'"
        class="container mx-auto xl:px-28 md:px-10 px-5 pb-5"
      >
        <div
          class="filter font-medium text-[#454545cf] flex sm:md:gap-7 gap-5 py-3 border-b-2"
        >
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.whom')"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <el-select v-model="value" class="m-2" placeholder="Select">
              <el-option
                class="max-w-fit"
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.occasion')"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.color')"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
          <div class="flex items-center">
            <a-select
              class="placeholder-[#242424] ring-0"
              ref="select"
              v-model:value="value1"
              :placeholder="$t('home.price')"
              @change="handleChange"
            >
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
            <img class="-ml-[22px]" src="../assets/svg/selectIcon.svg" alt="" />
          </div>
        </div>
      </section> -->
      <slot />
    </div>
    <Footer class="sm:block hidden" />
    <MobileFooter class="sm:hidden block" />

    <div
      @click="closeModal"
      v-if="isLoading.store.isOpen"
      class="absolute top-0 left-0 min-h-screen min-w-full"
    ></div>
  </div>
</template>

<script setup>
import { useLoadingStore, useProductsStore } from "@/store";

const isLoading = useLoadingStore();
const useProduct = useProductsStore();
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

const value1 = ref([1, 2, 3, 4, 5, 6, 7]);
const value = ref("Whom");

function closeModal() {
  isLoading.store.isOpen = false;
  useProduct.state.isSearchingModal = false;
  useProduct.state.isAddressModal = false;
}

function handleChange() {
  console.log("hello world");
}
</script>

<style lang="scss" scoped></style>

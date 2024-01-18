<template>
  <div>
    <header>
      <Header />
    </header>
    <nav>
      <Navbar />
    </nav>
    <div
      :class="
        $router.currentRoute.value.name == 'index' ? 'mt-[160px]' : 'mt-[90px]'
      "
      class="minlayout overflow-hidden mb:pb-0 pb-20 md:mt-[94px] sm:pb-0 max-w-screen container mx-auto"
    >
      <slot />
    </div>
    <Footer class="sm:block hidden" />
    <MobileFooter class="sm:hidden block" />

    <div
      @click="closeModal"
      v-if="isLoading.store.isOpen"
      class="fixed top-0 left-0 z-40 min-h-screen min-w-full"
    ></div>
  </div>
</template>

<script setup>
import { useLoadingStore, useProductsStore } from "@/store";

const isLoading = useLoadingStore();
const useProduct = useProductsStore();
const router = useRouter();

function closeModal() {
  isLoading.store.isOpen = false;
  useProduct.state.isSearchingModal = false;
  useProduct.state.isAddressModal = false;
}
watch(
  () => router.currentRoute.value.name,
  () => {
    const layout = document.querySelector(".minlayout");
    layout.scrollTo(0, 0);
  }
);
watch(
  () => router.currentRoute.value.query.page,
  () => {
    const layout = document.querySelector(".minlayout");
    layout.scrollTo(0, 0);
  }
);
</script>

<style lang="scss" scoped></style>

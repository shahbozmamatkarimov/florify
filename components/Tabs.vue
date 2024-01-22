<template>
  <aside
    class="md:block flex gap-3 md:mt-0 -mt-20 overflow-hidden overflow-x-auto md:mb-0 mb-6 text-xl leading-6 md:space-y-7 whitespace-nowrap"
  >
    <p>
      <router-link class="truncate" to="/orders">{{ $t("navbar.orders") }}</router-link>
    </p>
    <p>
      <router-link class="truncate" to="/favorites">{{ $t("navbar.favorites") }}</router-link>
    </p>
    <!-- <p>Отзывы на товары</p> -->
    <p>
      <router-link class="truncate" to="/private_info">{{ $t("private_info") }}</router-link>
    </p>
    <p class="truncate">{{ $t('get_help') }}</p>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #242424;
  font-weight: bold;
}
</style>

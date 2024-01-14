<template>
  <footer
    class="flex items-center bg-white border-t border-black/5 w-full -mb-2 fixed bottom-0 h-[70px] rounded-t-xl"
  >
    <ul class="flex items-center justify-between w-full">
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/"
        >
          <img class="active" src="@/assets/footer/logo.svg" alt="" />
          <img class="_active hidden h-6 w-6 mb-1 mt-1.5" src="@/assets/footer/_logo.svg" alt="" />
          <p class="text-[10px] leading-3">Asosiy</p>
        </router-link>
      </li>
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/order"
        >
          <img class="active" src="@/assets/footer/cart.svg" alt="" />
          <img class="_active hidden" src="@/assets/footer/_cart.svg" alt="" />
          <p class="text-[10px] leading-3">Savatcha</p>
        </router-link>
      </li>
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/favorites"
        >
          <img class="active" src="@/assets/footer/heart.svg" alt="" />
          <img class="_active hidden" src="@/assets/footer/_heart.svg" alt="" />
          <p class="text-[10px] leading-3">Tanlanganlar</p>
        </router-link>
      </li>
      <li class="flex flex-col gap-[2px] items-center justify-center w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/profile"
        >
          <img class="active" src="@/assets/footer/profile.svg" alt="" />
          <img class="_active hidden" src="@/assets/footer/_profile.svg" alt="" />
          <p class="text-[10px] leading-3">Profil</p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #5C0099;
  .active {
    display: none;
  }
  ._active {
    display: block;
  }
}
</style>

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
          <img src="@/assets/footer/logo.svg" alt="" />
          <p class="text-[10px] leading-3">Asosiy</p>
        </router-link>
      </li>
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/order"
        >
          <img src="@/assets/footer/cart.svg" alt="" />
          <p class="text-[10px] leading-3">Savatcha</p>
        </router-link>
      </li>
      <li class="w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/favorites"
        >
          <img src="@/assets/footer/heart.svg" alt="" />
          <p class="text-[10px] leading-3">Tanlanganlar</p>
        </router-link>
      </li>
      <li class="flex flex-col gap-[2px] items-center justify-center w-[75px]">
        <router-link
          class="flex flex-col gap-[2px] items-center justify-center"
          to="/profile"
        >
          <img src="@/assets/footer/profile.svg" alt="" />
          <p class="text-[10px] leading-3">Profil</p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>

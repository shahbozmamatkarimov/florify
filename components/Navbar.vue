<template>
  <div class="navbar container mx-auto xl:px-20 md:px-10 px-5 mt-[70px]">
    <div class="grid grid-cols-5 sm:py-5 py-3 sm:gap-6 gap-2">
      <form class="items-center grid md:grid-cols-3 grid-cols-5 sm:gap-6 gap-2 relative md:col-span-3 col-span-5">
        <div class="flex items-center relative md:col-span-2 col-span-4">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <img class="location" src="../assets/svg/location.svg" alt="" />
          </div>
          <input
            type="text"
            id="input-group-1"
            class="border md:h-14 h-10 border-gray-300 placeholder-gray-800 md:text-lg rounded-xl outline-none block w-full pl-12 p-2.5"
            placeholder="Укaжитe адрес доставки"
            required
          />
        </div>
        <button
          class="locate md:h-14 h-10 text-center whitespace-nowrap flex items-center justify-center bg-[#5C0099] text-white rounded-xl"
        >
          Показать
        </button>
      </form>
      <form class="relative md:col-span-2 col-span-full w-full">
        <input
          type="search"
          class="border md:h-14 h-10 border-gray-300 placeholder-gray-800 md:text-lg rounded-xl outline-none block w-full p-2.5"
          placeholder="Цветы и букеты"
          required
        />
        <button
          type="submit"
          class="flex justify-center items-center absolute top-0 right-0 h-full p-2.5 font-medium bg-[#F3F3F3] rounded-r-xl sm:w-16 w-10"
        >
          <i class="bx bx-search text-[#545454] sm:text-2xl text-lg"></i>
        </button>
      </form>
    </div>
    <div>
      <ul class="flex gap-6 py-3 md:pr-0 pr-10 overflow-hidden overflow-x-auto">
        <li
          class="font-bold text-[#5C0099] cursor-pointer hover:text-[#5C0099]"
        >
          Все
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          Букеты
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          Подарки
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          Букет невесты
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          Композиции
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          ТОП 10
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          <i class="bx bx-show px-1"></i>Вы смотрели
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          Мои заказы
        </li>
        <li class="cursor-pointer whitespace-nowrap hover:text-[#5C0099]">
          Избранное
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .navbar,
  input {
    font-size: 12px;
  }

  input,
  .locate {
    height: 32px;
    border-radius: 10px;
  }

  .location {
    height: 15px;
  }
}

@media (max-width: 350px) {
  .locate {
    font-size: 9px;
  }
}
</style>

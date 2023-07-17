<template>
  <main class="container mx-auto xl:px-20 md:px-10 px-5 pb-20">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
            Главная
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Контакты
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <section>
      <h1 class="text-3xl font-semibold pb-10 text-[#212121]">Контакты</h1>
      <div class="grid grid-cols-2">
        <img
          class="h-[490px] w-full object-cover"
          src="../../assets/svg/map.svg"
          alt="map"
        />
        <div class="px-10 py-5 border-y">
          <h1 class="text-2xl text-[#242424] font-semibold">
            Мы работаем 24 часа в сутки, без выходных
          </h1>
          <div class="grid grid-cols-2 py-10">
            <ul>
              <li class="mb-7 h-16 text-lg overflow-hidden">
                Юридический адрес
              </li>
              <li class="mb-7 h-16 text-lg overflow-hidden">Номер телефона</li>
              <li class="mb-7 h-16 text-lg overflow-hidden">
                Электронная почта
              </li>
            </ul>
            <ul>
              <li class="h-16 mb-7 text-lg overflow-hidden">
                123376, г. Ташкент, ул. Каримова, 1
              </li>
              <li class="h-16 mb-7 text-lg overflow-hidden">
                <p>+998 (88) 111 02 11</p>
                <p>+998 (95) 888 58 58</p>
              </li>
              <li class="h-16 mb-7 text-lg overflow-hidden">
                customercare@florify.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>

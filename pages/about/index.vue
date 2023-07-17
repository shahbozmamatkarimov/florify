<template>
  <main class="container mx-auto xl:px-20 md:px-10 px-5">
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
            О нас
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <!----------------------- section 1 ----------------------------->
    <section class="w-[65%]">
      <h1 class="header">О компании</h1>
      <p>
        Международный магазин цветов с доставкой флорифай.уз был основан в 2023
        году. Сегодня наша сеть объединяет более 700 цветочных салонов в России
        и тысячи салонов в странах ближнего и дальнего зарубежья. За время
        работы нашими клиентами стали более полутора миллионов человек из 150
        стран мира.
      </p>
      <h1>Доставили более 200 000 букетов</h1>
      <p>
        Мы сделали всё для того, чтобы заказ букетов и цветочных композиций был
        для вас максимально удобным. Заказы принимаются на нашем интернет-сайте,
        в чате, в Skype, по электронной почте и по телефонам: +998 (88) 111 02
        11, +998 (95) 888 58 58, в сотнях цветочных магазинах-партнёрах по
        Узбекистан.
      </p>
      <img class="mt-5 w-full object-cover rounded-xl h-[460px] overflow-hidden" src="../../assets/about/image1.png" alt="img" />
      <h1>Наш ассортимент: цветы...</h1>
      <p>
        В нашем ассортименте — букеты и цветочные композиции, приуроченные к
        любому поводу, отражающие самые разнообразные вкусовые пристрастия. У
        нас всегда есть из чего выбрать: только по Узбекистан мы доставляем
        свыше 300 различных композиций. Мы готовы сделать для вас всё, так или
        иначе связанное с живыми цветами: от доставки букетов до флористического
        оформления любых интерьеров и разработки цветочного стиля компании.
      </p>
      <div class="grid grid-cols-2 overflow-hidden h-[320px] gap-5 mt-5">
        <img class="h-full w-full object-cover rounded-xl" src="../../assets/about/image2.png" alt="img" />
        <img class="h-full w-full object-cover rounded-xl" src="../../assets/about/image3.png" alt="img" />
      </div>
      <h1>Заказывать у нас безопасно</h1>
      <p>
        Мы гарантируем полную конфиденциальность информации о ваших заказах и
        безопасность ваших интернет-платежей. Мы первый интернет-магазин,
        прошедший сертификацию на соответствие стандарту защиты информации
        платёжных карт PCI DSS. Обратившись во Флорифай.уз, вы можете быть
        уверены в абсолютной безопасности и конфиденциальности, ведь мы сделали
        для этого всё необходимое.
      </p>
      <img class="mt-5 w-full object-cover rounded-xl h-[460px] overflow-hidden" src="../../assets/about/image4.png" alt="img">

      <div class="pb-20">
        <h1>Мaгaзинaм</h1>
        <div class="grid grid-cols-3 px-10 border border-[#D9D9D9] rounded-xl h-[130px] items-center">
            <ul class="leading-10 col-span-2">
                <li class="text-[#242424] font-semibold text-xl">Пoлучaйтe нoвых клиeнтoв бeз влoжeний!</li>
                <li class="text-[#242424]">Бecплaтнaя рeгиcтрaция и рaзмeщeниe тoвaрoв</li>
            </ul>
            <button class="h-16 w-[244px] border border-[#242424] rounded-xl text-[#242424]">Пoпрoбoвaть бecплaтнo</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
h1{
    font-weight: 600;
    font-size: 24px;
    margin: 20px 0
}

.header{
    font-size: 32px;
    margin-top: -10px;
}
</style>

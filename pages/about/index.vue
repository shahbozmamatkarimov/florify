<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li @click="$router.push('/')"
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
            {{ $t("main") }}
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            {{ $t("about") }}
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <!----------------------- section 1 ----------------------------->
    <section class="main lg:w-[848px] w-full">
      <h1 class="header">{{ $t("_about.title1") }}</h1>
      <p>{{ $t("_about.about1") }}</p>
      <h1>{{ $t("_about.title2") }}</h1>
      <p>{{ $t("_about.about2") }}</p>
      <img
        class="img1 mt-5 w-full object-cover rounded-xl lg:h-[460px] md:h-[400px] sm:h-[350px] h-[300px] overflow-hidden"
        src="../../assets/about/image1.png"
        alt="img"
      />
      <h1>{{ $t("_about.title3") }}</h1>
      <p>{{ $t("_about.about3") }}</p>
      <div class="img2 grid grid-cols-2 sm:gap-5 gap-2 mt-5">
        <img
          class="lg:h-[320px] md:h-[260px] sm:h-[200px] h-[180px] w-full object-cover rounded-xl"
          src="../../assets/about/image2.png"
          alt="img"
        />
        <img
          class="lg:h-[320px] md:h-[260px] sm:h-[200px] h-[180px] w-full object-cover rounded-xl"
          src="../../assets/about/image3.png"
          alt="img"
        />
      </div>
      <h1>{{ $t("_about.title4") }}</h1>
      <p>{{ $t("_about.about4") }}</p>
      <img
        class="img1 mt-5 w-full object-cover rounded-xl lg:h-[460px] md:h-[400px] sm:h-[350px] h-[300px] overflow-hidden"
        src="../../assets/about/image4.png"
        alt="img"
      />

      <!-- <div class="pb-20">
        <h1>Мaгaзинaм</h1>
        <div
          class="shop grid grid-cols-3 md:px-10 px-5 border border-[#D9D9D9] rounded-xl lg:h-[130px] h-[100px] items-center"
        >
          <ul class="leading-10 col-span-2">
            <li class="text-[#242424] font-semibold lg:text-xl">
              Пoлучaйтe нoвых клиeнтoв бeз влoжeний!
            </li>
            <li class="text-[#242424] lg:text-md text-sm">
              Бecплaтнaя рeгиcтрaция и рaзмeщeниe тoвaрoв
            </li>
          </ul>
          <button
            class="lg:h-16 sm:h-12 h-10 lg:text-md text-sm lg:w-[244px] w-[190px] border border-[#242424] rounded-xl text-[#242424]"
          >
            Пoпрoбoвaть бecплaтнo
          </button>
        </div>
      </div> -->
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  font-size: 24px;
  margin: 20px 0;
}

.main p,
.main h1 {
  color: #242424;
}

.header {
  font-size: 32px;
  margin-top: -10px;
}

@media (max-width: 650px) {
  .shop ul {
    grid-column: span 3 / span 3;
  }

  .shop {
    height: 180px;
    width: 416px;
  }
}

@media (max-width: 768px) {
  .header {
    font-size: 25px;
  }

  h1 {
    font-size: 18px;
    margin: 15px 0;
  }

  p {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .shop {
    height: 180px;
    width: 100%;
    padding: 0 10px;
  }

  .shop li,
  .shop button {
    font-size: 13px;
  }

  .img1 {
    height: 250px;
  }

  .img2 img {
    height: 150px;
  }
}

@media (max-width: 400px) {
  .img1 {
    height: 200px;
  }

  .img2 img {
    height: 120px;
  }
}

@media (max-width: 320px) {
  .shop ul {
    line-height: normal;
  }

  .shop li:nth-child(1) {
    margin-bottom: 10px;
  }

  .img1 {
    height: 200px;
  }

  .img2 img {
    height: 100px;
  }
}
</style>

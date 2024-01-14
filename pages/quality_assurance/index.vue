<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5">
    <!----------------------- Breadcrumb ---------------------------->
    <section>
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li @click="$router.push('/')"
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
          {{$t("main")}}
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
            {{$t("quality.title1")}}
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <!----------------------- section 1 ----------------------------->
    <section class="main md:w-[700px]">
      <h1 class="header">{{$t("quality.title1")}}</h1>
      <p>{{$t("quality.about1")}}</p>
      <h1>{{$t("quality.title2")}}</h1>
      <p>
        {{$t("quality.about2")}}
      </p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image1.png"
        alt="img"
      />
      <h1>{{$t("quality.title3")}}</h1>
      <p>{{$t("quality.about3[0]")}}</p>
      <br />
      <p>{{$t("quality.about3[1]")}}</p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image2.png"
        alt="img"
      />
      <h1>{{$t("quality.title4")}}</h1>
      <p>{{$t("quality.about4[0]")}}</p>
      <br />
      <p>{{$t("quality.about4[1]")}}</p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image3.png"
        alt="img"
      />

      <h1>{{$t("quality.title5")}}</h1>
      <p>{{$t("quality.about5")}}</p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image4.png"
        alt="img"
      />

      <h1>{{$t("quality.title6")}}</h1>
      <p>{{$t("quality.about6")}}</p>
      <img
        class="mt-5 object-cover rounded-xl"
        src="../../assets/quality_assurance/image5.png"
        alt="img"
      />
    </section>

    <!-- <section>
      <div class="pb-20 lg:w-[848px] w-full">
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
      </div>
    </section> -->
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

img {
  width: 416px;
  height: 300px;
  border-radius: 12px;
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
    font-size: 16px;
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

  img {
    width: 250px;
    height: 200px;
    border-radius: 12px;
  }
}

@media (max-width: 320px) {
  .shop ul {
    line-height: normal;
  }

  .shop li:nth-child(1) {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <main class="pb-20">
    <!----------------------- Breadcrumb ---------------------------->
    <section class="container mx-auto xl:px-28 md:px-10 px-5">
      <nav class="flex py-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            class="inline-flex cursor-pointer items-center font-semibold text-[#5C0099] hover:text-blue-600"
          >
            {{ $t("main") }}
          </li>
          <li>/</li>
          <li
            class="ml-1 cursor-pointer font-medium text-gray-700 hover:text-blue-600 md:ml-2"
          >
          {{$t("delivery.title1")}}
          </li>
        </ol>
      </nav>
    </section>
    <!----------------------- Breadcrumb end---------------------------->

    <!----------------------- section 1 ---------------------------->

    <section>
      <div class="container mx-auto xl:px-28 md:px-10 px-5">
        <h1 class="header">{{$t("delivery.title1")}}</h1>
        <p class="lg:w-[829px]">
          {{$t("delivery.about1")}}
        </p>
      </div>
      <div class="bg-[#b058eb2c]">
        <div class="container mx-auto xl:px-28 md:px-10 px-5 pt-1 pb-8 my-5">
          <h1>{{$t("delivery.title2")}}</h1>
          <div class="flex sm:gap-12">
            <div class="flex flex-col gap-5 w-[795px]">
              <p>
                {{$t("delivery.about2[0]")}}
              </p>
              <p class="text-[#5C0099]">{{$t("delivery.about2[1]")}}</p>
              <p class="-mr-10">{{$t("delivery.about2[2]")}}</p>
              <p class="text-[#5C0099] underline">{{$t("delivery.about2[3]")}}</p>
              <p>{{$t("delivery.about2[4]")}}</p>
            </div>
            <div>
              <svg
                class="ml-5"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.8215 0.561359L33.6733 20.2015L50.439 30.8211L30.7989 33.6729L20.1793 50.4387L17.3275 30.7985L0.561749 20.1789L20.2019 17.3271L30.8215 0.561359Z"
                  fill="#AC7EC9"
                />
              </svg>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5068 0.365936L21.3108 12.7897L31.9163 19.5073L19.4926 21.3112L12.775 31.9167L10.971 19.493L0.365509 12.7754L12.7892 10.9714L19.5068 0.365936Z"
                  fill="#AC7EC9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container md:flex w-full gap-5 mx-auto xl:px-28 md:px-10 px-5 pt-1 pb-8 my-5"
      >
        <div
          class="bg-green-100 rounded-xl p-7 sm:w-[540px] lg:text-md text-sm md:pt-0 md:mt-0 pt-1 xl:min-w-[540px]"
        >
          <h1>{{$t("delivery.title3")}}</h1>
          <div>
            <p>{{$t("delivery.about3[0]")}}</p>
            <p>
              <br />{{$t("delivery.about3[1]")}}</p>
          </div>
        </div>
        <div
          class="bg-orange-100 rounded-xl p-7 sm:w-[540px] lg:text-md text-sm md:pt-0 md:mt-0 mt-5 pt-1 xl:min-w-[540px]"
        >
          <h1>{{$t("delivery.title4")}}</h1>
          <div>
            <p>{{$t("delivery.about4[0]")}}</p>
            <p>
              <br />{{$t("delivery.about4[1]")}}</p>
          </div>
        </div>
      </div>

      <!-------------  -------------->
      <div class="container mx-auto xl:px-28 md:px-10 px-5 -mt-5">
        <h1>{{$t("delivery.title5")}}</h1>
        <p class="lg:w-[760px]">{{$t("delivery.about5")}}</p>
      </div>
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

.header {
  font-size: 32px;
  margin-top: -10px;
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
</style>

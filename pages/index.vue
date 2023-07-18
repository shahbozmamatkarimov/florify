<template>
  <main class="container mx-auto xl:px-28 md:px-10 px-5 pb-5">
    <section>
      <div
        class="filter font-medium text-[#454545cf] flex sm:md:gap-7 gap-5 py-3 border-b-2"
      >
        <select class="pr-2 -ml-3 bg-transparent border-none rounded-xl">
          <option value="1">Kому</option>
          <option value="1">Kому</option>
          <option value="1">Kому</option>
        </select>
        <select class="pr-2 bg-transparent border-none rounded-xl">
          <option value="1">Повод</option>
          <option value="1">Повод</option>
          <option value="1">Повод</option>
        </select>
        <select class="pr-2 bg-transparent border-none rounded-xl">
          <option value="1">Цвет</option>
          <option value="1">Цвет</option>
          <option value="1">Цвет</option>
        </select>
        <select class="pr-2 bg-transparent border-none rounded-xl">
          <option value="1">Цена</option>
          <option value="1">Цена</option>
          <option value="1">Цена</option>
        </select>
      </div>
    </section>
    <section class="flex md:gap-7 gap-5 sm:py-10 py-5">
      <div
        id="default-carousel"
        class="relative w-full"
        data-carousel="slide"
      >
        <!-- Carousel wrapper -->
        <div
          class="carousel relative lg:h-[300px] md:h-60 sm:h-48 h-52 overflow-hidden rounded-xl"
        >
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="../assets/images/carousel.png"
              class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="flex flex-col items-center text-center justify-center h-full w-1/2 absolute"
            >
              <p class="xl:text-5xl px-2 md:text-3xl sm:text-2xl text-xl">
                Букеты <br />
                <span class="whitespace-nowrap"
                  >для <span class="text-[#B03A29]">Любимой</span></span
                >
              </p>
              <p
                class="flex items-center cursor-pointer gap-3 md:py-10 sm:py-4 py-2 font-medium md:text-xl sm:text-md text-sm"
              >
                Подробнее
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.555359 11C0.555359 11 36.5554 11 32.0554 11M32.0554 11C27.5554 11 18.5554 9 18.5554 1M32.0554 11C27.5554 10.8333 18.5554 12.8 18.5554 20"
                    stroke="#454545"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wallpapers.com/images/featured/cute-flower-background-mdushf1od439uabm.jpg"
              class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="flex flex-col items-center text-center justify-center h-full w-1/2 absolute"
            >
              <p class="xl:text-5xl px-2 md:text-3xl sm:text-2xl text-xl">
                Букеты <br />
                <span class="whitespace-nowrap"
                  >для <span class="text-[#B03A29]">Любимой</span></span
                >
              </p>
              <p
                class="flex items-center cursor-pointer gap-3 md:py-10 sm:py-4 py-2 font-medium md:text-xl sm:text-md text-sm"
              >
                Подробнее
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.555359 11C0.555359 11 36.5554 11 32.0554 11M32.0554 11C27.5554 11 18.5554 9 18.5554 1M32.0554 11C27.5554 10.8333 18.5554 12.8 18.5554 20"
                    stroke="#454545"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://t4.ftcdn.net/jpg/02/67/63/11/360_F_267631128_t4YyYI0D3PWmAaWIPQKRCIuXAj6XM7H5.webp"
              class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="flex flex-col items-center text-center justify-center h-full w-1/2 absolute"
            >
              <p class="xl:text-5xl px-2 md:text-3xl sm:text-2xl text-xl">
                Букеты <br />
                <span class="whitespace-nowrap"
                  >для <span class="text-[#B03A29]">Любимой</span></span
                >
              </p>
              <p
                class="flex items-center cursor-pointer gap-3 md:py-10 sm:py-4 py-2 font-medium md:text-xl sm:text-md text-sm"
              >
                Подробнее
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.555359 11C0.555359 11 36.5554 11 32.0554 11M32.0554 11C27.5554 11 18.5554 9 18.5554 1M32.0554 11C27.5554 10.8333 18.5554 12.8 18.5554 20"
                    stroke="#454545"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgZ5ayCOG7OjOCqI-GnuCCZgGydJFF17UK2eb-hIpCgj4TY3a59gVv-mOPhikSGrZqr8&usqp=CAU"
              class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="flex flex-col items-center text-center justify-center h-full w-1/2 absolute"
            >
              <p class="xl:text-5xl px-2 md:text-3xl sm:text-2xl text-xl">
                Букеты <br />
                <span class="whitespace-nowrap"
                  >для <span class="text-[#B03A29]">Любимой</span></span
                >
              </p>
              <p
                class="flex items-center cursor-pointer gap-3 md:py-10 sm:py-4 py-2 font-medium md:text-xl sm:text-md text-sm"
              >
                Подробнее
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.555359 11C0.555359 11 36.5554 11 32.0554 11M32.0554 11C27.5554 11 18.5554 9 18.5554 1M32.0554 11C27.5554 10.8333 18.5554 12.8 18.5554 20"
                    stroke="#454545"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <!-- Item 5 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTqqkbhwlLsU7hGXovehpKdH5XVJxzZx-YzcS2BZcfTaYz-_wLOseXtp0cL_Hk8o7sNs&usqp=CAU"
              class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div
              class="flex flex-col items-center text-center justify-center h-full w-1/2 absolute"
            >
              <p class="xl:text-5xl md:text-3xl sm:text-2xl text-xl">
                Букеты <br />
                <span class="whitespace-nowrap"
                  >для <span class="text-[#B03A29]">Любимой</span></span
                >
              </p>
              <p
                class="flex items-center cursor-pointer gap-3 md:py-10 sm:py-4 py-2 font-medium md:text-xl sm:text-md text-sm"
              >
                Подробнее
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.555359 11C0.555359 11 36.5554 11 32.0554 11M32.0554 11C27.5554 11 18.5554 9 18.5554 1M32.0554 11C27.5554 10.8333 18.5554 12.8 18.5554 20"
                    stroke="#454545"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <!-- Slider indicators -->
        <div
          class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
        >
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full sm:px-4 px-2 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center sm:w-10 sm:h-10 w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 sm:group-focus:ring-4 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="sm:w-4 sm:h-4 w-2 h-2 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full sm:px-4 px-2 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center sm:w-10 sm:h-10 w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 sm:group-focus:ring-4 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="sm:w-4 sm:h-4 w-2 h-2 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div
        class="relative w-[320px] lg:min-w-[320px] md:min-w-[250px] min-w-[200px] lg:h-[300px] md:h-60 sm:h-48 sm:block hidden"
      >
        <p
          class="absolute right-0 px-4 py-2 bg-[#FFA500] rounded-es-xl rounded-se-xl"
        >
          -30%
        </p>
        <img
          class="h-full w-full object-cover rounded-xl"
          src="../assets/image/main.png"
          alt="img"
        />
      </div>
    </section>

    <!-------------------------------- section 1 -------------------------------->

    <section>
      <h1 class="sm:text-3xl text-lg -mt-2 pb-1 text-[#242424]">
        Готовые букеты
      </h1>
      <p class="sm:text-lg text-sm text-[#242424]">
        Собраны сегодня. Букет уже готов к доставке.
      </p>
      <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
        <div
          v-for="i in store.data"
          :key="i"
          class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img @click="$router.push('./фрида_кало')"
            class="img rounded-t-lg 2xl:h-80 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
            src="../assets/image/image6.png"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              Фрида Кало
            </h5>
            <div class="flex justify-between items-center">
              <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                <span class="md:inline-block hidden pr-1">от</span> 350 000
                <span class="sm:inline hidden">сум</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img class="cursor-pointer" src="../assets/svg/heart.svg" alt="" />

                <img
                  class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                  src="../assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
      >
        Показать больше
      </button>
    </section>

    <!-------------------------------- section 2 -------------------------------->

    <section>
      <h1 class="sm:text-3xl sm:pt-7 pt-4 sm:pb-2 pb-0 text-md">
        Яркие букетики
      </h1>
      <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
        <div
          v-for="i in store.data"
          :key="i"
          class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img @click="$router.push('./фрида_кало')"
            class="img rounded-t-lg 2xl:h-72 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
            src="../assets/image/image1.png"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              Фрида Кало
            </h5>
            <div class="flex justify-between items-center">
              <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                <span class="md:inline-block hidden pr-1">от</span> 350 000
                <span class="sm:inline hidden">сум</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img class="cursor-pointer" src="../assets/svg/heart.svg" alt="" />
                <img
                  class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                  src="../assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
      >
        Показать больше
      </button>
    </section>

    <!-------------------------------- section 3 -------------------------------->

    <section>
      <h1 class="sm:text-3xl sm:pt-7 pt-4 sm:pb-2 pb-0 text-md">
        Розы Pink O'Hara
      </h1>
      <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
        <div
          v-for="i in store.data"
          :key="i"
          class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img @click="$router.push('./фрида_кало')"
            class="img rounded-t-lg 2xl:h-72 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
            src="../assets/image/image3.png"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              Фрида Кало
            </h5>
            <div class="flex justify-between items-center">
              <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                <span class="md:inline-block hidden pr-1">от</span> 1 350 000
                <span class="sm:inline hidden">сум</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img class="cursor-pointer" src="../assets/svg/heart.svg" alt="" />

                <img
                  class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                  src="../assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
      >
        Показать больше
      </button>
    </section>

    <!-------------------------------- section 4 -------------------------------->

    <section>
      <h1 class="sm:text-3xl sm:pt-7 pt-4 sm:pb-2 pb-0 text-md">
        Махровые эустомы
      </h1>
      <div class="grid lg:grid-cols-4 grid-cols-3 cards my-5 md:gap-7 gap-5">
        <div
          v-for="i in store.data / 2"
          :key="i"
          class="card max-w-sm hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF] border-gray-200 rounded-lg"
        >
          <img @click="$router.push('./фрида_кало')"
            class="img rounded-t-lg 2xl:h-72 xl:h-64 cursor-pointer md:h-52 sm:h-44 h-44 w-full object-cover"
            src="../assets/image/image2.png"
            alt=""
          />
          <div class="md:p-5 p-3">
            <h5
              class="mb-2 sm:text-xl text-sm text-[#1F9D6D] tracking-tight font-medium"
            >
              Фрида Кало
            </h5>
            <div class="flex justify-between items-center">
              <p class="font-semibold sm:text-lg text-xs whitespace-nowrap">
                <span class="md:inline-block hidden pr-1">от</span> 1 350 000
                <span class="sm:inline hidden">сум</span>
              </p>
              <div class="flex items-center sm:gap-3 gap-1">
                <img class="cursor-pointer" src="../assets/svg/heart.svg" alt="" />

                <img
                  class="cursor-pointer sm:h-5 sm:w-5 h-3 w-3"
                  src="../assets/svg/cart.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="w-full font-semibold lg:h-14 h-10 border-2 rounded-xl border-[#5C0099] text-[#5C0099] hover:bg-[#5C0099] duration-500 hover:text-white"
      >
        Показать больше
      </button>
    </section>
  </main>
</template>

<script setup>
import { initFlowbite } from "flowbite";

const store = reactive({
  width: "",
  data: "",
});

onMounted(() => {
  window.addEventListener("resize", () => {
    store.width = window.innerWidth;
    if (store.width < 501) {
      store.data = 4;
    } else if (store.width < 1024) {
      store.data = 6;
    } else {
      store.data = 8;
    }
  });
  store.width = window.innerWidth;
  if (store.width < 501) {
    store.data = 4;
  } else if (store.width < 1024) {
    store.data = 6;
  } else {
    store.data = 8;
  }
  store.width = window.innerWidth;
  initFlowbite();
});
</script>

<style lang="scss" scoped>
@media (max-width: 580px) {
  .card .img {
    height: 9rem;
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .card .img {
    height: 12rem;
  }
  .carousel {
    height: 10rem;
  }
  .filter {
    gap: 1.4rem;
  }
  .filter select {
    font-size: 16px;
    padding: 0 30px 0 5px;
    border-radius: 5px;
  }

  .filter select:first-child {
    padding-left: 10px;
  }
}

@media (max-width: 400px) {
  .filter {
    gap: 0.5rem;
  }
  .filter select {
    font-size: 10px;
    padding: 0 30px 0 5px;
    border-radius: 5px;
  }
}

@media (max-width: 450px) {
  .card .img {
    height: 10rem;
  }
}

@media (max-width: 350px) {
  .card .img {
    height: 9rem;
  }
  .cards {
    gap: 0.5rem;
  }
}
</style>

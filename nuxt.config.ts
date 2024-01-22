// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "florify",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "icon",
          href: "/main_logo.svg",
        },
      ],
      script: [
        {
          src: "https://widget.cloudpayments.ru/bundles/cloudpayments",
          defer: true,
        },
      ],
      meta: [
        {
          "http-equiv": "Content-Security-Policy",
          content: "frame-ancestors https: https://widget.cloudpayments.ru/",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  css: ["~/assets/main.scss"],
  // plugins: [{ src: "~/plugins/cloudpayments.js" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: '404',
  //       path: '*',
  //       component: resolve(__dirname, 'layouts/error.vue')
  //     })
  //   }
  // },
  modules: ["@pinia/nuxt", "@element-plus/nuxt", "nuxt-swiper"],
});

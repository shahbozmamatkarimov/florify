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
          href: "https://i.ibb.co/dQfTqMw/icon-1.png",
        },
      ],
      script: [{ src: "https://code.jquery.com/jquery-3.6.0.min.js" }],
      meta: [
        {
          // Content Security Policy (CSP) meta tag
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
  css: ["~/assets/main.css"],
  plugins: [{ src: "~/plugins/cloudpayments.js", mode: "client" }],
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

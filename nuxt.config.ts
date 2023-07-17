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
    },
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@element-plus/nuxt", "@ant-design-vue/nuxt"],
  // modules: [
  //   [
  //     "nuxt-i18n",
  //     {
  //       locales: [
  //         {
  //           code: "es",
  //           iso: "en-ES",
  //           name: "Español",
  //         },
  //         {
  //           code: "en",
  //           iso: "en-US",
  //           name: "English",
  //         },
  //         {
  //           code: "ca",
  //           iso: "ca-ES",
  //           name: "Català",
  //         },
  //         {
  //           code: "fr",
  //           iso: "fr-FR",
  //           name: "Français",
  //         },
  //       ],
  //       defaultLocale: "en",
  //       noPrefixDefaultLocale: true,
  //       vueI18n: {
  //         fallbackLocale: "en",
  //         // messages: {
  //         //   en: require("./lang/en.json"),
  //         //   es: require("./lang/ru.json"),
  //         //   fr: require("./lang/uz.json"),
  //         // },
  //       },
  //     },
  //   ],
  // ],
});

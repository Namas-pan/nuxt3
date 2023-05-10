// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@huntersofbook/naive-ui-nuxt',
    // 引入 Pinia
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: false, // enabled `@unocss/preset-attributify`,
    // core options
    shortcuts: [],
    rules: [],
    safelist: [],
  },
});

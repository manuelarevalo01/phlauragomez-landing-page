module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_app.scss";',
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'translations',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
};

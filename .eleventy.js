const { format, add } = require('date-fns')
const i18n = require('eleventy-plugin-i18n');
//const translations = require('./src/_data/i18n');
const { enUS, ptBR } = require('date-fns/locale');

// const locales = {
//   'en-US': enUS,
//   'pt-BR': ptBR
// }

module.exports = function(eleventyConfig) {

  // eleventyConfig.addFilter('formatDate', (date, locale) => {
  //   return format(add(date, { hours: 3 }), "dd/MM/yyyy", { locale: locales[locale] })
  // }) 

  // eleventyConfig.addPlugin(i18n, {
  //   translations,
  //   fallbackLocales: {
  //     "es-ES" : "pt-BR"
  //   }
  // })

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  
  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "public",
      data: "_data"
    }
  }
}
const { format, add, parseISO } = require('date-fns')
const ptBR = require('date-fns/locale/pt-BR')
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('formatDate', date => {
    return format(add(date, { hours: 3 }), "iiii, dd 'de' MMMM 'de' yyyy", { locale: ptBR })
  }) 

  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      "es-ES" : "pt-BR"
    }
  })

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
    }
  }
}
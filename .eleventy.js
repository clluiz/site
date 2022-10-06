const { format, add, parseISO } = require('date-fns')
const ptBR = require('date-fns/locale/pt-BR')

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('formatDate', date => {
    return format(add(date, { hours: 3 }), "iiii, dd 'de' MMMM 'de' yyyy", { locale: ptBR })
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
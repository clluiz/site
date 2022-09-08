module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("/css/");
  eleventyConfig.addWatchTarget("/css/");
  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "public",
    }
  }
}
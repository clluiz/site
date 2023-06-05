const markdownIt = require("markdown-it")
const markdownItClass = require("@toycode/markdown-it-class")

const mapping = {
  h1: ['text-4xl', 'text-red-400', 'font-bold', "my-8"],
  h2: ['text-3xl', 'text-red-400', 'font-semibold', "my-8"],
  a: ["text-emerald-700", "font-semibold", "decoration-emerald-700", "underline", "decoration-solid"],
  p: ["text-lg", "my-8"],
  ul: ["list-none"]
};

const md = markdownIt({ linkify: true, html: true });
md.use(markdownItClass, mapping);

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.setLibrary('md', md);
  
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
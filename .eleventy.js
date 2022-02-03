const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('css');

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('css');

  eleventyConfig.addPlugin(syntaxHighlight);

  // Custom Nunjucks filters
  eleventyConfig.addNunjucksFilter("convertRecipeDate", function(value) { 
    return DateTime.fromJSDate(value, {zone: 'utc'}).setLocale('fr').toLocaleString();
   });
};

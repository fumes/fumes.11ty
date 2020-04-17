const pluginSass = require('eleventy-plugin-sass');
const readingTime = require('./src/_11ty/reading-time');
const pluginDate = require("eleventy-plugin-date");

module.exports = function(eleventyConfig) {


  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: "numeric", month: "short", day: "numeric" },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: "numeric", month: "long" },
      // Add a new filter using formatting tokens.
      readableYear: { year: "numeric" },
    }
  });


  eleventyConfig.addLiquidFilter('readingTime', readingTime);
  eleventyConfig.addNunjucksFilter('readingTime', readingTime);

  //tags as in 11ty base repo
  eleventyConfig.addCollection('tagList', require('./src/_11ty/getTagList'));

  // //TESTING: list of tags with count per tag - candy
  // eleventyConfig.addCollection('tagCount', require('./src/_11ty/tagCounter'));
  //
  //TESTING: list of posts per tag - candy
  eleventyConfig.addCollection('tagListPosts', require('./src/_11ty/tagListPosts'));

    // //test to enable pagination and prev/next navigation
    // // temporarily suspended
    // eleventyConfig.addCollection('articles', function(collection) {
    //   return collection.getFilteredByGlob('src/articles/*.md').sort((a, b) => {
    //     return a.data.display_order - b.data.display_order;
    //   });
    // });


  // sass
  eleventyConfig.addPlugin(pluginSass, {
    watch: './src/scss/*.scss'
  });

  // pass some assets right through
  eleventyConfig.addPassthroughCopy('./src/assets');

  // Aliases are in relation to the _includes folder HTML
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html');
  // Aliases are in relation to the _includes folder NUNJUCKS
  eleventyConfig.addLayoutAlias('photographer', 'layouts/photographer.njk');
  eleventyConfig.addLayoutAlias('text_author', 'layouts/text_author.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('index', 'layouts/index.njk');

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: [
      '_includes',
      '.'
    ]
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes', //default
      data: '_data', //default
      output: '_site' //default
    },
    templateFormats : ['njk', 'md', 'liquid', 'html'],
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine : 'liquid'
  };
}

const pluginSass = require('eleventy-plugin-sass');
const readingTime = require('./src/_11ty/reading-time');


module.exports = function(eleventyConfig) {

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
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('images_author', 'layouts/images_author.html');
  eleventyConfig.addLayoutAlias('photographer', 'layouts/photographer.html');
  eleventyConfig.addLayoutAlias('tag_page', 'layouts/tag_page.html');
  eleventyConfig.addLayoutAlias('post_index_tag', 'layouts/post_index_tag.html');
  eleventyConfig.addLayoutAlias('text_author', 'layouts/text_author.html');
  // Aliases are in relation to the _includes folder NUNJUCKS
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

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

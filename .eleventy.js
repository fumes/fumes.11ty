const pluginSass = require('eleventy-plugin-sass');

module.exports = function(eleventyConfig) {
  // sass
  eleventyConfig.addPlugin(pluginSass, {
    watch: 'src/scss/*.scss'
  });

  // pass some assets right through
  eleventyConfig.addPassthroughCopy('src/assets');

  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('categories', 'layouts/categories.html');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('images_author', 'layouts/images_author.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('photographer', 'layouts/photographer.html');
  eleventyConfig.addLayoutAlias('post_index_tag', 'layouts/post_index_tag.html');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html');
  eleventyConfig.addLayoutAlias('text_author', 'layouts/text_author.html');

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
      includes: '_includes',
      data: '._data',
      output: '_site'
    }
  };
}

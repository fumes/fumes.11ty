const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {

  //tags as in 11ty base repo
  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));

  //TESTING: list of tags with count per tag - candy
  eleventyConfig.addCollection("tagCount", require("./src/_11ty/tagCounter"));

  //TESTING: list of posts per tag - candy
  eleventyConfig.addCollection("tagListPosts", require("./src/_11ty/tagListPosts"));

  // sass
  eleventyConfig.addPlugin(pluginSass, {
    watch: "./src/scss/*.scss" // "single quotes" here do NOT work ?!
  });

  // pass some assets right through
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias("tag_page", "layouts/tag_page.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("home", "layouts/home.html");
  eleventyConfig.addLayoutAlias("images_author", "layouts/images_author.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("photographer", "layouts/photographer.html");
  eleventyConfig.addLayoutAlias("post_index_tag", "layouts/post_index_tag.html");
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");
  eleventyConfig.addLayoutAlias("text_author", "layouts/text_author.html");

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: [
      "_includes",
      "."
    ]
  });

  return {
    dir: {
      input: "src",
      includes: "_includes", //default
      data: "_data", //default
      output: "_site" //default
    }
    ,
    templateFormats : ["njk", "md", "liquid", "html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine : "liquid"
  };
}

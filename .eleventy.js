const pluginSass = require('./src/_11ty/sass');
const readingTime = require('./src/_11ty/reading-time');
const pluginDate = require("eleventy-plugin-date");
const CaptureTag = require('./src/_11ty/nunjucks-capture');

let Nunjucks = require("nunjucks");

module.exports = function(eleventyConfig) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.addExtension('CaptureTag', new CaptureTag())
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
};

// var env = new nunjucks.Environment();
// env.addExtension('CaptureTag', new CaptureTag());

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

  //LiquidFilter
  eleventyConfig.addLiquidFilter('readingTime', readingTime);
  //full-width massive, from https://github.com/eduardoboucas/buildtimes
  eleventyConfig.addLiquidFilter("feature_title", title => {
    const MIN_LENGTH = 10;
    const MAX_LENGTH = 20;

    if (!title) return "";

    let currentLine = "";
    let lines = [];
    let words = title.split(" ");

    words.forEach(word => {
      if (currentLine.length + word.length <= MAX_LENGTH) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine);

        currentLine = word + " ";
      }
    });

    if (currentLine.length < MIN_LENGTH) {
      lines[lines.length - 1] += currentLine;
    } else {
      lines.push(currentLine);
    }

    return `
      <span class="feature-title__full">${title}</span>

      ${lines
        .map(
          line => `
        <span aria-hidden="true" class="feature-title__part">${line.slice(
          0,
          -1
        )}</span>
      `
        )
        .join("")}
    `;
  });

  //NunjucksFilter
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
    watch: './src/scss/*.scss',
    outputDir: './src/_includes/css/'
  });

  // pass some assets right through
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-144x144.png');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-192x192.png');


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
    htmlTemplateEngine : 'liquid',
    passthroughFileCopy: true,
  };
}

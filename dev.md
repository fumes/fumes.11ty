## Fumes website features

- [x] microformats. [example test here](https://search.google.com/structured-data/testing-tool#url=http%3A%2F%2Ffumes.junglestar.org%2Fstudies%2Fform)

- [x] ultra simple [codepen-geek](http://codepen.io/rokma/full/pJBXbg/) responsive logo.

- [x] smart [inline svg icons](https://github.com/eduardoboucas/eduardoboucas.github.io/tree/master/_includes/svg).

- [x] post thumbs. Front-matter declared.

- [x] chrome standalone web app functionality (android only :().

- [x] photographer indexes and navigation.

- [x] open graph.

- [x] attribution footnotes ["APPEND to copy action"](https://www.jitbit.com/alexblog/230-javascript-injecting-extra-info-to-copy-pasted-text/) via inlined vanilla js.

- [x] twitter [cards](https://github.com/merlos/jekyll-auto-image#example-using-twitter-cards) ([tested here..](https://cards-dev.twitter.com/validator)).

- [x] SSL/https thanks to Netlify.

- [x] responsive videos without plugins thanks to [Eduardo Boucas] adapted (https://eduardoboucas.com/blog/2016/12/21/responsive-video-embeds-jekyll.html)

- [x] Reading time estimates. Using this plugin [eleventy-plugin-reading-time](https://github.com/johanbrook/eleventy-plugin-reading-time) by Johan Brook.


## Fumes development technologies

Stuff for development. Its happens in [master branch](https://github.com/fumes/fumes11ty/):

- Nmp

- Gulp

- 11ty

- plus various code clips & techniques taken here and there...

- Netlify CND and SSL/https.


## Dev prerequisites:

### 1. Install node dependencies into project's local dir

```sh
npm install
```

## Dev times:

### A. Run 11ty

```sh
npx @11ty/eleventy --serve
```
or Change the web server’s port. Here how to use ```localhost:8081``` :

```sh
npx @11ty/eleventy --serve --port=8081
```




### B. Run gulp to produce images

Open a new terminal window and

Rename all to lowercase + del

```sh
gulp lower
```

Produce all the different sizes images + del

```sh
gulp sizes
```

Rename images with dir name and progressive index + del

```sh
gulp rename
```

Rename images adding dir name and progressive index + del

```sh
gulp curate
```

Or to produce all the different sizes images without deleting originals
```sh
gulp size_images
```

## To do

- [ ] install this: https://github.com/nhoizey/eleventy-plugin-images-responsiver

- [ ] licenses management: use licenses.yml

- [ ] post count in footer

- [ ] compress html

- [ ] handy prev / next articles navigation.

- [ ] print.css

- [ ] [google authors](http://milanaryal.com/2015/integrating-social-meta-tags-into-jekyll/#integrating-google-authorship-into-jekyll)

- [ ] [Google Author Rich Snippets](http://davidensinger.com/2013/05/setting-up-google-author-rich-snippets/)


## One day:

- [ ] use [eleventy-img](https://github.com/11ty/eleventy-img)
- [ ] install service workers

- [ ] mailchimp

- [ ] merchandise

- [ ] PDFs | ebooks

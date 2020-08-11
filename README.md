[![Netlify Status](https://api.netlify.com/api/v1/badges/f1e23e88-7158-47cd-b272-6ebbc9e953c4/deploy-status)](https://app.netlify.com/sites/fumes/deploys)

## What?

_Fumes is an online photography magazine broadcasting human interest stories mainly from South East Asia._
_Fumes project was started by two photographers. A metaphor to play with, delivering ideas via images._

♡ Fumes website is now refactored using 11ty.


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

Stuff for development. Its happens in [Source branch](https://github.com/fumes/fumes11ty/):

- Nmp

- Gulp

- Bundler

- 11ty

- plus various code clips & techniques taken here and there...

- Netlify CND and SSL/https.


## Prerequisites, first setup:

### A. Get started with bundler. Install it globally!

```sh
gem install bundler
```

## Dev prerequisites:

### 1. Install node dependencies into project's local dir

```sh
npm install
```

## Dev time:

### 1. Run 11ty

```sh
npx @11ty/eleventy --serve
```

### 2. Run gulp to produce images

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

- [ ] licenses management: use licenses.yml

- [ ] post count in footer

- [ ] compress html

- [ ] handy prev / next articles navigation.

- [ ] print.css

- [ ] [google authors](http://milanaryal.com/2015/integrating-social-meta-tags-into-jekyll/#integrating-google-authorship-into-jekyll)

- [ ] [Google Author Rich Snippets](http://davidensinger.com/2013/05/setting-up-google-author-rich-snippets/)


## One day:

- [ ] install service workers

- [ ] mailchimp

- [ ] merchandise

- [ ] PDF | ebook


## Purpose of open sourcing this project

Having the source files of the Fumes project website, the core of the project, out in the open will allow other people or organisations that want to produce journalism to get a head-start on their own sites and see some practices and methods that have worked well for Fumes.

## Reasons for moving from Jekyll to 11ty

This project has been happily using [Jekyll](http://jekyllrb.com/) for many years. till it became way to slow, even using --incremental, to the point that was painful. The discovery of [11ty](https://www.11ty.dev/) was a pleasant surprise for its elasticity, speed and javascript base which allows many customisations.


## Warning

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them.

Please, ask for permission first by contacting us: [info@junglestar.org](mailto:info@junglestar.org)

Thanks, Junglestar team.


## Photo rights


All photos © the Authors. All photos rights reserved. Except as indicated on a per article basis.

In some Fumes Articles, photos are released under CC-BY Creative Commons license. Some other Fumes photos are CC0. Everything else is GPL.

---
layout: post
title: Font sizing, the constant battlefield
wordpress_id: 11
wordpress_url: /archive/2006/07/05/font-sizing-the-constant-battlefield/
comments: true
categories:
- programming
tags:
---

There has been constant debate amongst myself and some of my other web loving friends as to the correct solution for cross browser and platform font sizing. For the longest time I swore that fonts in IE seemed a step smaller than the fonts in my beloved KHTML and Gecko based browsers. Finally I've found a story to confirm my suspicions. It would seem that internet explorer renders default text as text size small as opposed to medium as defined in the CSS-1 spec.

Where did I find this out? Did I do emperical tests to discover this flaw? No, but someone else did. See the links below for more info (as well as a test formatting stylesheet which allows one to "safely" use em's to cross browser and platform style their text sizes.)

[https://www.thenoodleincident.com/tutorials/box_lesson/font/index.html](https://www.thenoodleincident.com/tutorials/box_lesson/font/index.html "The original article with screenshots coveringn major browsers.")

[https://www.alistapart.com/stories/sizematters/](https://www.alistapart.com/stories/sizematters/ "A very useful article from ")

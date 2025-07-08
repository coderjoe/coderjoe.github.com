---
layout: post
title: More Fun with Greasemonkey
wordpress_id: 106
wordpress_url: /archive/2007/10/30/more-fun-with-greasemonkey/
comments: true
categories:
- programming
tags:
- experts-exchange
---

The past month has been a difficult one. Between readying the apartment for winter, various chores, and social obligations, I've had little time for my own personal projects. Recently however I came across a few things that I just couldn't pass up.

**More fun with Experts Exchange**

I was recently informed that my [Unhide Experts Exchange Greasemonkey script](/archive/2007/08/10/experts-exchange-encryption/ "Unhide Experts Exchange script") had become obsolete. Reader [nico5038](http://community.zdnet.co.uk/blog/0,1000000567,2000342184b,00.htm "nico5038's blog covering issues with Experts Exchange") points out in a comment that Experts Exchange now hides all comments from users unless they're logged in.

I would have been content to leave it at that until my friend [Sean](http://www.seancolombo.com "Sean Colombo's blog.") pointed out that Experts Exchange seems to be “[cloaking](http://en.wikipedia.org/wiki/Cloaking "Wikipedia article on Cloaking")” its answer pages. What this means is that when a search spider visits the site Experts-Exchange they will present a page that has all comments visible. However, if you or I go visit the site, the comments are hidden. This isn't exactly the nicest thing to do on the web these days, so I've decided to write a new Experts-Exchange Greasemonkey script to fetch the hidden text from one of many different potential sources and replace the hidden text with the text that we should all be able to see.

Edit: They aren't cloaking they're just appending the comments to the end of their page. In any case grabbing a cached version of the page will help stave off any other awkward practices they use in the future.

I'll update again tomorrow with the script once its been tested.

In the mean time enjoy a Happy Halloween!

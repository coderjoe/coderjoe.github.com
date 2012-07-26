--- 
layout: post
title: The RND Benchmark Update Redux
wordpress_id: 19
wordpress_url: /archive/2006/08/13/the-rnd-benchmark-update-redux/
comments: true
categories: 
- Coding
tags: []
---

Yesterday I posted some updated benchmarks which put a new JavaScript templating system called RND up against basic DOM manipulation, AJS, and the use of innerHTML. 

Today [Amix](http://amix.dk "amix.dk") has [posted](http://amix.dk/index.py/permanentLink?id=163#comments "RND template redux") what I believe is a much fairer comparison. However the basic DOM manipulation code seemed slower than it should be to me. So I decided to optimize it. 

Let me stress again that **I believe the updated benchmark that Amix has on [his blog](http://amix.dk "amix.dk") is entirely fair as it is written exactly how most people would write it**. 

That being said, I wanted to see what optimization of the DOM example could do against string concatination!

Get the zip [here](/images/posts/2006/08/html_rnd_benchmark-updated3.zip "html_rnd_benchmark-updated3.zip").

<!--more-->

After writing this latest example I think there's a lot to be said for the basic DOM as compared to a templating system. However, if you use the templating system you will have a smaller JavaScript footprint and fewer lines of code. It's the classic speed vs complexity argument. :) Below are my benchmarks. 

The zip contains two files:

1. test. html - The original (what I believe to be fair) benchmark made by Amix.
2. test-DOMoptimized. html - My optimized version of the basic DOM test.

My benchmarks for the two files:

**Stats:**

    Time run: 10
    Number of iterations: 10

**Amix's Original Updated Benchmark: **

    Firefox 1. 5. 0. 4 (Gecko):
        Basic DOM: 838 ms
        AJS DOM: 2375 ms
        innerHTML: 365 ms
        RND template: 674 ms

    Konqueror 3. 5. 2 (KHTML):
        Basic DOM: 553 ms
        AJS DOM: 1662 ms
        innerHTML: 409 ms
        RND template: 648 ms

**My modified DOM Example:**

    Firefox 1. 5. 0. 4 (Gecko):
        Basic DOM: 533 ms
        AJS DOM: 2399 ms
        innerHTML: 368 ms
        RND template: 666 ms

    Konqueror 3. 5. 2 (KHTML):
        Basic DOM: 421 ms
        AJS DOM: 1698 ms
        innerHTML: 418 ms
        RND template: 665 ms

Update:

These numbers are great, but I don't have a copy of Internet Explorer to test on. I've been informed that in Internet Explorer innerHTML and RND blows the pants off of both DOM manipulation methods. 

This makes perfect sense to me. One would expect innerHTML to be superior in the browser it was designed for. :)



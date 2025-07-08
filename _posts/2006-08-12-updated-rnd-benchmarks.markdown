---
layout: post
title: Updated RND Benchmarks
wordpress_id: 17
wordpress_url: /archive/2006/08/12/updated-rnd-benchmarks/
comments: true
categories:
- programming
tags:
- javascript
---

Since the original author was curious about the results from my updated benchmarks here they are. I will only report results from test-fixed.html as I do consider test-unfairdom.html to be unfair in favor of the dom example. Then again I did make it so you already knew that. ;)

Read on for my results!

<!--more-->

** Konqueror 3. 5. 2 (KHTML) **
> Time run: 20
>
> Number of iterations: 1000
>
> Basic DOM: 386 ms
>
> AJS DOM: 906 ms
>
> innerHTML: 327 ms
>
> RND template: 485 ms

** Firefox  1. 5. 0. 4 (Gecko) **
> Time run: 20
>
> Number of iterations: 1000
>
> Basic DOM: 529 ms
>
> AJS DOM: 1333 ms
>
> innerHTML: 421 ms
>
> RND template: 721 ms

** Firefox 1.5.0.4 (Gecko with dom.max_script_run_time = 0) **
> Time run: 20
>
> Number of iterations: 1000
>
> Basic DOM: 482 ms
>
> AJS DOM: 1289 ms
>
> innerHTML: 405 ms
>
> RND template: 616 ms

---
layout: post
title: Road Runner High Speed Internet HTTP Redirecting All Invalid Domains Requested
wordpress_id: 111
wordpress_url: /archive/2008/01/11/road-runner-high-speed-internet-http-redirecting-all-invalid-domains-requested/
comments: true
categories:
- life
tags:
- rant
- net neutrality
---

Advertisement filled domain search sites, once the domain of shady domain squatters, have shown up on Road Runner High Speed Internet for URLs of invalid domains.

Earlier this evening I decided to visit the website for a paint ball field in Syracuse NY. Looking for their address I tried to visit their site [http://www.headrush.com](http://www.headrush.com "Webpage for a nice Syracuse NY based paintball field (among other fun recreations)."). Unfortunately I mistyped and ended up at [http://www.headrus.com](http://www.headrus.com "This site does not exist as of the writing of this blog post."). I was greeted with the site pictured below.

[![Road Runner Squatter Search Page Screenshot 1](/images/posts/2008/01/roadrunner-squattersearch1.thumbnail.jpg)](/images/posts/2008/01/roadrunner-squattersearch1.jpg "Road Runner Squatter Search Page Screenshot 1")

<!--more-->

At first I just thought this was some sort of funny coincidence. My ISP just happened to be squatting the domain I mistyped. But wait, Road Runner High Speed doesn't squat domains. They only play in the high-speed internet and shitty customer service markets. They couldn't POSSIBLY be doing what I think they're doing? Are they redirecting invalid domains to a search page of their design? I visited [http://hdalashqwhqhffa.com](http://hdalashqwhqhffa.com "This site doesn't exist as of the writing of this blog post.") just to check.

[![Road Runner Squatter Search Page Screenshot 2](/images/posts/2008/01/roadrunner-squattersearch2.thumbnail.jpg)](/images/posts/2008/01/roadrunner-squattersearch2.jpg "Road Runner Squatter Search Page Screenshot 2")

To be honest this pisses me off. I'm paying them no small chunk of change for access to the Internet. This in itself doesn't bother me. However, what I am paying them for is for unfettered access to the internet as a resource, not a pre-filtered monitored windowpane into it. If I wanted a service that corrected me, protected me, monitored me, and alerted me to everything out there automatically I'd sign up for AOL.

Annoyed consumer "I don't pay for this to happen" complaints aside, I have a small script I've been running for a while which monitors referrer logs from my websites. It attempts pinpoint invalid requests by watching for forged referrer headers. In the past the script has worked great. I've found some interesting request data for my site that I never would have seen otherwise. Now, however, the little "callback" script notes every request as valid.

Fixing the problems with my log checker isn't hard. I could check the domain name to see if it's valid. Regardless, I don't want invalid domains returning me a HTTP redirect. That's not the way it works.

On the up side, they do have an opt-out for the service.

[![Road Runner Search Page Opt-Out image](/images/posts/2008/01/roadrunner-optout.jpg)](/images/posts/2008/01/roadrunner-optout.jpg "Road Runner Search Page Opt-Out image")

I find it humorous that they say you can "opt-in or out of this service". There is no opt-in. They give it to you by default.

Frankly I am disgusted by the number of ISPs that think this sort of content tampering is ok. First [Rogers (a Canadian ISP) tests inserting content into existing pages for convenience sake](http://arstechnica.com/news.ars/post/20071210-canadian-isp-tests-injecting-content-into-web-pages.html "Arstechnica Article detailing the process Rogers tested recently."), and now Road Runner is replacing invalid addresses with their own squatting style search site. If I'm supposed to receive a no such domain error, I want to receive a no such domain error.

Admittedly Road Runner's tactics are a little nicer than those of Rogers listed above, but it's not that far to jump from this to inserting their own content into my pages.

This, my friends, is why we need to nip this [Net Neutrality](http://savetheinternet.com/=faq "SaveTheInternet.com's FAQ page") thing in the butt now.

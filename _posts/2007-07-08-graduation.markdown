---
layout: post
title: Graduation!
wordpress_id: 69
wordpress_url: /archive/2007/07/08/graduation/
comments: true
categories:
- life
tags:
- college
---

I knew this day would come, but I never would have guessed it would come so quickly. I guess the old saying is true. Time really flies when you're having fun.

That's right folks. I've finished my studies and passed my exams. I'm officially a [college graduate](http://www.coderjoe.net/images/posts/2007/07/imagraduate.jpg "college graduate")! (Real world beware...)

You may hear yourself asking: "Wait a second, Joe graduated a month ago! Why is he posting now? He must be really lazy."

**Better Late than Never.**

Well you're wrong! I am lazy, but that's not why I'm graduating now. As part of my final studies I was fortunate enough to be involved in multidisciplinary project run through the Information Technology department under a course named "[Innovation and Invention](http://vega.it.rit.edu/~iandiblog/ "Innovation and Invention")". Because I am a Computer Science graduate, and because my successful graduation hinged on completing a final computer science elective, I was forced to enroll in the aforementioned totally awesome class as a "computer science independent study".

<!--more-->

How did I end up in this situation? Why would I bother to go through so much trouble for one class?

**It was the coolest course I've ever enrolled in!**

During my second co-op stint at [Paetec Communications](http://www.paetec.com "Paetec Communications") I was tipped off to a convention/speaker series by the name of [TED (Technology Entertainment and Design)](http://www.ted.com "TED (Technology Entertainment and Design)"). These [talks](http://www.ted.com/talks "Direct link to videos of the TED Talks.") cover a broad spectrum of topics from cool new user interfaces to educational beliefs and systems. As a part of one of these talks, I stumbled across the new (well not so new, last year new)  [multi-touch display](http://www.ted.com/index.php/talks/view/id/65 "Jeff Han's first presentation of his multi-touch display.") presented by Jeff Han. Now, as Jeff mentions in his talk, multi-touch technology is not new, however, by utilizing a physical concept called [Frustrated Total Internal Refraction](http://cs.nyu.edu/~jhan/ftirsense/index.html "Jeff Han's description of how FTIR works as well as how it can be applied to an input device.") Jeff has devised a way to make multi-touch displays  of varying sizes while staying relatively affordable. I thought this was the coolest thing since [Velcro](http://www.rainbowpromotions.org/div_carnival/interactivefun/velcroweb.gif "Velcro == Serious Fun. (Except getting down, that always sucked)"), but that was that.

Fast forward a few months and my room mate [Jason Morrison](http://www.jayunit.net "Jason's personal website.") noticed that there's an [entire community](http://www.nuigroup.com "The nuigroup website, through which you can access forums containing many FTIR loving nerds.") based around development and experimentation with multi-touch displays utilizing Jeff Han's method! On top of that, there's an Open Source library by the name of [TouchLib](http://www.whitenoiseaudio.com/touchlib/ "The TouchLib website.") which encapsulates functionality from [Intel's Open Computer Vision](http://www.intel.com/technology/computing/opencv/ "The OpenCV website.") into a form that developers for multi-touch displays can use to create [cool applications](http://www.youtube.com/watch?v=qeXew3t0JSs "The touchlib demo application "). Jay was [hooked](http://touch.tumblr.com "Jason's tumblog for the FTIR table project."), and decided to build one. I literally followed Jay around every step of the way (arguably being one of the worst kind of nuisances) desperately looking for some way to become involved in his new pet project.

**We can get course credit for this?!**

Shortly after ordering the parts, Jason was clued into this [Innovation and Invention](http://register.rit.edu/courseSchedule/4004806 "The Innovation and Invention course page on scheduler.") course. After speaking with the professor, it was decided that the multi-touch display that Jason was working on might be a good candidate for a side project within the Innovation and Inventions course load. Sure enough, work could be done on the multi-touch display and course credit could be received for it.

After speaking with Jason to make sure I wasn't treading too far on his domain, I contacted [Dr. Jon Schull](http://jonschull.blogspot.com "Jon Schull's personal blog.") about the possibility of working with the course in some capacity. I was invited to attend the first course and see what I thought. Each course was set up in a seminar/workshop (read: long hours) which gave us one long scheduled block at the end of each week in which to officially meet. After a rousing speech by our all powerful leader Jon I was hooked. The course seemed like a great opportunity to complete my graduation requirements while working on a project like nothing I had ever seen before. I dropped another class which had not been keeping my interest and scheduled my new independent study.

**What the heck is Innovation and Invention?**

At this point it is worth noting that the multi-touch display was not the focus of the Innovation and Inventions course. The true focus of the course was what came to be known as the "Immersive Dome" project.

The "[Immersive Dome](/images/posts/2007/07/360degreeimmersivedome.jpg "A picture of our firsrt immersive dome.")" project involved:

1. A number of projectors.
2. Many different pieces of custom software.
3. [More cloth](/images/posts/2007/07/360degreeimmersivedome-far.jpg "A shot of the dome from across our staging room.") than I've ever seen in my life.
4. A custom skeleton of fiberglass rods.

When the above pieces were mixed vigorously together they were to form a [geodesic](http://en.wikipedia.org/wiki/Geodesic "Wikipedia geodesic entry.") dome which, when rear projected uponm would create an interactive 360 degree immersive environment. One thing you need to keep in mind when creating an interactive immersive environment is how, exactly, you're going to let people interact with th environment!

**This is where I come in.**

During the first class each student introduced themselves, their background, and their interests. Once we had compiled a list of applicable skill sets (almost everything was applicable, from RPC programming experience, all the way to sewing skills) we were able to place each member of the course into at least one project group. These smaller groups would then meet on their own to achieve their goals for the week to help move the dome project forward.

I had described myself as a Computer Science major with experience programming with interests in computer vision and multi-touch interface design. As such I was put into the "software infrastructure", "blob-detection", and "multi-touch" groups. Each group was related, but had a different specific goal in mind.

The software infrastructure group was tasked with developing and coordinating a set of software applications which would coordinate and control the launching and interaction with the many different software packages which would be running on the dome.

The blob-detection group was tasked with discovering the best methods by which to utilize computer vision to track one of many things involving blobs. In some cases we were tracking human beings (positions within the dome for movement controlled by humans walking), in other cases we were tracking finger presses (multi-touch interface design), and in either case we had our hands full.

The multi-touch group was focused on getting the multi-touch interface up and running in such a way that it worked, and our multi-disciplinary group could develop applications which would utilize it's unique multi-touch design. We ended up settling on using TouchLib on a dedicated computer vision box packaging the [touch data up as OSC [pdf]](http://www.iua.upf.es/mtg/reacTable/pdfs/GW2005-KaltenBoverBencinaConstanza.pdf "TUIO Protocol Whitepaper in PDF format.") packets which would then be sent to one of many services which could utilize the touch data.

[Jason Morrison](http://www.jayunit.net "Jason's personal website.... again. :)"), [Matt Kampschmidt](http://www.synchala.net/ "Matt's personal website."), and [myself](http://www.josephbauser.net "My personal website."), as representatives of the multi-touch display group had the distinct honor of both getting our system up and running within the first three weeks of class, as well as being the first group to complete their objectives all together.

**Success and Celebration.**

Our excitement was palpable. Unfortunately the multi-touch display as an interface for the 360 degree dome was eventually scrapped in favor of directly tracking humans themselves as they walk within the dome. We were, however, able to get a multi-touch surface [up](/images/posts/2007/07/multitouch-up.JPG "The multi-touch table booted to Windows XP.") [and](/images/posts/2007/07/multitouch-and.JPG "Me showing off our multi-touch display with my expert showmanship.") [running](/images/posts/2007/07/multitouch-running.JPG "Us playing some virtual airhocky on the multi-touch table. Unfortunately calibration has just gone off in this photo, causing a boxapalooza."), design software for the surface, and demonstrate that both worked together flawlessly. Combine that project work with a relatively long paper describing my development efforts on both the dome, and the multi-touch display, and I had fulfilled my independent study requirement.

The dome project, on the other hand, was a complete success. The dome was [displayed](/images/posts/2007/07/symposium-dome4.jpg "Our dome glowing with awesomeness durring the symposium.") as a part of the [Creativity and Invention Symposium](http://www.rit.edu/~ciwg/symposium.php3 "The Creativity and Invention Symposium's website.") at the [RIT](http://www.rit.edu "The Rochester Institute of Technology website."). We entertained multiple visitors with a 3d fly-through of a monkey brain, [360 degree immersive](/images/posts/2007/07/symposium-dome3.jpg "A view from inside of the dome.") Google Earth experiment, and a visitor controlled walk through of a [digital story book world](/images/posts/2007/07/symposium-dome1.jpg "Jon Schull showing off our interactive story book.").

After the project completed, the dome was displayed for a short while at [BarCamp Rochester 2](http://barcamp.org/BarCampRochester2 "The official BarCamp Rochester 2 site."). Jon Schull and Lindsay Cade (an amazing artist, technical writer, engineer, and seamstress all rolled into one), Dean Ganskop, and Adam Weill also [presented on the dome](http://it.rit.edu/~jis/panodomeJS2.ppt.htm "The Dome presentation from NMC Summer 2007.") at the [New Media Consortium Summer 2007 Conference](http://archive.nmc.org/events/2007summerconf/presentation_links.shtml "NMC Summer 2007 Conference presentation list.").

**And thus my graduation was delayed.**

Unfortunately for me, the conferences and presentations listed above lasted for quite a long time, during which our professor was unable to update grade records. Once he returned, and received my many (in many case overly frantic) e-mails wondering why my grade had not been applied, he awarded my grade and I officially graduated.

This course by far was one of the most rewarding, and interesting experiences of my college career. Everybody would do well to participate in some sort of large scale multidisciplinary project. Hopefully, if Jon has his way, every student will.

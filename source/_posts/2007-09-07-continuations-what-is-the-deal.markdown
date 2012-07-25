--- 
layout: post
title: "Continuations: What is the deal?"
wordpress_id: 104
wordpress_url: /archive/2007/09/07/continuations-what-is-the-deal/
categories: 
- Coding
tags: 
- school
- computer-science
---

Over the past few weeks I've noticed what I consider to be an interesting trend. It has become almost impossible for me to browse for technical reading on the internet, or partake in a technical discussion, without someone mentioning continuations. In general, I welcome any discussion, and discussion of continuations is no different. The implementation of continuations intrigues me, and I'm curious about how useful they will turn out to be. I've even been known to suggest that continuations could be used to make code smaller and easier to write. 

With such a positive opinion about the potential use of continuations, it surprises my colleagues to learn that I am very wary of their actual use. I find myself asking, or being asked, the same question again and again.

**What's wrong with continuations?**

Quite frankly, continuations remind me too much of the "GOTO" statement. Continuations, as with GOTOs, have their potential uses. However, I feel that the problems inherent in using continuations outweigh the benefits.

From what I've gathered from my individual conversations, continuations are useful in a numer of ways.

- First, in generators.
- Second, in the form of their close cousin, the closure.
- Finally, for their use in arbitrary state management.

Their use as a part of generators is obvious, even if only made evident through the number of times the Python Fibonacci generator has been published as an example of the use of a continuation. Despite this, I don't find myself creating and using generators in my every day code. Generators may be helpful, but using one seems like more of an occasional convenience than the rule.

Closures on the other hand are something I use every day. My job involves a fair amount of web application development which results in a good deal of Javascript development. I will openly admit that I would be lost without  closures. Closures are invaluable when dealing with things such as binding execution to event handling. Without closures, some of the things I do might very well be impossible given Javascript's event system design. Then again, Javascript was designed with closures in mind, so one could very well consider their use a moot point.

The use of continuations for state management may not be as apparent as the previous examples. For an example, one need only look as far as the [Seaside](http://www.seaside.st/ "Seaside: A Continuation Based Web Framework") web framework. Seaside is a continuation based web framework which takes the stance that one should ["share as much state as possible"](http://www.seaside.st/documentation/videos?16&_k=jWLNbTUu&_n&_s=URoqQLYxrnXYKHZb "As stated by Lukas Renggli in his talk "). In essence, the web framework itself keeps track of the sessions. These sessions are tied to a hash of continuations, each representing a state in the current application's logical flow. The web application URL is not meaningful and contains little more than a reference ID to the current continuation. When you render a new page, a new continuation is generated and a reference to it is pushed into a hash somewhere for fetching later. That way if you hit the back button, going back to a previous page, the page will reference the previous continuation. When that continuation is used, your application flow would start from where you left off on that previous page.

All of a sudden the back button is useful!

Seaside has found an incredibly ingenious way to manage session state. At the same time, I believe it's important to remember that while you gain automatic session state management, you lose some rather nice perks. The first thing I would miss while using Seaside would be meaningful URLs. In addition, your web framework is maintaining an ever increasing amount of state for each session. For some reason I get the feeling that this solution isn't as great as it initially seemed.

**With so many good examples, why be so wary of continuations?**

It is true that there are many examples of continuations used for some very interesting, and often ingenious tasks. However, I still remember seeing GOTOs used in some of the most interesting and ingenious examples of code I have ever seen. For a proper example of the type of "ingenious" and "interesting" code I speak of, I refer you to ["The Story of Mel"](http://catb.org/jargon/html/story-of-mel.html "The Story of Mel from The Jargon File.").

So Internet, I ask you, what is the deal? Are continuations just the current topic fad that they seem to be to me? Or are continuations something people are actually very excited about? Should I look forward to finding more examples of good continuation practice? Or will I soon be suggesting that programmers avoid both GOTOs and continuations because they encourage lazy or hard to manage code? Could their possibly be a happy medium?

Forgive me for remaining skeptical, but I just can't shake the feeling that continuations aren't the magical entity that people seem to keep telling me they are.  I'll leave it up to history (or the Internet) to decide...

Addendum: It would seem that [Wikipedia already agrees](http://www.wikipedia.org/wiki/Continuation#Disadvantages "Wikipedia Continuations Article - Disadvantages") with me that continuations are really just “the functional expression of the GOTO statement".

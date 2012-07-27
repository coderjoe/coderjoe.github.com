--- 
layout: post
title: Experts Exchange Encryption
wordpress_id: 101
wordpress_url: /archive/2007/08/10/experts-exchange-encryption/
comments: true
categories: 
- coding
tags: 
- JavaScript
- experts-exchange
- rot13
- encryption
---

> **NOTE: The methods listed below are no longer necessary! Experts Exchange has moved to providing the answers in plain text at the bottom of the page. Just look past the first set of "answers", past the advertisements and link farm, and you'll see them.**

**What is Experts Exchange?**

If you've ever tried to look up some sort of technical information on the internet, you've likely come across the [Experts Exchange](http://www.experts-exchange.com "The Experts Exchange website."). Experts Exchange is a site on which people can ask questions about a variably infinite number of technical topics and receive a range of answers from experts purported experts. 

The site then allows the user to select a "best answer" earning the answer's author extra points. Points can be redeemed for a better type of account and access to other things on the site. 

In this way the site is user supported, without the experts there would be no exchange of answers.

**What's your problem with Experts Exchange?**

As an incentive to sign up, the questions asked on experts exchange are visible to all, however, the answers are obscured in two rather tricky ways. 

1. The answers are obscured by a transparent gif with alternating pixels of solid and transparent, making the words a fuzzy haze.
2.  The answer text itself is encrypted using a basic and fairly famous encryption scheme called [Rot13](http://en.wikipedia.org/wiki/Rot13 "Wikipedia article about Rot13.")

As a person just looking for the answer to my question I'm often frustrated by the number of times I stumble across an experts exchange thread which might answer my question, but is obscured.

**What are you going to do about it?**

Well I hate to be bothered with unnecessary prompts to log in as much as the next guy.  With that in mind, I present to you:

[The Unhide Experts Exchange Greasemonkey Script](/images/posts/2007/08/unhide_experts_exchange.user.js "The Unhide Experts Exchange Greasemonkey Script")

This script does what it says, it removes the image which blurs the answer text, and then Rot13 decrypts the answers for your viewing pleasure. 

As the title implies, you will need to be using [Firefox](http://www.getfirefox.com "Download firefox your your web browsing pleasure!"), and you will need the [Greasemonkey](http://www.greasespot.net/ "The official Greasemonkey blog.") plug-in to use this script.

**Will this destroy Experts Exchange?**

For those of you worried that this might just ruin the Experts Exchange, fear not. In their infinite wisdom they decided to completely omit the "selected answers" for the questions unless you're logged in. 

In this way there is still incentive to get an account and contribute!

In addition, I do not believe that my little [Greasemonkey](http://www.greasespot.net/ "The Greasemonkey blog.") script will ever gain enough momentum to offset a significant portion of potential Experts Exchange visitors. If it ever did, all they would have to do is change their cypher or insert dummy text. 

Any change to the cypher algorithm will be taken as a hint. (Also I'm way too lazy to implement anything other than rot13 instead of just logging in.)

However, if you're as lazy as I (or rather as lazy as one needs to be to write a Greasemonkey script to avoid logging in...), and would prefer not to manage yet another user name and password combination, you may use the script above. 

Note: The Greasemonkey script was updated on Sunday August 12th at 1:00am. It now properly takes care of the &lt;br&gt; characters that they do not rot13.

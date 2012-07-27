--- 
layout: post
title: On Javascript and Object Extention
wordpress_id: 67
wordpress_url: /archive/2007/07/02/on-javascript-and-object-extention/
comments: true
categories: 
- coding
tags: 
- rant
- web-development
- JavaScript
---

I find myself doing more and more Javascript development as the days go on, and while I do not consider myself an expert on the language, I do consider myself well versed enough to get things done the right way. 

More often than not my solutions will involve heavy use of the [Prototype.js](http://www.prototypejs.org) library to make my life a little bit easier. 

I won't be shy, I love this library. I love that it isn't based on XPath, and I love that it provides me with common extensions to common objects to make my life easier. It would seem, however, that there are quite a few people who disagree with me. 

Following the Rails Spinoffs mailing list (a hangout for users of [Prototype](http://www.prototypejs.org) and [Scriptaculous](http://script.aculo.us/) alike) I came across a post entitled "[Why I Don't Use the Prototype Javascript Library](http://blog.metawrap.com/blog/WhyIDontUseThePrototypejsJavaScriptLibrary.aspx)". As I'm always willing to be pointed in the right direction when I'm doing something wrong, curiosity got the best of me and I checked the site out. 

I've got to say, I'm quite surprised at the number of times I hear the arguments presented in this post. 

To be honest, I don't really understand what the problem is.

<!--more-->

I've read through the article, and it's the same argument I keep hearing over and over again."Because prototype extends objects with new functions using the prototype attribute it breaks everything!"

This is not necessarily true, and has bordered on a religious war for a while now. :p

Prototype is doing nothing out of the ordinary. 

Last I checked, Javascript was a prototyped language. 

Unlike class based languages, a prototyped language stresses the reuse of objects through cloning as opposed to stressing the relationships between created objects (If my memory serves me correctly). 

Following this paradigm, when Prototype was developed they reused the existing Javascript objects to provide extra functionality which was useful to the framework. These sorts of extensions to existing Javascript classes such as Array do potentially overwrite native functionality. This, however, is the same for any prototyped object in Javascript and is allowable by design.

Now I'm not arguing that "we should do it because we can", but rather that as of yet, the Prototype developers have not extended any functionality, as of yet, that is already defined in native code in the browsers of today.

I'm, of course, assuming that if for some reason in the latest and greatest Javascript spec it defines an apply() method on Object that the prototype team will rename or remove its apply method so as not to overwrite the existing functionality.

In short, the argument about extending Objects in Javascript and complaining that they conflict with other packages is akin to someone coming to me and saying:

> "I created a namespace for my code called OMGMyLongNamespace but SuperCoolBuzzWordFilledPackage2. 0 uses the same namespace and now they conflict and won't work! They're bad! Bad bad bad!"

Javascript is a prototyped language. Objects and values can be redefined. Try and avoid it, and get used to it.

Then of course there's that whole other argument about associative arrays (a. k. a hashes) working incorrectly in Javascript when you extend Array.

When I was learning Javascript there were two concepts that was drilled into my head.

1. All objects in Javascript work like associative arrays! (Man isn't that neeto?)
2. Objects with methods are not associative arrays and should not be used as such! (Oooh, a dangerous pitfall)

Namely, if you want to use an associative array, use an Object. If you want to use an array then you should... I don't know... use an Array?

And if you really need to use objects with prototyped methods as an associative array, Javascript has this nifty method called "hasOwnProperty" which can be used to detect values which come from prototyped base classes. Isn't that cool?

Here's an example. Which works as expected with Prototype.

{% codeblock lang:javascript %}
    var a = new Array();

    a["joe"]=1;
    a["jim"]=1;
    a["sara"]=1;

    for( i in a )    
        if( a. hasOwnProperty(i) )
            alert(i);
{% endcodeblock %}

In short, I'd say prototype is doing just fine. So long as you develop smartly you shouldn't run into any serious problems.

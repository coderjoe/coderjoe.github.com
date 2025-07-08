---
layout: post
title: Firefox Extension Development
wordpress_id: 84
wordpress_url: /archive/2007/07/19/firefox-extension-development/
comments: true
categories:
- programming
tags:
- oracle
---

My current position gives me the opportunity to do web development on a daily basis. Thanks to tools like the [Web Developer Toolbar](http://chrispederick.com/work/web-developer/ "The Web Developer Toolbar extension for Firefox."), and [Firebug](http://www.getfirebug.com "The Firebug Javascript Debugger") extensions for Mozilla Firefox, web development has been made much less painful than it once was.

These extensions are a boon to my daily development schedule. The extensions increase my productivity by keeping me from spending a majority of my time tracking down simple problems and instead let me focus on fixing the big things. In addition they provide a number of tools that allow me to carefully tweak my pages without altering any actual backend code, experimenting on the fly, and saving precious time which might be lost to repeated "edit -&gt; page load -&gt; test" cycles.

No matter how much I optimise my process I keep finding situations in my current development at work which could be streamlined through the careful application of custom scripting in my browser. Until recently I would satisfy my need for automation of repetitive tasks by creating a carefully crafted [Greasemonkey](http://www.greasespot.net/ "The Greasemonkey Blog.") script or by crafting a cleaver [bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet "Bookmarklet description."). At the end of the day yesterday I decided to take stock of the tools that I had created or modified to help speed up the majority of my repetitive day-to-day development tasks. Needless to say, there were more than a few.

Inspired by the web developer toolbar I've decided to develop my own Firefox extension. This extension would provide a number of tools to simplify my life when developing within Oracle's Application Express which will provide a number of customization options to the existing Application Express editor, as well as a number of shortcuts for common development tasks.

I've only just begun development, but I'm hoping the end result will be a benefit to more than just myself.

My initial experience with extension development has been full of swinging mixed emotions.

At this point I have a number of thoughts on Firefox Extension Development:

1. I love XUL... well.. I love XML, so it isn't that much of a stretch. XUL's simplicity and ability to extend the browser through overlays is amazing.
2. I hate the default directory structure that the majority of the tutorials out there tell you to use.
3. I hate that the default tutorial on [XulPlanet](http://www.xulplanet.com "The XulPlanet website: The Ultimate XUL Resource.") makes note of required directory structure, but lacks any mention of the proper structure for extension development.
4. I love that [someone created a build script](http://kb.mozillazine.org/Bash_build_script "The Bash build script is probably the most useful script out there for XUL Development.") for extensions that follows a defined directory structure so I don't have to worry about number 3.
5. I love the built in localization functionality.
6. I hate the [chrome.manifest](http://developer.mozilla.org/en/docs/Chrome_Registration "The chrome. manifest file is how you register chrome packages with the chrome registry. It's important.  I love the registry... but I hate the manifest.") file. The only reason I can stand it is because the build script mentioned above will allow you to write it in such a way that it will work in both development and packaged form.

All and all I've learned a whole bunch about Firefox extension development over the past two days.

Maybe once I'm finished I'll write my own Firefox extension development tutorial since I've found the majority of the tutorials on the internet to be severely lacking (with the exception of the [XUL Tutorials](http://www.xulplanet.com/tutorials/ "The XulPlanet XUL tutorials. If you want to learn XUL this is the place to go.") from XulPlanet. Those are amazingly in depth).

Well folks, I'm officially overloaded with projects.

Wish me luck.

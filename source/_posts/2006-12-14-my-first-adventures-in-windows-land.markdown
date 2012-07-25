--- 
layout: post
title: My First Adventures in Windows Land
wordpress_id: 24
wordpress_url: /archive/2006/12/14/my-first-adventures-in-windows-land/
categories: 
- Coding
tags: 
- C/C++
- MFC
- windows
- rant
---

It's been years since I was given the gift of my first compiler by my parents. 

It's been almost as long since I've experimented with the Windows API. 

Shortly after receiving the gift of Visual Studio 6 I made the switch to Linux as my desktop operating system of choice. Unfortunately this left me with minimal experience with windows programming. To this day the majority of my programming projects and tasks have taken the form of simple 2D graphics engines using SDL, or simple form based applications using QT or GTK+. 

Until recently I had always felt like I was missing something, I never had the most basic experience developing applications for the Windows operating system. This always left me with a bit of a pit in my stomach, as I didn't have the funds required to purchase a copy of Windows, purchase Visual Studio, and begin my experiments anew. 

Thankfully I was very recently offered a paid internship position with a company called Railcomm Inc. At Railcomm I was given the opportunity to develop some Windows programming skills. I developed screen after screen of graphical Windows application with relative ease. I considered myself at least a successful basic Windows programmer. 

At the start of this project I figured setting up a Window to contain my DirectX 9. 0c rendering context would be simple as pie. "It's only a few function calls" I had been told over and over again. I was sure I'd have no problems at all. 

Boy was I wrong. What follows are the steps I used to learn to develop a "simple" Windows application.

**Step 1: Search the web and follow a tutorial** 

The first two tutorials I discovered suggested using the MFC Wizard to generate your basic windows application. This seemed simple enough. I could just click, and go, and I would have a single window application which I could bend and tailor to my application's needs. 

I was horribly wrong. The application contained way too much default functionality for my needs which made it useless as a subject to learn from.

**Step 2: Ask the roommates**

I'm fortunate enough to be living with at least one Windows programmer in my apartment. He was kind enough to offer his assistance. However, I am always hesitant to ask for too much help when learning something new, fearing that I may become reliant on others for my answers. So I asked him for the simplest tip he could provide. How could I set up a basic project structure from which to learn basic Windows programming?

"Start with a Windows Console Application and build up from there!", he suggested with ease. This idea made me giddy. I had recently learned that WinMain was the entry point for a windows application (after numerous tutorials and the previous wizard generated sample shoved it in my face a few hundred times) and I was ready to begin my new experiment. I built a windows console application and imagine my surprise when it began with a function declaration as follows.

{% codeblock lang:cpp %}
    int _tmain( int argc, char *argv[] ) {}
{% endcodeblock %}    

Ok, I'm smart enough to understand that _tmain is nothing but a redefinition of main. I'm also smart enough to realise that I wasn't seeing what I was expecting. I had told the Wizard I wanted MFC support enabled.

**Step 3: Pretend nothing is wrong and forge ahead anyway**. 

Question: What had I done wrong?

Answer: I had selected a Windows Console application. 

Looking back this is exactly what I wanted, but at the time it did nothing to ease my fears. I began to construct a Window by following the MSDN linking structure as follows. 

1. Search for CreateWindow. Find CreateWindow. Read function declaration.
2. Find CreateWindowEx. Read function declaration.
3. Find RegisterClassEx. Read function declaration.
4. Find WINDCLASSEX structure. Read structure information.
5. Play fanfair and gain +1 to Windows API INT and DEX.

I figured I would need a WinMain function. So being the fearless ( read: clueless ) programmer I was, I blew away the silly looking _tmain and replaced it with an empty WinMain declaration. Into that WinMain declaration I placed my WINDCLASSEX structure, my RegisterClassEx function call, and my call to CreateWindow. 

Finally I was getting somewhere!

Time to compile and run... uh oh... link error?

Can't find main?

My mind was boggled. I could find nothing in my project settings for my other Wizard generated applications that I was missing. Did I forget some obscure prayer to the Windows gods to make them forget _tmain ever existed?

**Step 4: Realize that those feelings of fear and doubt were right. _Something is horribly wrong_**

Until this point I was only bothered by the fact that Windows Applications seemed to magically know that WinMain is their entry point. Up to this point I just chalked it up to some extra includes or settings linked through including _windows.h_. 

But I had included windows.h, and now my fears were realized. There was something I didn't do! To quote Eddie Izzard's sketch on Armageddon and Computers, "What, what haven't I done? Just tell me and I'll do it! Uh.. no, I can't tell you." 

I searched the web. Pleaded with my computer. Why wouldn't it work? Then I finally noticed a setting under project properties and linker. It would seem that I can toggle a setting which can be changed from Console to Windows. Eureka!

Compile, Link, Success!

Run? Nothing, not even a flash. 

In my excitement I had forgotten about the half empty global Windows Procedure function I had left alone, and I had left out calls to Display and Update my window. 

While adding the missing calls I added a basic event loop which would PeekMessage, look for quit, and quit as necessary. A TranslateMessage and DispatchMessage later I had a working windows application! It opens, it has a minimize and maximize button, and even a close X!

Now if I can only make it object oriented. 

That's an entry for another day.

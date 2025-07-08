---
layout: post
title: FreeRice. com and Automaton
wordpress_id: 107
wordpress_url: /archive/2007/11/19/freericecom-and-automaton/
comments: true
categories:
- programming
tags:
- javascript
---

I had recently become aware of a website named [FreeRice. com](http://freerice.com "FreeRice.com: Learn vocabulary while feeding the hungry."). This site provides a vocabulary game where one identifies synonyms for words with an ever increasing difficulty. Since I could always use a better vocabulary the site intrigued me. I played the game for a few hours but was in no way satisfied with my progress. At roughly one correct answer every two seconds I'd rank up 18,000 grains of rice an hour. Unfortunately, once I reached the higher levels I was averaging only 3 out of every 4 questions right.

While 13,500 (75% of my estimated optimal efficiency) grains of rice is a lot, it was nowhere near satisfactory. After joking about my "horrible rice metrics" at work, I mused that I should write a [Greasemonkey](http://www.greasespot.net/ "The Greasemonkey Firefox Extension.") script which would play the game better than I could possibly hope to. As the rest of my work day rolled on I became more and more intrigued by the idea. There was absolutely no reason why I couldn't write a very simple AI to play the FreeRice.com game.

Were there reasons why I shouldn't?

I knew the most obvious reason:

This wasn't a controlled experiment. If the script spun out of control and was allowed to play over and over I could risk exhausting FreeRice.com's funds.

Because I didn't want to be responsible for the downfall of a potentially lucrative source of food for impoverished children  I initially abandoned my bot. Despite my fears, curiosity eventually got the best of me and I began implementing my bot. I started by implementing a simple timing method limiting page requests to once every 10 seconds for debugging purposes, just in case.

<!--more-->

Flash forward a day or so and I had a working FreeRice.com bot named "Automarice". The bot had a number of interesting features which I found fun. First and foremost the bot kept statistics on its "correctness" per level it visited. These statistics were provided both over every answer given for a single level, as well as for the last hundred answers. These answers were provided as a simple HTML table benieth the FreeRice. com advertisements.

[![Automarice - Statistics](/images/posts/2007/11/freerice-stats.jpg)](/images/posts/2007/11/freerice-stats.jpg "Automarice - Statistics")

The AI behind Automarice was simplistic at best. I have no formal training in Artificial Intelligence and as such I just tried to make the bot behave as I would. To implement the AI the bot was given a few things. First, the bot was given a dictionary which it could use to store words and definitions. Second, the bot was set to record the associations it remembered learning from playing the game. In this way the bot was given a "memory" of previous correct answers. The bot started out with random play. If the bot was unsure of the answer it would select one answer at random, and would record the result. In this way the bot would slowly build a large vocabulary and increase its level.

The algorithm was improved on slightly by allowing the bot to reduce it's probable correct answer set by excluding potential answers which it already knew that did not match the given question word. This did introduce incorrect answers when new synonyms were learned, but since it improved the general case it was considered a good thing. The thought process of the bot was identified in the UI by striking through answers it believed were incorrect, and underlining the answer it would chose. If the answer was a guess it would append a question mark to that answer.

[![Automarice - List Changes](/images/posts/2007/11/freerice-list.jpg)](/images/posts/2007/11/freerice-list.jpg "Automarice - List Changes")

Finally, I implemented a dictionary and statistics exporter and importer. An export would generate an HTML page containing JSON representations of the internal dictionary and statistics. When this export file was opened it would trigger Automarice to import the data.

My bot contained a number of functional bugs. For example, if both the bot and the user played at the same time, the bot would produce script errors. However, since my bot was able to play the game successfully these errors didn't really bother me.

After reducing the wait time from 10 seconds to a random number between 2 to 10 seconds per question I let my bot go for a few hours. After my bot gained an accuracy of 78% on level one, it looked like it would gain 1 or 2 levels every hour or so.

Satisfied with my progress I retired my bot. While I am interested in releasing the source code I do not want to provide a plug and play method for taking down FreeRice.com. As such the source code will remain locked up.

[![Automarice - Full View](/images/posts/2007/11/freerice-full.thumbnail.jpg)](/images/posts/2007/11/freerice-full.jpg "Automarice - Full View")

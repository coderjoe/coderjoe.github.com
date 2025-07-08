---
layout: post
title: The RND benchmarks
wordpress_id: 14
wordpress_url: /archive/2006/08/12/the-rnd-benchmarks/
comments: true
categories:
- programming
tags: []

---
Recently, a [digg article](https://www.digg.com/programming/JavaScript_templating_system_Display_HTML_blazingly_fast "JavaScript templating system - Display HTML blazingly fast") featured a Javascript templating system called [RND](https://amix.dk/index.py/permanentLink?id=161 "RND - fast and simple JS template system").

RND is touted as a "fast and simple JS template system". I can categorically state that it is indeed fast and simple. Those are exactly the reasons why I like it.

You're probably asking yourself "Well how fast is it?" . So fast in fact, that the author decided to post benchmarks of his solution against similar solutions written using innerHTML, the W3C DOM functions, and [AmiJS](https://orangoo.com/labs/?page_id=39 "AmiJS"). His benchmarks showed time and time again that his solution was notably faster than the pure DOM function methods! This surprised me to say the least, so I decided to take a look.

<!--more-->

Now you're probably want to ask me "Joe, if you like it, why do all this work?" Well, simply because I was bored and I was curious.

I quickly found issue with the basic dom example in the initial version of the benchmark.

The first thing I noticed was line 34:

```javascript
    span.appendChild(div);
    div.appendChild(img);
    AJS.RCN(cnt, span);
```

Wait a second? Why are we using AJS if we want to test basic DOM.

A quick look at AJS. RCN gives us:

```javascript
    //Shortcut: AJS.RCN
    replaceChildNodes: function(node/*, nodes...*/) {
        var child;
        while ((child = node.firstChild))
            node. removeChild(child);

        if (arguments.length < 2)
            return node;
        else
            return this.appendChildNodes.apply(this, arguments);
        return node;
    },
```

That seems like a lot of extra processing for the sake of this benchmark, so I just replaced the AJS. RCN call with the following:

```javascript
    while(cnt.firstChild) {
        cnt.removeChild(cnt.firstChild);
    }
    cnt.appendChild(span);
    cnt.appendChild(div);
```

Well, that's a lot shorter!

I almost thought I was done, then I saw a lingering innerHTML used in the basic DOM test being used to create a text node. Shouldn't we be using the dom function [createTextNode](https://www.quirksmode.org/dom/w3c_core.html#fourmethods "createTextNode()")?

A quick rewrite modified the entire function. At that point I added functionality to compare the output of the different tests against each other, and in the process changed the majority of the files. The new version is available in [this](/images/posts/2006/08/html_rnd_benchmark-updated.zip "benchmark-updated.zip") zip.

The archive contains the following files:

- test. html - The original test file I was comparing against.
- test-fixed. html - My "fixed" version of the test with corrected basic DOM.
- test-unfairdom. html - While I was writing this solution, a poster to [the blog's comments](https://amix.dk/index.py/permanentLink?id=161 "amix.dk : RND - fast and simple JS template system") by the name of Matt made passing mention that while loops are slower in Internet Explorer. I have not tested this, but just in case I created this version, which uses a hacky if statement instead of a while loop to remove the elements. This is sort of cheating, since I make use of the fact that I already know how many elements would be placed in the element before we have to replace them.

It's also worth noting that in my examples I changed the number of times the test is run from 10 to 20 as I got less variation in my averages. YMMV.

Please check it out! Correct me where I'm wrong, and let me know where I'm right. I like to learn from my mistakes. :)

I was going to post my benchmark results, but I can only test against Konqueror and Firefox right now. I welcome results from the internet at large. ;)

Update:

The same Matt from before was kind enough to note that my previous implementation is not fair, as it does not simulate a templated system but just creates static elements! So I've made modifications to my benchmark in order to correct this mistake. :)

It's not perfect, but it's my last attempt. I'm way too tired to continue.

You can find the file [here](/images/posts/2006/08/html_rnd_benchmark-updated2.zip "html_rnd_benchmark-updated2.zip")

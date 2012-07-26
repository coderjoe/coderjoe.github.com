--- 
layout: post
title: wmain vs _tmain
wordpress_id: 43
wordpress_url: /archive/2007/04/18/wmain-vs-_tmain/
comments: true
categories: 
- Coding
tags: 
- C/C++
- windows
---

Once again I find myself awake at 1:00am perusing my site access logs. Tonight I noticed something particularly interesting.. a decent number of people coming to my site visited the site in reference to the search query "wmain vs _tmain". 

Being the helpful individual that I try to be, I have decided that since so many of you are reaching my site from these terms, that I may as well provide a short and sweet answer to the question. 

What is wmain, what is _tmain, and how do they relate?

Every C/C++ programmer I know is familiar with the main() function. This function being, of course, the entry point into your C or C++ application. 

Much like main, wmain is also an entry point into your application it differs only in that it is the wide character version of this entry point. So if you wanted to support unicode in your application, it would be wise to use wmain for parsing of command line arguments and environment variables. It is important to note that the wmain unicode entry point is Windows specific. 

Finally, _tmain is a Windows specific #define defined in TCHAR. h header file. This define resolves to wmain if UNICODE is defined, or the classic main() if UNICODE is not defined. 

And now your search is no longer futile. Enjoy wandering C/C++ programmer. I hope I have helped. 

Source: [http://msdn2.microsoft.com/en-us/library/6wd819wh(VS.80).aspx](http://msdn2.microsoft.com/en-us/library/6wd819wh%28VS.80%29.aspx)

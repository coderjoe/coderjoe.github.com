--- 
layout: post
title: Reflection | noitcelfeR
wordpress_id: 44
wordpress_url: /archive/2007/04/23/reflection-noitcelfer/
comments: true
categories: 
- coding
tags: 
- projects
- school
- computer-graphics-2
---

Our raytracer has been significantly expanded. First, we added reflection, which was cool... but everything looked like glass balls. Second, we added distributed rays for reflections which gave us wonderful blurry reflectionsThird, we applied this distribution to shadow calculations to get ourselves some soft shadows. Finally, we added simple pre-rendering of a rotation around a scene using a distance from to position a point a distancefrom our camera to rotate around. 

Take a look:

[![Raytracer Assignment - Reflection](/images/posts/2007/04/raytracer-reflection.thumbnail.png)](/images/posts/2007/04/raytracer-reflection.png "Raytracer Assignment - Reflection")

With fuzzy shadows:

[![Raytracer Assignment - Fuzzy Shadows](/images/posts/2007/04/raytracer-fuzzyshadows.thumbnail.png)](/images/posts/2007/04/raytracer-fuzzyshadows.png "Raytracer Assignment - Fuzzy Shadows")

Animation even:

<object type="application/x-shockwave-flash" data="/images/posts/2007/04/raytracer-animation.swf" height="300" width="400"><param name="movie" value="/images/posts/2007/04/raytracer-animation.swf" /></object>

(The jerky motion is an artifact of the video screen-cap and not of the raytracer)

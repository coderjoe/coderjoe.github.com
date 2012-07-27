--- 
layout: post
title: Using the libnds example template Makefiles
wordpress_id: 88
wordpress_url: /archive/2007/07/30/using-the-libnds-example-template-makefiles/
comments: true
categories: 
- coding
tags: 
- C/C++
- nintendo-ds-homebrew
- tutorial
- devkitpro
- devkitarm
- linux
---

Of the different methods for setting up a project, using the provided template Makefiles is by far the easiest. 

Packaged with the [Nintendo DS examples](http://sourceforge.net/project/showfiles.php?group_id=114505&package_id=159894 "NDS Examples. Windows users should NOT use this. Use the auto updater instead.") package that you downloaded (you did download the examples package at [my suggestion](/archive/2007/07/23/nintendo-ds-homebrew-tools-of-the-trade/ "How to set up a Nintendo DS Homebrew tool chain.")... didn't you?) there is a directory called "templates". 

This directory contains a number of template project directories, each designed to make use of the environment variables set during the tool chain install step. 

Using these templates is a very simple process. 
I will describe how to do this both in Linux and in Windows. 
Following in the grandest of programming traditions, lets call our project "helloworld".

**In Linux:**

First lets create a directory for our project in our home directory:

{% codeblock lang:bash %}
    mkdir ~/helloworld
{% endcodeblock %}

Next lets copy over the arm9 template ( I assume you've extracted the examples archive to your devkitPRO directory ):

{% codeblock lang:bash %}
    cp -R ${DEVKITPRO}/examples/templates/arm9/* ~/helloworld/
{% endcodeblock %}

That's all there is to it!

Each template already comes with a default main.c file containing the equivelent of a hello world application, so you're ready to go!

To test it, change to the helloworld directory and type make.

{% codeblock lang:bash %}
    cd ~/helloworld/make
{% endcodeblock %}

**In Windows:**

The instructions for Windows are almost identical to the instructions for Linux. The only differences between the two are really the Windows style commands and paths. 

Create a new folder for your project. 

_**Note: You must make sure that your project directory path does not contain any spaces!**_

For this reason I would suggest creating a directory under c:devkitPro called "projects" in which you will put all of your NDS Homebrew Projects. 

Once the directory has been created, copy everything inside the directory "C:\devkitPro\examples\ndstemplates\arm9" into your new project directory. 

To build your project open a command shell

Start -&gt; Run -&gt; Type "cmd" -&gt; click 'Ok'

Change directories to your project directory

{% codeblock lang:bash %}
    cd c:\devkitPro\projects\helloworld
{% endcodeblock %}

type 'make'

If all is set up correctly in either operating system, when your make process is complete you should find two files one called helloworld. nds and one called helloworld. ds. gba. These two files are for the different respective types of NDS Flash Carts. 

If you boot up your new NDS program you will see the [drunkencoders.com](http://www.drunkencoders.com/ "The Drunkencoders. com website.") "Hello DS dev'rs" hello world app!

Congratulations, you have your first project. 

For more information read the documentation provided with the example templates, and poke around the provided example code.

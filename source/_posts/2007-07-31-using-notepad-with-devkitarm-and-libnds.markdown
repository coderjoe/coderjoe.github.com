--- 
layout: post
title: Using Notepad++ with devkitARM and libnds
wordpress_id: 90
wordpress_url: /archive/2007/07/31/using-notepad-with-devkitarm-and-libnds/
categories: 
- Coding
tags: 
- C/C++
- nintendo-ds-homebrew
- tutorial
- devkitpro
- devkitarm
- linux
- notepad++
- sdk
---

First follow the instructions for creating a [template based project](/archive/2007/07/30/using-the-libnds-example-template-makefiles/ "Using the provided Makefile based templates."). 

Once you have that set up you're almost finished. 

All you need to do is set up the relevant application binds so you can build your project from within [Notepad++](http://notepad-plus.sourceforge.net/ "Get Notepad++ here!").

Unfortunately Notepad++ is not an IDE, as such it was not designed to compile applications. In order to do this we need a few helper scripts that Notepad++ can call to build and clean our project. 

I've taken the liberty of creating a "build script" to help in this process. 

Download the [Notepad++ Project Build Helper Script](/images/posts/2007/07/npp-buildscript.zip "The Notepad++ Project Build Helper Script") file [here](/images/posts/2007/07/npp-buildscript.zip "The Notepad++ Project Build Helper Script") and extract its contents to "c:\Program Files\Notepad++".

** Note: Extracting this archive will remove any existing NppExec scripts you already have defined! Merge the configuration files together if you wish to maintain your existing scripts.**

Extracting the archive will set up two NppExec scripts called "Build Project" and "Clean Project". These two scripts will build and clean the project respectively. In addition it will bind the NppExec run dialog to F8. 

Now to compile your project just open a file in your projects source directory, hit F8, select "Build Project", and click "Ok"

When you run the build script a command console will open in Notepad++ which will display the result of the build. 

If there are any errors in the build the errors will be displayed in the console. Individual errors can be double clicked to jump to the line on which the error occurred. 

You now have everything you need to develop in Notepad++.

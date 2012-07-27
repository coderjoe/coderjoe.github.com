--- 
layout: post
title: Using KDevelop with libnds and devkitARM
wordpress_id: 89
wordpress_url: /archive/2007/07/31/using-kdevelop-with-libnds-and-devkitarm/
comments: true
categories: 
- coding
tags: 
- C/C++
- nintendo-ds-homebrew
- tutorial
- devkitpro
- devkitarm
- kdevelop
- linux
- sdk
---

[KDevelop](http://www.kdevelop.org/ "The official KDevelop website.") is a full featured IDE for the [K Desktop Environment](http://www.kde.org/ "The official K Desktop Environment website."). 

In order to take full advantage of the facilities KDevelop has to offer, we're going to take an existing template based project, and import it as a Makefile project in KDevelop. In order to do this, first [create a template based project](/archive/2007/07/30/using-the-libnds-example-template-makefiles/ "Instructions on setting up a template based project.") as described in the "[Using the provided template Makefile](/archive/2007/07/30/using-the-libnds-example-template-makefiles/ "Using the provided Makefile based templates.")" tutorial. 

Now that you have your project directory set up it's time to import the directory into KDevelop and make a KDevelop project file. 

To do this, click the "Project" menu, and then the "Import Existing..." to bring up the import existing project dialog. Select the project directory you made in the first part of this tutorial and give the project a name. 

For project type you're going to want to select either "Generic C Project (Custom Makefiles)" or "Generic C++ Project (Custom Makefiles)" your choice of C or C++ doesn't matter too much at this juncture, so just stick with C. We select "Custom Makefiles" because we want to use the provided nds-example template makefile. 

Finally enter your name and e-mail address and click next. When it asks you if you want to populate the project with files from the source, go ahead and click yes. 

You now have a project file for your project directory!

Unfortunately you're not done yet. If you attempted to compile your project now you'd notice that you wouldn't get very far. KDevelop will start with a clean environment for the project, so we need to set DEVKITARM and DEVKITPRO in our project. 

To do this click "Project" then "Project Options" then select "Build Options" and finally the "Make" tab. There will be a section for environment variables. Add the appropriate variables for DEVKITARM and DEVKITPRO and click "Ok". At this point your project should now successfully compile!

You could start developing right now, but you'd quickly notice that code completion doesn't work for types and functions. This is because KDevelop needs to be told where the devkitARM and libnds include files reside. 

To set this select "Project" then "Project Options" and choose "C++ Support". At the bottom of the dialog there is a section for custom "Code Completion Databases" this is really just a collection of paths to the include files you'll be using to develop your application. 

Create one of type "KDevelop Custom Directory PCS Importer" and provide the paths to the devkitARM and libnds include directories. If you followed the environment instructions exactly these should be:

{% codeblock lang:bash %}
    /usr/local/devkitPRO/devkitARM/include
    /usr/local/devkitPRO/libnds/include
{% endcodeblock %}

Click next and name the PCS importer something witty and original like... oh... "NDS Homebrew Includes". 

Click ok and you should now have working code completion!A word of warning, there is a known issue with the current stable KDevelop (3. 2 tree) which causes typedefs for structs of the form below not to work.

{% codeblock lang:bash %}
    typedef struct {
        struct members
    } typeName;
{% endcodeblock %}

Any structs declared as such will not complete correctly. In addition, KDevelop will not code complete #define variables such as the VRAM_A_* types. I have yet to find a way to fix this. 

So you can compile and code complete. But I'll bet my dinner that you want to be able to actually EXECUTE our compiled source so that the "Run" command does what you would expect right? Well, if you've installed an emulator you can tell KDevelop to use that emulator to execute your nds file. 

To set the emulator as your executable click "Project" and "Project Options" then select "Run Options" enter the full path to your emulator on the executable line, and in the arguments line give the full path to your project NDS file. In most cases this will just be the name of your project directory with .nds at the end. For our helloworld project the resulting file will be "helloworld.nds". 

You now have a full featured KDevelop project!

**One word of warning: If you did set an executable in the Run Options, then every time you open up the project options KDevelop will screw this section up. You'll need to edit the file to remove the "file://" that KDevelop inserts at the beginning.**

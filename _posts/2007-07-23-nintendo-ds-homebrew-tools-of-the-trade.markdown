---
layout: post
title: "Nintendo DS Homebrew: Tools of the Trade"
wordpress_id: 85
wordpress_url: /archive/2007/07/23/nintendo-ds-homebrew-tools-of-the-trade/
comments: true
categories:
- programming
tags:
- nintendo-ds-homebrew
- tutorial
---

**How the heck do you do this?**

There are few things more essential to the budding homebrew developer than their development environment. As we're just starting out, we have yet to even get our environment together. As such our first task should be to gather our tools and get ready to install.

There are two very important packages every homebrew developer should be aware of.

The first of these two is a package called devkitARM. DevkitARM is a full compiler toolchain for the ARM chipset on which all Nintendo DS games run.

**Why do you need a toolchain?**

Because executables differ from platform to platform. If you just take your home Visual Studio install and compile a "hello world" application, it will compile for your host operating system and architecture. Unfortunately the set of instructions that your (likely intel) CPU and the instructions that the Nintendo DS's ARM CPUs understand are not very similar at all. As such you need a set of tools which can create executables for your target platform.

**Getting devkitARM.**

[DevkitARM](http://www.devkitpro.org "The devkitPro official website.") provides just those tools, as well as an additional set of tools which should make your homebrew development that much more fun.

Now that you're excited to get those files, devkitARM can be found at the following addreses:

For windows, you'll want the devkitPro updater, which is a full installer for windows, and will get you up and running with minimal work.

[Download the devkitProUpdater for Windows from Sourceforge.](http://sourceforge.net/project/showfiles.php?group_id=114505&package_id=160396 "A link to the devkitProUpdater for Windows. The BEST way to install devkitPro in Windows!")

For Linux or Mac OSX, you'll want to grab the binaries for devkitARM at the following address:

(There are windows binaries as well, but windows users should just use the super spiffy auto updater.. it's much easier.)

[Download the devkitARM binary archive from Sourceforge](http://sourceforge.net/project/showfiles.php?group_id=114505&package_id=124207 "A link to the devkitArm binaries for Linux, and Mac OSX,")

Now that your programming arsenal has increased by one cool package, it's time to get your Nintendo DS development library.

**Getting libnds.**

The only library you should concern yourself with at this point is libnds. Libnds began as a series of useful #define statements to make Nintendo DS development a bit easier. Over time it evolved into a full development library with support for most of the functionality of the Nintendo DS. Through libnds, the enterprising developer even has support for 3d through a series of functions which look incredibly similar to OpenGL.

If you're running Linux or Mac OSX you can get the library here:

[Download the libnds source archive from Sourceforge](http://sourceforge.net/project/showfiles.php?group_id=114505&package_id=151608 "Download libnds source to build in Linux or Mac OSX.")

If you're running Windows, don't fret, the auto updater will fetch libnds for you!

**Example code anyone?**

The final archive I would suggest everybody have on hand is the latest copy of the nds examples. This archive contains a series of example code showing most of the implemented functionality within libnds.

As above, Linux and OSX users use the below URL. Windows programmers should use the auto updater to get these files.

[Download the Nintendo DS example code from Sourceforge](http://sourceforge.net/project/showfiles.php?group_id=114505&package_id=159894 "Download the NDS example code source here!")

Tune in later for information on how to [turn these archives into a full fledged development environment](/archive/2007/07/23/setting-up-an-nds-homebrew-tool-chain-in-linux-and-mac-osx-ok-windows-too/ "The next in the tutorial series: Setting up the toolchain!")!

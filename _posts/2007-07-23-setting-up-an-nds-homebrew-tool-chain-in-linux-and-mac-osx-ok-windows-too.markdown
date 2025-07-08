---
layout: post
title: Setting up an NDS Homebrew tool chain in Linux and Mac OSX! (Ok... Windows too...)
wordpress_id: 86
wordpress_url: /archive/2007/07/23/setting-up-an-nds-homebrew-tool-chain-in-linux-and-mac-osx-ok-windows-too/
comments: true
categories:
- programming
tags:
- nintendo-ds-homebrew
- tutorial
---

> **UPDATE:** Given the updates made in the DevkitPro project since this article was written, it is quite out of date. For Linux, there is a little bit of hope! Commenter Namoul has created an installer script which can be used to get your development environment up and running. Find it here: [http://lmn.mooo.com/projects/devkitpro-sh](http://lmn.mooo.com/projects/devkitpro-sh)

Well, I realize I had promised to give instructions for both Windows and Linux, but as it turns out, the instructions for Windows are so simple it's almost laughable.

Are you windows users ready?

**Installing devkitARM and setting up your environment in Windows.**
1. Run the updater script you downloaded in the previous section.
2. Select devkitARM, libnds, the examples, programmers notepad
3. Finish the install

That's right. That's it. You're done Windows users. Now go have a coffee while us linux users get ourselves up and running. :)

**Installing devkitARM and setting up your environment in Linux and Mac OSX.**

To be honest, the process isn't all that much more complex, but it does assume you know a little bit about setting environment variables.

The first thing you'll need to do is make sure you've downloaded the devkitARM binary package, the libnds source package, and the example code package mentioned in the previous post.

**Step 1) Setting up the directory structure: **

First we need to set up a development path. This path can be anywhere, but for the sake of this tutorial we'll assume you're installing to /usr/local/devkitPRO/.

The first thing we need to do is create our directory structure:

For now this is as simple as
```bash
    mkdir /usr/local/devkitPRO
```

But by the time we're finished it should look something like
```bash
    /usr/local/devkitPRO
    /usr/local/devkitPRO/devkitARM/
    /usr/local/devkitPRO/libnds/
```

**Step 2) Installing the devkitPro binaries:**

Next we'll want to uncompress our devkitARM tar. bz2. Assuming you've downloaded the devkitARM archive to your home directory, this can be acomplished by changing to the devkitPRO directory we've just created and running:
```bash
    cd /usr/local/devkitPRO/
    tar -xjvf ~/devkitARM_r20-linux.tar.bz2
```

the devkitARM tar.bz2contains a root directory called devkitARM which when compressed will contain the toolchain and a series of helpful binaries located within its "bin" directory.

**Step 3) Decompress the libnds source:**

Next we'll need to decompress libnds. Unlike the devkitARM archive, libnds does not contain it's own base directory, so we should create one for it now, and decompress to that directory.

```bash
    mkdir /usr/local/devkitPRO/libnds
    cd /usr/local/devkitPRO/libnds
    tar -xzvf ~/libnds-20070503.tar.bz2
```

Now you have the source and tool chain necessary to build libnds into a fully fledged library for your linking pleasure. Unfortunately, if you're at all familiar with Linux, you've likely already typed make, and to your surprise you've received a warning!

We need to set up some environment variables so the makefiles know where the tool chain and other libraries live.

**Step 4) Set some environment variables:**

First we need to set the DEVKITPRO variable to point to our devkitPRO install directory:
```bash
    export DEVKITPRO=/usr/local/devkitPRO
```

Then we need to set DEVKITARM to point to our devkitARM install location
```bash
    export DEVKITARM=${DEVKITPRO}/devkitARM
```

To make things easier for me, I just added the following three lines to the bottom of my ~/. bashrc file so every interactive shell would have access to these environment variables.

```bash
    #Set Variables for DEVKIT_PRO
    export DEVKITPRO=/usr/local/devkitPRO
    export DEVKITARM=${DEVKITPRO}/devkitARM
```

**Step 5) Compile libnds**:

Now that we have our environment variable set, we can compile libnds.
Just go back to our libnds directory and type make!

```bash
    cd /usr/local/devkitPRO/libnds
    make
```

If all went well, you should see a bunch of text fly by, and eventually successful completion!

**Step 6) Bake until golden brown:**

Congratulations, you now have a successfully built Nintendo DS development tool chain and libraries.

If you'd like to test your toolchain you can extract the example source tarball that I suggested you download in the previous tutorial, and type make in it's root directory. If everything is correctly set up, it should create a Nintendo DS ROM for each example in the examples directory.

The examples may not make much sense now, but make sure to poke around the examples. They're one of the most useful resources a Nintendo DS homebrew developer has at his or her disposal.

**Final Notes:**

A final suggestion would be to install a Nintendo DS Emulator on your computer if you haven't already. This way you can begin experimenting with your Nintendo DS examples even if you don't yet have a DS or development hardware. However, when it comes to testing your shiny new Nintendo DS programs, nothing beats booting them on a Nintendo DS.

I would highly recommend that every budding Nintendo DS developer own at least one Nintendo DS. Besides... when you're not developing you can pop in your Mario Kart or Tetris cartridge and enjoy Nintendo's awesome handy-work!

Now that you have a working tool chain set up, you should go on to [configure your IDE of choice](/archive/2007/07/10/so-you-want-to-make-nintendo-ds-homebrew/ "Tutorial index with links to setting up devkitARM and libnds for various IDEs.") to use devkitARM and libnds.

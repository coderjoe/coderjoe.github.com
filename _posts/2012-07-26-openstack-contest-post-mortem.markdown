---
layout: post
title: "How I Won the OpenStack Birthday Contest"
date: 2012-07-26 19:01
comments: true
published: true
categories:
- programming
tags:
- ruby
- obfuscation
---

Last week I stumbled across the ["AppFog OpenStack Birthday Contest"](http://openstack.appfog.com) via Twitter.

I'd been quietly following AppFog's progress since I received a PHPFog beta invite a year or two ago. At the time I hadn't had a reason to give their service a try since I wasn't a PHP guy. However, spurred by the allure of a coding contest and the large number of platforms AppFog supports, I finally had a reason to poke around!

Anticipating that I'd be up against stiff competition I chose to place some additional requirements on my contest submission. As the AppFog Blog [recently showed](http://blog.appfog.com/other-amazing-entries-from-the-openstack-contest/) I wasn't wrong about the competition. My hope was that the extra work I put into the submission would grant me at least an honorable mention.

What I didn't expect was that I'd end up [winning the competition](https://web.archive.org/web/20140616071932/http://blog.appfog.com/congratulations-to-joe-bauser-on-winning-the-openstack-obfuscated-code-competition/)!

I am honored that my code was chosen as the winning submission. As a small show of thanks, I've decided to detail my experiences with the AppFog beta as well as annotate the de-obfuscation of my code step-by-step.

<!--more-->

An AppFog First Impression
--------------------------

My first concern was getting an AppFog instance configured on which to develop. While I do have a little bit of experience dealing with shared hosting and VPS services, I have only minimal exposure to PaaS providers such as [AppFog](https://www.appfog.com). At first I was worried about the work required to configure an application, but AppFog's simple interface had me finished with the process before I knew I had started!

After cloning an [example project](https://github.com/appfog/af-ruby-sinatra) published by AppFog on github, installing the [AppFog gem](https://rubygems.org/gems/af), and running a deploy I was done! Zero to functioning application in almost exactly 2 minutes!

Thanks to the simple in AppFog deployment process I was able to concentrate entirely on my code, and not my hosting.

Some Speed Bumps
----------------

Unfortunately I can't say that my experience with AppFog was completely problem free. During development I ran into occasional trouble with deployment. Applications that ran perfectly fine locally started timing out regularly during staging. When they staged they would fail to start. A few of these problems were of my own making and were easily resolved by checking the support area of the AppFog site.

For the more difficult problems, the AppFog support team met or exceeded the customer service I'd grown accustom to from both [Dreamhost](https://dreamhost.com) and [Linode](https://linode.com/). With the help of the AppFog support team I was able to fix my deployment problems and submit my solution. I was especially impressed by their responsiveness given I hadn't paid them a cent!

Enough about problems... on to the code!

Creating a Contest Submission
-----------------------------

Now, I love obfuscation just as much as the next guy, but I wanted my submission to be slightly more than just a block of funny looking text. I wanted my submission to have a few extra (admittedly simple) levels of trickery involved. In order to satisfy this urge I added the following extra personal submission requirements:

1.  The code must be pretty.
2.  The code must be obfuscated in at least two separate ways.
3.  The final "Happy Birthday OpenStack" text must exist in some way outside of the source code itself.

In order to understand how I achieved these objectives lets walk backwards through the obfuscation steps to reveal the original source code.

**Note:** What follows is a step-by-step analysis of the code itself, performed through the lens of someone de-obfuscating my submission. The contents of this analysis are targeted at someone with minimal Ruby experience. If you feel you understand Ruby you may get more enjoyment out of attempting the de-obfuscation yourself!

Understanding the Obfuscation
-----------------------------

None of the methods of code obfuscation I used are terribly complex. The [full submission](https://github.com/coderjoe/happy_birthday_openstack/blob/a422a74da8b565c897079bc4b0af49490a4bdeca/app.rb) is plenty pretty with ASCII art declaring my affection for the people running the contest.

The ASCII art itself was created with the help of an open source tool called [jp2a](https://github.com/cslarsen/jp2a/) by [Christian Stigen Larsen](https://github.com/cslarsen/). The generated ASCII was then used to format the resulting block of obfuscated code. This method allowed me to obfuscate the code first, then tweak the ASCII art as I saw fit.

Despite how complicated it may look my submission boils down to the following four lines of code:

```ruby
c = %w(A bunch of characters with lots of whitespace).join
z = 'Znqr_ol_Wbr_"pbqrewbr"_Onhfre'
XYZZY = __FILE__
send(%w(ale lava).reverse.join.split('').uniq.join.reverse.to_sym,c.split(/0x/)[1..-1].map {|b|(b.to_i(16)>>2).chr}.join)
```

Despite separating the lines of code it is still plenty hard to understand what it is doing. Lets take it line by line:

```ruby
c = %w(A bunch of characters with whitespace).join
```

The above uses Ruby's quoted array syntax to turn a bunch of whitespace separated strings into an array of values.

```ruby
#The whitespace separated tokens become strings in the array
%w(one two three) # => ["one", "two", "three"]

#Both using an uppercase W will function the same
%W(one two three) # => ["one", "two", "three"]

#If your tokens need to include parentheses the quoted character can be almost any
#special character. If the special character is one of {, [, (, or < then the end
#character will be the matching closing delimiter. For other characters it is just
#the same delimiter
%w[one two three] # => ["one", "two", "three"]
%w!one two three! # => ["one", "two", "three"]
%w|one two three| # => ["one", "two", "three"]
```

This means that the code takes the humongous block of gibberish and turns it into a huge array of tokens. The ```join``` method is immediately called on the response, meaning the variable ```c``` contains a large string of characters.

The second line is a red-herring rot13 representation of the phrase ```Made_by_Joe_"coderjoe"_Bauser"``` which can be safely ignored.

The third line:

```ruby
XYZZY = __FILE__
```

Does nothing more than store the value of ```__FILE__``` (which represents the name of the currently running file) into a constant variable named ```XYZZY```.

The last line is the meat and potatoes of this file. It has the job of interpreting the huge block of text! If we create some temporary variables we can see what is going on a little easier.

```ruby
# We've seen %w() once before already so we know what that does
# the rest of the methods operate on that value producing the symbol
# value :eval
arg1 = %w(ale lava).reverse.join.split('').uniq.join.reverse.to_sym

# The second argument gets its value from the C variable defined at the top of the file.
# C is first split by the string 0x into a new array. The first element of the array is
# omitted using the range [1..-1] and map is applied to the new array of values.
arg2 = c.split(/0x/)[1..-1].map do |b|
	b = b.to_i(16) # Each value of the array is converted from a hex value into an integer
	b = b >> 2     # Right shifted by two
	b.chr          # And the integer value is converted to an ASCII character and returned
end

# This newly formed array of ASCII characters is joined together!
arg2 = arg2.join

# Now that we have our two arguments, they're used in the Object#send method.
# Object#send sends a given message to an object (in our case identified by the symbol
# :eval stored in arg1) providing the arguments which follow.
send( arg1, arg2 )
```

Now we know what the obfuscated code is! It's a series of ASCII characters, left shifted twice, converted to hexadecimal, and separated by the string '0x'. It is being used as the value to ```send(:eval,string)``` which means it must be more ruby code!

Why did I do this? I had started with simple hex conversion, but I found I needed a larger canvas on which to draw my ASCII art, so the left shifting increased the hex values enough that I had a little more text to work with!

We Have to Go Deeper
--------------------

Now that we know how the code is interpreted, we print it by replacing the code creating the ```:eval``` symbol with the symbol ```:print``` and the application will dutifully output the vanilla code!

The output of which is as follows:

```ruby
require 'zlib'
require 'base64'
require 'coderay'
require 'uri'
require 'sinatra'

module Wizardry
	def self.do_some_magic( request )
		iywRFqowCSzrNe = [
			"==geeZ6bD0nS1mp8AGeHt2VR+Tmyq3mD7rt5jLg7\nu9dxALYH4m/+GLeH6FKh4IlsCvFaCqFMQvZg0jN6YjuY2g/PR8zCu2FvLkE/\n/jX629hL4wfVvJOm6YGkvLne1Gn/xHgYFnhGzxYxzuzU14EScm+/Jv8ErvIB\nZcdx1ftynZWYIyxucKb9tVdqU1aR9saTVwak7lKC0jKS7bHEHzLfNbuZehgs\npu7/KtYaZKNbwezVdLdWK9iWRuE2CuIwDRcFklLJ9sUF5/ehQEzALF0jdpNe",
			"=oGq17wPIy0sZJ/JgLjZvX7vpr/D7vtCK+C0/Nr3fOv6\nQpIN7OCFRp3M4lxUwHyWOdTJBXHf3phtezdqJtPv00BFFJF+Z/SnLmANQeID\n6sl8Qf5oiuQ97DvchW+aqUT2k3Nn5e/8mj5lGx4j6q/Uze77MGmDe9R7OPey\n7/N0ZSimTZE9lpOmJzS7mgpqoRdsJLuLbNAmTnwnZikMjnuCl/pTainokOWE\nRuxORDYibKrh8cMQ7691WoTRaTekD2FwP598I7LRXbHmIWV6jciXQMcQ0IU8\ng6q22SaDJZUEq0LEN2FG2fWONOFFWw94DE9WVasFQsappUZYsLVKXZdpNanq\nIYdgWUNq5EAWWBtlHmIaXflSSwdENagIKQQim+dgdsmpPwUM3zr3hxQhIo4s\n9+frt2amxYSza4o7lIq02HLS9qkFXK4wErVWK0F26xwVm/chQEjArFEkdpNe",
			"Ucu1Mbw+U0DbGjZeP+3JdnhF\naqjeaQeBKyBy5sKhJSzbU4z+hSyYoBpZA1sOXKC4DBvCXFQnyQCXwHkTPJyP\nvTbgExcGmPH5ZUBFH6QG0skB6npa/e+nwuW6OWIGC+AO8ODzgt+tvMqnq0pN\ngLIjU65cteemMlpwvEDjD7qfU6ahsnP8unG81nnevf99W66TyIN21gqgkznp\nzowRSeTJFylFUKB4mmzFhxc7eE0dksLmOaayBv13mCCSyZQCGwDworrCYbBv\nxbuB52nsNxxNBwaC+DajTw1TZrftBFGw3wf7TR4g1LlOyomra+YbLjVVpb7Z\nDi7Cr5gl3mwaWy/FG74Vp5PH1rdyhoz2r1R76fsKrO06/90T71Ftcz+whgLg\n9mt+XDxf2tSqWdRdSzMVfGU89hBmvkYYxzISMj0FFG3TX/ZxUAjwP91jNqNe"
		]

		eval Zlib::Inflate.inflate(Base64::decode64(iywRFqowCSzrNe[0].reverse))
	end
end

set :protection, except: :ip_spoofing

get '/src' do
	response.headers['i_has_a_secret'] = URI.encode('=IQCg7GAG4MTJ5yCN')
	response.headers['lulz'] = URI.encode("lllululuulull")
	File.open(XYZZY) { |f| CodeRay.scan( f.readlines.join, :ruby).page }
end

get '/' do
	content_type :txt
	Wizardry::do_some_magic( request )
end
```

We now have some code which looks more like a standard Sinatra application!

Those of you following along at home will notice that your code looks slightly different. The contents of the ```get '/src' do``` block and line 15 of the source above were originally obfuscated in a similar manner to the original file. I've taken the liberty of revealing them to you now, since the process of doing so is identical to the previous process we used.

There are a few portions of this code we should make note of:

1.  The first index of the array ```iywRFqowCSzrNe``` is a reversed base64 encoded zlib compressed chunk of Ruby code. It is reasonable to assume that the other two array locations may be similarly encoded.
2.  The /src path sets some response headers. Their purpose isn't immediately obvious.
3.  The definition of ```XYZZY``` in the original file is important. The value of ```__FILE__``` changes when it is located inside of a string being run through ```eval```. Storing the value of ```__FILE__``` in ```XYZZY``` allowed this obfuscated code to keep track of the current file name.

If we go ahead and print the value of the first array we find that the first array value executes the second array value, which in turn executes the third. De-obfuscating this code manually we end up with code similar to the following.

```ruby
# Fetches the value of the HTTP response header i_has_a_secret and stores it to the array
uri = URI.parse("http://#{request.host}:#{request.port}/src")
response = Net::HTTP.get_response(uri)
iywRFqowCSzrNe[0] = response.get_fields('i_has_a_secret').pop
```

```ruby
#Fetch the value of the 'lulz' HTTP request header
uri = URI.parse("http://#{request.host}:#{request.port}/src")
response = Net::HTTP.get_response(uri)
lulz = response.get_fields('lulz').pop.split('')

#Using the value of the 'lulz' HTTP header, alter the case of the characters in the host
#name on which the application is running, and store the result in the second array location
iywRFqowCSzrNe[1] = request.host.slice(/^[^.]+/).split('').map do |x|
	if lulz.pop == 'u'
		x.upcase
	else
		x.downcase
	end
end.join
```

```ruby
# Gets the name of the local variables defined in the scope of the method
# Looks for one which, when combined with the values from above represents
# a reversed base64 zlib compressed string, and returns that value
l = local_variables
l.each do |v|
	iywRFqowCSzrNe[2] = v.to_s

	begin
		l = Zlib::Inflate.inflate(Base64::decode64(iywRFqowCSzrNe.join.reverse))
		break
	rescue
		#Yeah, catching all exceptions is horrible.. um.. chalk it up to "obfuscation"
	end
end
return l
```

These small blocks of code, which were hidden in the array ```iywRFqowCSzrNe``` reveal their importance.
They also help me achieve the rest of my goals for my obfuscated code!

When these chunks of code are run in order as a result of a request to the root path the result is the string "Happy Birthday OpenStack" being output as a text/plain document.

Reviewing the Objectives
------------------------

I was very happy with the ways in which I met my original goals.

1.  The code looked pretty thanks to ASCII images in original obfuscated code.
2.  The code itself was obfuscated in two separate ways
    *  The original code is obfuscated through hex encoded shifted integer character values
    *  The internal code is encoded in reversed base64 zlib compressed strings
3.  The actual string "Happy Birthday OpenStack" isn't present in fully de-obfuscated code
    *  The string itself is yet another reversed base64 encoded zlib compressed string split into 3 parts
    *  The first part is the host name of the machine running the code
    *  The second part is the value of the ```i_has_a_secret``` HTTP response header from the /src URI
    *  The final part is the variable name of an array in the source code itself!

I was quite happy that I managed to come up with three distinct methods in which to store the text "Happy Birthday OpenStack". I hope you have enjoyed this de-obfuscation walk-through and post-mortem.

# Week 5 Research - Streams and Buffers

## What are streams and buffers?

### Buffers

A buffer is a temperary storage spot for a chunk of data that is being transferred from one place to another.

The buffer is filled with data, and then passed along. This transfers small chunks of data at a time.

![NetNinja illustration of Buffers](https://i.imgur.com/58CBuoQ.png)

Here we can see the DATA is being sent. The buffer will collect chunks of the data until it is full. Once the buffer is full it will be sent on to be received (for example, by a server, or web browser)

### Streams

![NetNinja illustration of buffers](https://i.imgur.com/YM4seGp.png)

Here the stream is shown as multiple small pink blocks. It would be inefficient if these were all sent between programs/server 


### Why are streams and buffers used?


## How to set up a simple buffer and stream in Node JS

First, open a new directory and create some files. In Terminal:

``` mkdir stream-and-buffer ```
``` cd stream-and-buffer ```
``` touch bigtextfile.txt ```
``` touch streamfile.js ```
``` code . ``` 
``` npm init ```

Set up npm (press enter several times).

Open streamfile.js and enter the following text:
``` javascript 
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/bigtextfile.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk)
})
```

This sets up a function "myReadStream()", which will send data in packages (or "chunk"s) from bigtextfile.txt.

At the moment, bigtextfile.text is empty. We need a lot of text in this file to demonstrate the buffer sizes, as by default the chunks send about 65000 characters at a time.

We can use [gutenberg.com](https://www.gutenberg.org/) to provide a utf8 file of a book. For example, we used [Robinson Crusoe, by Daniel Defoe](https://www.gutenberg.org/files/521/521-0.txt)

![gutenberg.com landing page](https://i.imgur.com/jxnWK21.png)
(gutenberg.com landing page)

![gutenberg.com Robinson Crusoe](https://i.imgur.com/2YBDYDY.png)
(Robinson Crusoe, available in utf-8)

Copy and paste the text into our bigtextfile.txt and save.

Now let's run our streamfile.js code:

``` node steamfile.js ```

This will write the contents of the file to the terminal:
![](https://i.imgur.com/CRg29H0.png)


<details><summary>Project Brief</summary>
<p>

* Research what streams and buffers are in Node. Why are they needed, when do we use them, and how are they used in conjunction with each other?
* Create a file streamFile.js, so that when a user runs the command node streamFile.js bigtextfile.txt, it streams the contents of the file to the users terminal.
* Need a big file? How about a book.
* To start with, you could hardcode the file path bigtextfile.txt into the js file instead of passing it as a command-line argument.
* (Bonus) Allow an additional argument to be provided in the command to specify a time interval of how often a chunk of text from the file is streamed to the terminal. E.G node streamFile.js bigtextfile.txt 1s
</p>
</details>




## Further information
1. [NetNinja Tutorial for Streams and buffers (episode 13)](https://www.youtube.com/watch?v=E3tTzx0Qoj0)
2. [NetNinja Tutorial for Streams and buffers (episode 14)](https://www.youtube.com/watch?v=E3tTzx0Qoj0)
3. [NetNinja Tutorial for Streams and buffers (episode 15)](https://www.youtube.com/watch?v=DvlCT0N7yQI)
4. [dustinpfister explains how to use the createReadStream options to define the maximum chunk size](https://dustinpfister.github.io/2018/08/18/nodejs-filesystem-create-read-stream/)

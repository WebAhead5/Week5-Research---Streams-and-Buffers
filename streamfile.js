//To start with, you could hardcode the file path bigtextfile.txt into the js file instead of passing it as a command-line argument.

var fs = require('fs');
var http = require('http');

var myReadStream = fs.createReadStream(__dirname + '/bigtextfile.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk)
})




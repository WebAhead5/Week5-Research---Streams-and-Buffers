//To start with, you could hardcode the file path bigtextfile.txt into the js file instead of passing it as a command-line argument.

let fs = require('fs');
var text = fs.readFileSync("./bigtextfile.txt");
var textByLine = text.split("\n");


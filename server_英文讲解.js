'use strict';
const fs = require('fs');
// 01 load the fs module to our application

let rawdata = fs.readFileSync('student.json');
// 02 use the readFileSync function and -下面有更多解释

// pass it the relative file path to the file that we want to read

let student = JSON.parse(rawdata); 
// we want to read the file in its JSON format

// This is where the JSON.parse comes into play.

/* JSON.parse(a_JSON_file)
              handles parsing the raw data, 
              converts raw data to ASCII text, 
              and parses the actual JSON data 
              into a JavaScript object
*/

console.log(student);  

/*
readFileSync function 
reads data from a file 
in a synchronous manner. 

This function 
blocks the rest of the code 
from executing 
until all the data is read from a file. 

The function is particularly useful 
when your application has to load configuration settings before 
it can perform any other tasks.
*/
// Data Exchange Example using Ajax, which allows you to make HTTP Requests
// Load Modules
var XMLHttpRequest = require('xhr2');

// Variables
const HTTP = new XMLHttpRequest();
const url = "https://my-json-server.typicode.com/Madison-Davis/Personal-IT-DataExchange-OregonRoyalty/db";

// Code
HTTP.open("GET", url); // creates a method
HTTP.send(); // executes the method
HTTP.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
        console.log(HTTP.responseText)
    }
}

/*
onreadystatechange = defines a function whenver the property "readyState" changes

readyState tells us how the status of the XMLHTTP Request is progressing:
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

when the status is done progressing (readyState == 4), its value can be:
status	200: "OK"
403: "Forbidden"
404: "Page not found"
*/

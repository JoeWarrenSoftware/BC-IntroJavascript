console.log("Hello from script.js");

// What is this?
// Window is the top level container available to Javascript that represents the Browser Window itself
// It contains the document (webpage) as a child, and all javascript global variables and methods exist at this level
// Some Window related functions are also available from this level (Open/Close)
console.log(window);

// What is the difference between window and document?
// The document contains the webpage itself
console.log(document);

console.log("Second Hello from script.js");

// What is the difference between document and document.documentElement?

// Document itself is a node of the webpage

// Document.documentElement returns the HTML of the webpage

console.log(window.document);
console.log(document.documentElement);

// what are the children of the body element?

// The direct children elements under body

console.log(document.body.children);

var token = document.cookie;
if(token)
{
    console.warn(token);
}

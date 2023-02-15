
 //steps
// Create a html page
// Add a button, <p> element and <a href> link
// Add an id to the <a href> attribute,and <p>
// Write a javascript function to get the HREF attribute of the link 
//This is done with the getElementById method.

function myFunction() {
 const link = document.getElementById("link").href;
  document.getElementById("same").innerHTML = link
} 
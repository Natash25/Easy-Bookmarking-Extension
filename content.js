// content.js
var firstHref = $("a[href^='http']").eq(0).attr("href");
//this uses jQuery to log the URL of the first external link on the page in content.js

console.log(firstHref);

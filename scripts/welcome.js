/* yes/no popup*/
function myFunction(){
var txt;
var r = confirm("Are you ready to learn about Farm to Bar?!?!");
if (r == true) {
window.location ="../Index.html";
}
else {
window.location ="NO.html";
}
document.getElementById("enter").innerHTML = txt;}

var d = new Date();

var time = d.getHours();

if (time>=17)

{

text = "It's After 5 Time For a Beer!!";
document.getElementById("beer").innerHTML = text;
}

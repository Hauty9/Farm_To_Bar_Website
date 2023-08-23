/* Time of Day Variable*/
var d = new Date();

var time = d.getHours();

if (time<12)

{

text = "Good morning";
document.getElementById("days").innerHTML = text;
}

else if (time>=12 && time<16)

{

  text = "Good Afternoon";
  document.getElementById("days").innerHTML = text;


}

else

{

  text = "Good Evening";
  document.getElementById("days").innerHTML = text;


}
function myFunction(){
  var txt;
  var person = prompt("Please enter your name:", "name");
  if (person == null || person == "Guest") {
    txt = "User cancelled the prompt.";
  }
  else {
    txt =  person + "! Welcome to Farm to Bar";
  }
  document.getElementById("name").innerHTML = txt;
}

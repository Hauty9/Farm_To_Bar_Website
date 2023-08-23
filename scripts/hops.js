/* Harvest Day variable*/
switch (new Date().getDay()){
  case 6:
    text = "Sample hops Day";
    document.getElementById("days").innerHTML = text;
    break;
  case 0:
    text = "Rest Day";
    document.getElementById("days").innerHTML = text;
    break;
  default:
    text = "Harvest Day!!!";
document.getElementById("days").innerHTML = text;
}

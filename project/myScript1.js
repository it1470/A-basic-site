function costButton(){
  var breadPrice , sidePrice, meatPrice, meat = 0 , flag = 0;
  var total;
  if(document.getElementById('WhiteBread').checked == true){
    breadPrice = 1.5;
  }else if (document.getElementById('BlackBread').checked == true) {
    breadPrice = 1.5;
  }else if (document.getElementById('BriocheBread').checked == true) {
    breadPrice = 1.80;
  }else if (document.getElementById('MultigrainBread').checked == true) {
    breadPrice = 1.80;
  }else {
    breadPrice = 2.00;
  }

  if (document.getElementById('Frenchfries').checked == true) {
    sidePrice = 1.00;
  }else if (document.getElementById('MashPotatoes').checked == true) {
    sidePrice = 1.20;
  }else if (document.getElementById('MacAndCheese').checked == true) {
    sidePrice = 1.20;
  }else {
    sidePrice = 1.00;
  }

  if (document.getElementById('Pork').checked == true) {
    meat = meat + 1.5
    flag++;
  }
  if (document.getElementById('Beef').checked == true) {
    meat = meat + 1.5;
    flag++;
  }
  if (document.getElementById('Chicken').checked == true) {
    meat = meat + 1.5;
    flag++;
  }
  meatPrice = meat;
  if(flag!=0){
    document.getElementById("calcost").value = meatPrice + sidePrice + breadPrice;
    total = meatPrice + sidePrice + breadPrice;
    window.alert("Your total is: "+total);
  }else {
    document.getElementById("calcost").value = null;
    window.alert("You have to pick at least one type of meat.");

  }
}

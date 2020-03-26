$(document).ready(function() {
  $("#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var sex = $("select#gender").val();
    var carStyle = $("#select#carStyle").val();
    var carYear = parseInt($("input#carYear").val());
    var carAge = 2020-carYear;
    var quote = 0;

    if (age){
      quote = (100 - age) * 3;
      if (sex === 'male' || age < 26) {
        quote += 50;}
      if (carStyle === "sportsCar") {
        quote += 200;}
      if (carStyle === "van" && carAge>20) {
        quote += 100;}  
      if (carAge <= 5 || carStyle === "sedan") {
        quote -= 50;}
      
      if (quote < 50){
        quote=50;     
      }
      
      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});
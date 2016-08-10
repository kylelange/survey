//Biz logic
var steps = function(num1){
  return num1 * 30;
}


// UI logic
$(document).ready(function() {
  $("#suveyuser form").submit(function(event) {
    var input = $("input#name").val();
    var address = $("input#address").val();
    var monthSteps = parseInt($("input#monthSteps").val());
    var beverage = $("#beverage").val();
    var sando = $("#sando").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var favColor = $("#favColor").val();
    var dob = $("#born").val();
    monthSteps = steps(monthSteps);
    $(".name").text(input);
    $(".address").text(address);
    $(".monthSteps").text(monthSteps);
    $(".beverage").text(beverage);
    $(".sando").text(sando);
    $(".flavor").text(flavor);
    $(".born").text(dob);
    $(".favColor").text(favColor);
    $("#receipt").show();
    event.preventDefault();
    });
  });

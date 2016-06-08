$( document ).ready(function() {

//Your jquery goes here

$("#bananaman1").hide();
$("#bananaman2").hide();
$("#bananaman3").hide();
$("#bananaman4").hide();
$("#bananaman5").hide();
$("#bananaman6").hide();
$("#invisible1").hide();

$("#startpage").click(function() {
  $("#bananaman1").show();
  $("#bananaman2").hide();
  $("#startpage").hide();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
  $("#clicktostart").hide();
});

$("#stage1button1l").click(function() {
  $("#bananaman2").show();
  $("#bananaman1").hide();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
   $("#bananaman5").hide();
$("#bananaman6").hide();
});

$("#stage1button3d").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").hide();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
      $("#bananaman5").show();
$("#bananaman6").hide();
});

$("#stage1button2r").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").hide();
  $("#bananaman3").show();
  $("#bananaman4").hide();
         $("#bananaman5").hide();
$("#bananaman6").hide();
});

$("#stage2button2r").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").show();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
           $("#bananaman5").hide();
$("#bananaman6").hide();
   
});

$("#stage2button1l").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").hide();
  $("#bananaman3").hide();
  $("#bananaman4").show();
});

$("#stage3button2r").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").hide();
  $("#bananaman3").hide();
  $("#bananaman4").show();
           $("#bananaman5").hide();
$("#bananaman6").hide();
});

$("#stage3button1l").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").show();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
           $("#bananaman5").hide();
$("#bananaman6").hide();
});

$("#stage4button1l").click(function() {
  $("#bananaman2").hide();
  $("#bananaman1").hide();
  $("#bananaman3").show();
  $("#bananaman4").hide();
           $("#bananaman5").hide();
$("#bananaman6").hide();
});

$("#stage4button2r").click(function() {
  $("#bananaman2").show();
  $("#bananaman1").hide();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
           $("#bananaman5").hide();
$("#bananaman6").hide();
});



$("#stage5button2r").click(function() {
  $("#bananaman2").show();
  $("#bananaman1").hide();
  $("#bananaman3").hide();
  $("#bananaman4").hide();
   $("#bananaman5").hide();
$("#bananaman6").hide();
});

$
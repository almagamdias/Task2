$(document).ready(function(){
   var chars = document.querySelectorAll("#character");
   var comics = document.querySelectorAll("#comicsCard");
   var input =document.querySelector("#search");
   var avengers = ["Loki", "Adam Warlock", "Hulk"];
   $(chars[1]).click(function(){
      $("#charDesc").show();
      $("#select").hide();
      $("#desc").css('max-height', '750px');
      $(this).css('transform', 'translate(0, -5px)');
   });
   $("#ch").click(function(){
      $(".mainChar").show();
      $(".mainComics").hide();
      $(".wiki").hide();
      $(this).css('color', '#9F0013');
      $("#c").css('color', 'black');
      $(".loadMore").show();
      $(".loadMore").css('width', '60%');
   });
   $("#c").click(function(){
      $(".mainChar").hide();
      $(".wiki").hide();
      $(".mainComics").show();
      $(".listCom").show();
      $(this).css('color', '#9F0013');
      $("#ch").css('color', 'black');
      $(".loadMore").css('width', '100%');
   });
   $(comics[1]).click(function(){
      $(".listCom").hide();
      $(".comicsView").css('display', 'flex');
      $(".loadMore").hide();
   });
   $(".back").click(function(){
      $(".comicsView").hide();
      $(".listCom").show();
      $(".loadMore").show();
   });
   $(".find").click(function(){
      $.each(avengers, function(i, v) {
         if ($(input).val().toUpperCase() == v.toUpperCase()) {
            $(".require").text("There is! Visit " + v + " page?");
            $(".require").css('color', '#03710E');
            $(".visit").show();
            return false;
         }
         else {
            if (!$(input).val()) {
               $(".require").text("This field is required");
            }
            else {
               $(".require").text("The character was not found. Check the name and try again");
            }
            $(".require").css('color', '#9F0013');
            $(".visit").hide();
          }
      });
   });
   $(".visit").click(function(){
      $(".wiki").css('display', 'flex');
      $(".mainChar").hide();
      $(".mainComics").show();
      $(".listCom").hide();
      $(".comicsView").hide();
      $(".loadMore").hide();
   });
});
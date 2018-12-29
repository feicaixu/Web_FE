$(document).ready(function(){
   $(".firstMenu").hover(function(){
         $(this).next().show();
   },function(){
         $(this).next().hide();
    });


    $(".secondMenu").hover(function(){
          $(this).show();
    },function(){
          $(this).hide();
     });

});
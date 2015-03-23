$(document).ready(function(){
  $("#img").mouseenter(function(){
    //alert(':)');
    $('img').attr('src','img/im2.png');
  });
  $('img').mouseleave(function(){
    $('#img').attr('src','img/im1.png');
  });

});

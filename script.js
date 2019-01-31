function etoile (){
   $(".image").fadeOut(700).delay(300).fadeIn(800);
}
$(document).ready(function(){
    setInterval('etoile()',2200);
});




$(document).ready(function() {
  //Toggle the visibility of the menu if the hamburger is clicked
  $(".hamburger-icon").click(function(){
    $(".menu-items-container")
      .toggle(150);
    });
//Testing comment
    //If the window is larger than 70 rem, show the menu items
    $(window).resize(function() {
      if ($(window).width() > rem(70)) {
        console.log("Working");
        $(".menu-items-container")
          .show();
        };
      });
});

//This function allows us to use rem values instead of pixels in JQuery
//In the code above, I use this to detect the window width in rems
function rem(remValue){
  var rem = parseFloat($("body").css("font-size"));
  return (rem * remValue);
}

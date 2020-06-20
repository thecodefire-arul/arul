// $(document).ready(function () {
//   $(".navBtn a").click(function () {
//     $(".overlay").fadeToggle(200);
//     $(this).toggleClass("btn-open").toggleClass("btn-close");
//   });
// });
// $(".overlay").on("click", function () {
//   $(".overlay").fadeToggle(200);
//   $(".navBtn a").toggleClass("btn-open").toggleClass("btn-close");
//   open = false;
// });


//Menu Button

$(document).ready(function() {
  $(".navBtn img").click(function() {
    $(".overlay").show(1000);
    $(".navBar").hide(1000);
  });
});

$(document).ready(function() {
  $(".close-nav img").click(function() {
    $(".overlay").hide(1000);
    $(".navBar").show(1000);
  });
});

$(document).ready(function() {
    $(".nav-links").click(function() {
      $(".overlay").hide(1000);
      $(".navBar").show(1000);
    });
});

$(document).ready(function() {
    $(".nav-headings").click(function() {
      $(".overlay").hide(1000);
      $(".navBar").show(1000);
    });
});
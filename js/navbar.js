$(document).ready(function () {
  $(".navBtn a").click(function () {
    $(".overlay").fadeToggle(200);
    $(this).toggleClass("btn-open").toggleClass("btn-close");
  });
});
$(".overlay").on("click", function () {
  $(".overlay").fadeToggle(200);
  $(".navBtn a").toggleClass("btn-open").toggleClass("btn-close");
  open = false;
});

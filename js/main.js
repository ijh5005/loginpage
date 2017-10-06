$( ".loginArea" ).animate({ top: "0px" }, 1000 );
$(".registerAreaForm").css("display", "none");
$(".registerInit").click(() => {
  $(".welcomeArea").fadeOut(500);
  setTimeout(function () {
    $(".registerAreaForm").fadeIn(500);
  }, 500);
});

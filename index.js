$(function () {
  $(".login-tab li").click(function () {
    $(this).addClass("active");
    $(this).siblings('.login-tab li').removeClass("active")

    let content = $(this).attr("data-alt")
    $(".container-inner > div").removeClass("active")
    $("#" + content).addClass("active")
  });
});

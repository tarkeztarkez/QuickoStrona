$(window).scroll(function () {
  if ($(this).scrollTop() == 0) {
    $(".navbar-shadow").css({
      "box-shadow": "none",
      "-moz-box-shadow": "none",
      "-webkit-box-shadow": "none",
    });
  } else {
    $(".navbar-shadow").css({
      "box-shadow":
        "rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px 1px",
      "-moz-box-shadow":
        "rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px 1px",
      "-webkit-box-shadow":
        "rgba(25, 28, 31, 0.04) 0px 8px 16px, rgba(25, 28, 31, 0.04) 0px -1px 0px 1px",
    });
  }
});

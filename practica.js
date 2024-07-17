$(document).ready(function () {
  $("#tracer-button").click(function () {
    $("#p-tracer").show();
    $("#p-tracer").css("color", "#DA6821");

    $("#p-neeko").hide();
    $("#p-yoshi").hide();
  });
  $("#neeko-button").click(function () {
    $("#p-tracer").hide();

    $("#p-neeko").show();
    $("#p-neeko").css("color", "#2E44B8");

    $("#p-yoshi").hide();
  });
  $("#yoshi-button").click(function () {
    $("#p-tracer").hide();
    $("#p-neeko").hide();

    $("#p-yoshi").show();
    $("#p-yoshi").css("color", "#0B7600");
  });

  $("#tracer, #neeko, #yoshi").hover(function () {
    onHover($(this));
  });

  $("#tracer, #neeko, #yoshi").mouseleave(function () {
    onMouseLeft($(this));
  });

  function onHover(element) {
    element.css("scale", "1.15");
    element.css("filter", "brightness(1)");
  }

  function onMouseLeft(element) {
    element.css("scale", "1");
    element.css("filter", "brightness(0.25)");
  }
});

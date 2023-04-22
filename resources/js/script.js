$(document).ready(function () {
  $(".js-section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "70px",
    }
  );

  //scroll on button

  $(".js-scroll-to-plan").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-plan").offset().top },
      2000
    );
  });
  $(".js-scroll-to-start").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-section-features").offset().top },
      1000
    );
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $(".js-wp-1").waypoint(
    function (direction) {
      $(".js-wp-1").addClass("animate__fadeIn");
    },
    {
      offset: "60%",
    }
  );
  $(".js-wp-2").waypoint(
    function (direction) {
      $(".js-wp-2").addClass("animate__fadeInUp");
    },
    {
      offset: "60%",
    }
  );
  $(".js-wp-3").waypoint(
    function (direction) {
      $(".js-wp-3").addClass("animate__zoomIn");
    },
    {
      offset: "60%",
    }
  );
  $(".js-wp-4").waypoint(
    function (direction) {
      $(".js-wp-4").addClass("animate__fadeIn");
    },
    {
      offset: "60%",
    }
  );

  $(".js-nav-icon").click(function () {
    let nav = $(".js-main-nav");
    let icon = $(".js-nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
  });
});

//    var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window')
//}, {
//  offset: '25%'
//})
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 2000);
});

$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

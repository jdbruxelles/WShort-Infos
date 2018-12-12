function updateNavBar (win) {
  var scrollTop = $(win).scrollTop();
  var navBar = $(".jdb-navigation");
  if (scrollTop > 0) {
    navBar.addClass("jdb-card-2");
  } else {
    navBar.removeClass("jdb-card-2");
  }

  if (scrollTop >= 120) {
    $("body").addClass("jdb-fixed-navbar")
      .find(navBar).addClass("fixed");
  } else {
    $("body").removeClass("jdb-fixed-navbar")
      .find(navBar).removeClass("fixed");
  }
}

$.fn.extend({
  slideshow: function (selector, ms, callback) {
    var i, ss, x = this.getElements(selector), l = x.length;
    ss = {};
    ss.current = 1;
    ss.x = x;
    ss.ondisplaychange = callback;
    if (!isNaN(ms) || ms === 0) {
      ss.milliseconds = ms;
    } else { ss.milliseconds = 1000; }

    ss.start = function() {
      ss.display(ss.current);
      if (ss.ondisplaychange) {ss.ondisplaychange();}
      if (ss.milliseconds > 0) {
        window.clearTimeout(ss.timeout);
        ss.timeout = window.setTimeout(ss.next, ss.milliseconds);
      }
    };
    ss.next = function() {
      ss.current += 1;
      if (ss.current > ss.x.length) {
        ss.current = 1;
      } ss.start();
    };
    ss.previous = function() {
      ss.current -= 1;
      if (ss.current < 1) {
        ss.current = ss.x.length;
      } ss.start();
    };
    ss.display = function (n) {
      $(ss.x).addStyle("display", "none");
      $(ss.x[n - 1]).addStyle("display", "block");
    };
    ss.start();
    return ss;
  }
});

$(document).ready(function() {
  updateNavBar(window);
  $(".toggle-mobile-menu").click(function(){
    event.preventDefault();
    $(this).parent(".jdb-bar").next("#jdb-header-mobile-accordion")
      .slideToggle();
  });
});

$(window).on("scroll", function() {
  updateNavBar(this);
});

// http://localhost:8080/siteweb/index.html
// https://bitly.com/pages/about
// https://bitly.com/blog/
// 575G$f06&20;
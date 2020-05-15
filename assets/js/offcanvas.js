(function (jQuery) {
  // Whole-script strict mode syntax
  "use strict";

  var __this, result;
  jQuery(".offcanva_btn").on("click", function (e) {
    __this = jQuery(this);
    e.preventDefault();
    result = jQuery(this).attr("data-canvas");
    result = result.replace(" ", "");
    jQuery(".advanced_blocks_offcanvas[id*=" + result + "]").toggleClass(
      "active"
    );
    jQuery("body").toggleClass("offcanvas_open");
    if (
      (jQuery(".advanced_blocks_offcanvas[id*=" + result + "]").hasClass(
        "with_overlay"
      ) ||
        jQuery(".advanced_blocks_offcanvas[id*=" + result + "]").hasClass(
          "push"
        )) &&
      jQuery("body").hasClass("offcanvas_open")
    ) {
      var appendContent = '<div class="offcanvas_overlay"></div>';
      jQuery(appendContent).prependTo("body").fadeIn();
    } else {
      jQuery("html,body").find(".offcanvas_overlay").remove();
    }
  });
  jQuery(".offcanvas_cancel").on("click", function (e) {
    __this = jQuery(this);
    e.preventDefault();
    __this.parents(".advanced_blocks_offcanvas").removeClass("active");
    jQuery("body").removeClass("offcanvas_open");
    jQuery("html,body").find(".offcanvas_overlay").remove();
    jQuery("body").removeClass("offcanvas_push");
  });

  jQuery(document).on("click", function (e) {
    var container = jQuery(
      ".offcanvas_content,.offcanva_btn,.plaire-offcanvas-inner,.plaire-search-btn"
    );
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      jQuery(".advanced_blocks_offcanvas").removeClass("active");
      jQuery("body").removeClass("offcanvas_open");
      jQuery("html,body").find(".offcanvas_overlay").remove();
      jQuery("body").removeClass("offcanvas_push");
      $(".plaire-offcanvas-nav .has-dropdown").find(".sub-menu").slideUp();
      $(".plaire-banner-search-container").removeClass("active");
    }
  });
})(jQuery);

/**
 * Created with JetBrains PhpStorm.
 * User: ralph
 * Date: 25.10.13
 * Time: 18:34
 *
 * This file contains all Drupal behaviours of the Grezan theme.
 *
 *
 */
(function ($) {

    /**
     * This behavior adds shadow to header on scroll.
     *
     */
    Drupal.behaviors.addHeaderShadow = {
        attach: function (context) {
            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 10) {
                    $("#header").css( "box-shadow", "0 4px 3px -4px gray");
                } else {
                    $("#header").css( "box-shadow", "none");
                }
            });
            $(window).on("load resize", function() {
                var ww = $(window).width(),
                    $header = $("#header");
                if (ww < 1340) {
                    $header.css({"width": Math.min(ww-30, 1280), "margin": 0, "padding": 0});
                    $header.find(".region-header").css("right", "32px")
                } else {
                    $header.css({"width": "1280", "margin": "0 -15px", "padding": "0 15px"});
                    $header.find(".region-header").css("right", "47px")
                }
            });
        }
    };

    /**
     * Adapts the columns top margin if the body contains a system message
     */
    Drupal.behaviors.messageMarginCorrection = {
        attach: function(context) {
            if ($("#messages").length > 0) {
                // a system message is contained in the body, reduce margin for columns
                $("#columns").css("margin-top", "20px");
            } else {
                $("#columns").css("margin-top", "180px");
            }
        }
    };

    /**
     * Allows full size clickable items.
     */
    Drupal.behaviors.fullSizeClickableItems = {
        attach: function () {
            var $clickableItems = $(".node-preis-wert.node-teaser .group-image-quote");

            $clickableItems.once('click', function () {
                $clickableItems.on('click', function () {
                    var $linkItem = $(this).siblings("div.field-name-field-picture");
                    window.location = $linkItem.find("a:first").attr("href");
                    return false;
                });
            });
        }
    };


})(jQuery);
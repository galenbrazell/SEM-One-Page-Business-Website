var setHeight = function() {

    var holderHeight = $(window).height();

    $(".hero-holder").css({ "height": holderHeight });

};

$(document).ready(setHeight);

$(window).on("resize", setHeight).resize();

$(window).load(function() {

    var theWindow = $(window),
        bg = $(".hero-image"),
        aspectRatio = bg.width() / bg.height();

    function resizeBg() {

        if ((theWindow.width() / theWindow.height()) < aspectRatio) {

            bg.removeClass().addClass('hero-image-height');

            var marginLeft = bg.width() / 2;

            bg.css({ "margin-top": "0", "margin-left": -marginLeft });

        } else {

            bg.removeClass().addClass('hero-image-width');

            var marginTop = bg.height() / 2;

            bg.css({ "margin-left": "0", "margin-top": -marginTop });

        }

    }

    theWindow.resize(resizeBg).trigger("resize");

});
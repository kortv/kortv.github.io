"use strict";

components.wdgt2Fn = function() {

    function stagger(elements, animDuration, animClass, delay, timeout) {
        if (timeout) $(elements).css({
            "-webkit-animation-delay": timeout + "ms",
            "animation-delay": timeout + "ms"
        })
        $(elements).delay(timeout).each(function(index) {
            var that = this;
            setTimeout(function() {
                $(that).css("visibility", "visible").addClass(animDuration + " " + animClass);
            }, delay * index);
        });
    }



    var loaderInterval = setInterval(loader, 2000)

    function loader() {

        TweenMax.staggerFromTo(".loader", 0.5, {
            autoAlpha: 0,
            visibility: "visible",
            width: 10,
            height: 10,
            left: "+=100",
            top: "+=100",
            borderWidth: 100
        }, {
            autoAlpha: 1,
            visibility: "visible",
            width: 400,
            height: 400,
            left: "-=100",
            top: "-=100",
            borderWidth: 0
        }, 0.15)

        TweenMax.from("#finger", 0.6, {
            rotationX: 25,
            rotationZ: 5
        })
    };
    loader();
    var j = 0;

    jQuery(document).on('touchstart click', "#wdgt2", function() {
        clearInterval(loaderInterval);
        $("#wrap").hide();

        if (j === 0) {
            j = j + 1;


            stagger(".cHouse", "animated2", "flipInX", 700);
            stagger(".st", "animated", "z00mIn", 700, 900);
            $("#circle").css("visibility", "visible").addClass("animated rotateIn");
            stagger(".txt", "animated", "fadeInDown", 300, 990);


            setTimeout(function() {
                j = 5;
            }, 5000);
        } else if (j === 5) {
            j = 0;
            $("#wdgt2").addClass("animated fadeOut");

            setTimeout(function() {

                j = 0;
                $("#wdgt2").removeClass("animated fadeOut");
                React.render(components.emp, Reveal.getCurrentSlide().children[0]);
                React.render(components["wdgt2"], Reveal.getCurrentSlide().children[0]);

                components["wdgt2Fn"]()
            }, 2000);
        }

    });
}

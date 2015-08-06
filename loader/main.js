$(document).ready(function() {

    "use strict";

    var tl = new TimelineLite(),
        tl1 = new TimelineLite(),
        tl2 = new TimelineLite(),
        j = 0;

    jQuery(document).on('touchend click', function() {
      $("#wawes").fadeOut();
        if (j === 0) {
            j = j + 1;
            tl.set("#c-w7", {
                delay: 0.01,
                height: "-=140",
                visibility: "visible"
            }, 0)
                .set("#c-w7-1", {
                    delay: 0.01,
                    visibility: "visible"
                }, 0)
                .staggerFrom(".c1", 1, {
                    top: "-=50",
                    autoAlpha: 0,
                    ease: Back.easeOut
                }, 0.3, 0)
                .set("#c-w7-3", {
                    transformOrigin: "right",
                    visibility: "visible"
                }, 0.5)
                .from("#c-w7-3", 1, {
                    scaleX: 0,
                    ease: Cubic.easeOut
                }, 0.5)
                .set("#c-w7-4", {
                    delay: 0.01,
                    height: "-=140",
                    visibility: "visible"
                }, 0)
                .set("#c-w7-5", {
                    delay: 0.01,
                    visibility: "visible"
                }, 0.8)
                .staggerFrom(".c2", 1, {
                    top: "-=50",
                    autoAlpha: 0,
                    ease: Back.easeOut
                }, 0.3, 0.8);
            setTimeout(function() {
                j = j + 1;
            }, 10);

        } else if (j === 2) {
            j = j + 1;
            tl1.to("#c-w7-4", 1, {
                height: 340,
                ease: Back.easeOut
            }, 0)
                .set(".c3", {
                    visibility: "visible",
                }, 0.3)
                .staggerFrom(".c3", 1, {
                    top: "-=50",
                    autoAlpha: 0,
                    ease: Back.easeOut
                }, 0.9, 0.3)
            .set(".st3", {
                    visibility: "visible",
                }, 0.5)
                .staggerFrom(".st3", 0.8, {
                    scale: 0,
                    ease: Cubic.easeOut
                }, 0.6, 0.5)
            .to("#c-w7", 1, {
                height: 340,
                ease: Back.easeOut
            }, 1.5);

            setTimeout(function() {
                j = 6;
            }, 4000);
        } else if (j === 6) {

            $("img, div").fadeOut(900);

            setTimeout(function() {
                location.reload();
            }, 1000);
        }

    });
});
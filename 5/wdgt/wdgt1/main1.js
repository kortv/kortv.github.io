"use strict";

components.wdgt1Fn = function() {

    var tl = new TimelineLite(),
        tl2 = new TimelineLite(),
        tl3 = new TimelineLite();

    var bottomInterval = false;
    var topInterval = false;

    $('#flowWrap, #icebig').addClass('animated flowBig');
    $("#icesmall").addClass("animated smallFlow")
    $('#dottop').addClass('animated shake');
    $('#dotbottom').addClass('animated shake');

    tl.restart();
    tl2.pause(0);
    tl3.pause(0);

    tl.from("#watertop", 1, {
            top: "+=800",
            ease: Back.easeOut
        }, 0)
        .from("#icebig, #dottop, #dotbottom", 1, {
            delay: 0.5,
            left: "+=1200",
            autoAlpha: 0,
            ease: Cubic.easeOut
        }, 0)

    .from("#icesmall", 60, {
        left: "+=1900",
        repeat: -1,
        ease: Linear.easeNone
    }, 0)

    $("#dottop").click(function() {
        $(this).removeClass("animated shake")

        tl2.staggerFrom(".top", 1, {
            scale: 0,
            autoAlpha: 0,
            ease: Back.easeOut
        }, 0.5, 0)
        tl2.play()
    })


    $("#dotbottom").click(function() {
        $(this).removeClass("animated shake")

        tl3.staggerFrom(".bottom", 1, {
            scale: 0,
            autoAlpha: 0,
            ease: Back.easeOut
        }, 0.5, 0)
        tl3.play()
    })

    $("#icesmall").click(function() {
        $("#wdgt1").addClass("animated fadeOut")
        setTimeout(function() {
            $("#wdgt1").removeClass("animated fadeOut")

            React.render(components.emp, Reveal.getCurrentSlide().children[0]);
            React.render(components["wdgt1"], Reveal.getCurrentSlide().children[0]);

            components["wdgt1Fn"]()

        }, 1500);
    })
}

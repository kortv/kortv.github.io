"use strict";

/*Reveal.addEventListener('somestate', function() {
    // TODO: Sprinkle magic
    var el = Reveal.getCurrentSlide();
    //$(el).innerHTML = "<div id=\"cont2\"><div id=\"flowWrap\"><div class=\"flow bottom\" id=\"linebottom\"></div><img class=\"flow bottom\" id=\"flagbottom\" src=\"img/flagbottom.png\" /><img class=\"flow bottom\" id=\"txtbottom\" src=\"img/txtbottom.png\" /><div class=\"flow\" id=\"dotbottom\"></div><div class=\"flow top\" id=\"linetop\"></div><img class=\"flow top\" id=\"flagtop\" src=\"img/flagtop.png\" /><img class=\"flow top\" id=\"txttop\" src=\"img/txttop.png\" /><div class=\"flow\" id=\"dottop\"></div></div><img class=\"bottom\" id=\"right\" src=\"img/right.png\" /><img class=\"bottom\" id=\"txtright\" src=\"img/txtright.png\" /><div id=\"watertop\"></div><img id=\"icesmall\" src=\"img/icesmall.png\" /><img class=\"flow\" id=\"icebig\" src=\"img/icebig.png\" /></div>"
    console.log(event)
    onLoad();
}, false);*/

Reveal.addEventListener('onLoad', function() {
    // TODO: Sprinkle magic
    onLoad2();
}, false);

Reveal.addEventListener('slidechanged', function(event) {
    if (event.previousSlide.attributes["data-state"]) {
        console.log(event.previousSlide.attributes["data-state"])
        event.previousSlide.children[1].innerHTML = ""
    }
    if (event.currentSlide.attributes["data-state"]) {
        switch (event.currentSlide.attributes["data-state"].nodeValue) {
            case "somestate":
                event.currentSlide.children[1].innerHTML = "<div id=\"flowWrap\"><div class=\"flow bottom\" id=\"linebottom\"></div><img class=\"flow bottom\" id=\"flagbottom\" src=\"img/flagbottom.png\" /><img class=\"flow bottom\" id=\"txtbottom\" src=\"img/txtbottom.png\" /><div class=\"flow\" id=\"dotbottom\"></div><div class=\"flow top\" id=\"linetop\"></div><img class=\"flow top\" id=\"flagtop\" src=\"img/flagtop.png\" /><img class=\"flow top\" id=\"txttop\" src=\"img/txttop.png\" /><div class=\"flow\" id=\"dottop\"></div></div><img class=\"bottom\" id=\"right\" src=\"img/right.png\" /><img class=\"bottom\" id=\"txtright\" src=\"img/txtright.png\" /><div id=\"watertop\"></div><img id=\"icesmall\" src=\"img/icesmall.png\" /><img class=\"flow\" id=\"icebig\" src=\"img/icebig.png\" />"
                console.log(event.currentSlide.children[1])
                onLoad();
                break;
            case "onLoad2":
                event.currentSlide.children[1].innerHTML = "<div id=\"flowWrap\"><div class=\"flow bottom\" id=\"linebottom\"></div><img class=\"flow bottom\" id=\"flagbottom\" src=\"img/flagbottom.png\" /><img class=\"flow bottom\" id=\"txtbottom\" src=\"img/txtbottom.png\" /><div class=\"flow\" id=\"dotbottom\"></div><div class=\"flow top\" id=\"linetop\"></div><img class=\"flow top\" id=\"flagtop\" src=\"img/flagtop.png\" /><img class=\"flow top\" id=\"txttop\" src=\"img/txttop.png\" /><div class=\"flow\" id=\"dottop\"></div></div><img class=\"bottom\" id=\"right\" src=\"img/right.png\" /><img class=\"bottom\" id=\"txtright\" src=\"img/txtright.png\" /><div id=\"watertop\"></div><img id=\"icesmall\" src=\"img/icesmall.png\" /><img class=\"flow\" id=\"icebig\" src=\"img/icebig.png\" />"
                console.log(event.currentSlide.children[1])
                onLoad2();
                break;

        }
    }
    //console.log(event.currentSlide.attributes["data-state"].nodeValue);

});

function onLoad() {

    var tl = new TimelineLite(),
        tl2 = new TimelineLite(),
        tl3 = new TimelineLite();

    document.getElementById("cont").innerHTML = "<div id=\"flowWrap\"><div class=\"flow bottom\" id=\"linebottom\"></div><img class=\"flow bottom\" id=\"flagbottom\" src=\"img/flagbottom.png\" /><img class=\"flow bottom\" id=\"txtbottom\" src=\"img/txtbottom.png\" /><div class=\"flow\" id=\"dotbottom\"></div><div class=\"flow top\" id=\"linetop\"></div><img class=\"flow top\" id=\"flagtop\" src=\"img/flagtop.png\" /><img class=\"flow top\" id=\"txttop\" src=\"img/txttop.png\" /><div class=\"flow\" id=\"dottop\"></div></div><img class=\"bottom\" id=\"right\" src=\"img/right.png\" /><img class=\"bottom\" id=\"txtright\" src=\"img/txtright.png\" /><div id=\"watertop\"></div><img id=\"icesmall\" src=\"img/icesmall.png\" /><img class=\"flow\" id=\"icebig\" src=\"img/icebig.png\" />"
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
        $("#cont").addClass("animated fadeOut")
        setTimeout(function() {
            $("#cont").removeClass("animated fadeOut")
            onLoad()
            console.log("ok")

        }, 2000);
    })
}




function onLoad2() {

    var tl = new TimelineLite(),
        tl2 = new TimelineLite(),
        tl3 = new TimelineLite();

    document.getElementById("cont2").innerHTML = "<div id=\"flowWrap\"><div class=\"flow bottom\" id=\"linebottom\"></div><img class=\"flow bottom\" id=\"flagbottom\" src=\"img/flagbottom.png\" /><img class=\"flow bottom\" id=\"txtbottom\" src=\"img/txtbottom.png\" /><div class=\"flow\" id=\"dotbottom\"></div><div class=\"flow top\" id=\"linetop\"></div><img class=\"flow top\" id=\"flagtop\" src=\"img/flagtop.png\" /><img class=\"flow top\" id=\"txttop\" src=\"img/txttop.png\" /><div class=\"flow\" id=\"dottop\"></div></div><img class=\"bottom\" id=\"right\" src=\"img/right.png\" /><img class=\"bottom\" id=\"txtright\" src=\"img/txtright.png\" /><div id=\"watertop\"></div><img id=\"icesmall\" src=\"img/icesmall.png\" /><img class=\"flow\" id=\"icebig\" src=\"img/icebig.png\" />"
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

    $("#cont2 #icesmall").click(function() {
        $("#cont2").addClass("animated fadeOut")
        setTimeout(function() {
            $("#cont2").removeClass("animated fadeOut")
            onLoad2()
            console.log("ok")

        }, 2000);
    })
}

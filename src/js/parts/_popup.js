
$(document).ready(function() {
    $("#moscow").click(function () {
        $(".popm").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});


$(document).ready(function() {
    $("#novgorod").click(function () {
        $(".popn").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});

$(document).ready(function() {
    $("#open-job").click(function () {
        $(".popv").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});
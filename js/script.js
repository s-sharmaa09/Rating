$(document).ready(function() {
    $("#rating-container div").hover(function() {
        $(this).prevAll().addBack().addClass("rating-hover")
    });

    $("#rating-container div").mouseout(function() {
        $(this).prevAll().addBack().removeClass("rating-hover")
    });

    $("#rating-container div").click(function() {
        for (var i = 0; i <= $(this).index() + 1; i++) {
            $(this).prevAll().addBack().addClass("rating-chosen")
            $("p").text("Rating: " + i);
            $(this).nextAll().removeClass("rating-chosen")

        }
    });

});
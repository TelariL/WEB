$(document).ready(function() {
    $(".accordion-section").click(function() {
        var section = $(this);
        var content = section.find(".accordion-content");

        if (content.is(":visible")) {
            content.slideUp();
        } else {
            /*if (section.data("section") === 1) {
            content.slideDown();
            } else {
            $(".accordion-section .accordion-content").slideUp();
            content.stop(true, true).slideDown();
            }*/
            $(".accordion-section .accordion-content").slideUp();
            content.stop(true, true).slideDown();
        }
    });
});
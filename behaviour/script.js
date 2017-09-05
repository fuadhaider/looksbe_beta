$(document).ready(function() {
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // Slide up and down toggle
    $("#login-icon").click(function() {
        $("#login-slide-down").slideToggle("slow");
    });
    $("#search-icon").click(function() {
        $("#search-slide-down").slideToggle("slow");
    });
    $("#message-icon").click(function() {
        $("#message-slide-down").slideToggle("slow");
    });
});

// Slide up for clicking outside
$(document).click(function() {
    $('#login-slide-down, #search-slide-down, #message-slide-down').slideUp();
});
$('#login-icon, #login-slide-down, #search-icon, #search-slide-down, #message-icon, #message-slide-down').click(function(event) {
        event.stopPropagation();
});

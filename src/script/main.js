$(document).ready(function(){
    timeTick();

    pickQuote();

    $("#idtime").delay(600).animate({ opacity: 0.88 }, 700);
    $("#iddate").delay(600).animate({ opacity: 0.66 }, 900);
    $("#idforecast").delay(600).animate({ opacity: 0.66 }, 700);
    $(".footer").delay(600).animate({ opacity: 0.66 }, 700);
})
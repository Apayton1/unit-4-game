// RANDOM NUMBER NEEDS TO BE GENERATED AT THE BEGINNING OF THE GAME BETWEEN 19 AND 120

$(document).ready(function () {


    var total = 0;
    var wins = 0;
    var losses = 0;

    var targetNumber = Math.floor(Math.random() * (102)) + 19;


    // function targetNumber (min,max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;

    //     console.log(targetNumber(19,120));
    // }


    $("#targetNumberText").text(targetNumber);


    // $(document).ready(function() {
    //     var Random = Math.floor((Math.random()* 120) + 1);
    //     document.getElementById("targetNumber").innerHTML= Random;
    // }) 

    //     $("targetNumber").text(Random);


    // EACH CHARACTER HAS TO HAVE A RANDOM NUMBER FROM 0 TO 12


    var number1 = Math.floor(Math.random() * 13) + 1;
    // $(".yourTotalText").text(number1);
    var number2 = Math.floor(Math.random() * 13) + 1;
    var number3 = Math.floor(Math.random() * 13) + 1;
    var number4 = Math.floor(Math.random() * 13) + 1;


    // I TRIED STORING THE NUMBER VARIABLES IN A FUNCTION SO THAT I COULD AVOID HAVING TO LIST EACH
    // VARIABLE IN THE IF ELSE STATEMENT.
    // var charNumberReset = function () {
    //     number1 = Math.floor(Math.random() * 13) + 1;
    //     // $(".yourTotalText").text(number1);
    //     number2 = Math.floor(Math.random() * 13) + 1;
    //     number3 = Math.floor(Math.random() * 13) + 1;
    //     number4 = Math.floor(Math.random() * 13) + 1;
    // };


    $("#garfield1").attr("data-value", number1);
    $("#blue2").attr("data-value", number2);
    $("#catdog3").attr("data-value", number3);
    $("#scoobydoo4").attr("data-value", number4);


    $(".click").on("click", function () {
        console.log($(this).attr("data-value"));
        total = total + parseInt($(this).attr("data-value"));
        $(".yourTotalText").text(total);

        if (total === targetNumber) {
            wins++;
            $(".winsText").text(wins);
            total = 0;
            // charNumberReset();
            // number1;
            // // $(".yourTotalText").text(number1);
            // number2;
            // number3;
            // number4;
            targetNumber;



        }
        else if (total > targetNumber) {
            losses++;
            $(".lossesText").text(losses);
            total = 0;
            // charNumberReset();
            // number1 = Math.floor(Math.random() * 13) + 1;
            // // $(".yourTotalText").text(number1);
            // number2 = Math.floor(Math.random() * 13) + 1;
            // number3 = Math.floor(Math.random() * 13) + 1;
            // number4 = Math.floor(Math.random() * 13) + 1;
            targetNumber;


        }
    })




    // // CALCULATIONS FOR TOTAL NUMBER, WINS, AND LOSSES
    // var totalScore = 0;
    // var wins = 0;
    // var losses = 0;

})
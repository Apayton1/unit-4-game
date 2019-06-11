// RANDOM NUMBER NEEDS TO BE GENERATED AT THE BEGINNING OF THE GAME BETWEEN 19 AND 120

$(document).ready(function () {

    var target = 0;
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
    var number1 = Math.floor(Math.random() * 13);
    // $(".yourTotalText").text(number1);
    var number2 = Math.floor(Math.random() * 13);
    var number3 = Math.floor(Math.random() * 13);
    var number4 = Math.floor(Math.random() * 13);

    $("#garfield1").attr("data-value",number1);
    $("#blue2").attr("data-value",number2);
    $("#catdog3").attr("data-value",number3);
    $("#scoobydoo4").attr("data-value",number4);

    
    $(".click").on("click",function(){
        console.log($(this).attr("data-value"));
        total = total + parseInt ($(this).attr("data-value"));
        $(".yourTotalText").text(total);

        if(total === target){
            wins++;
            $(".winsText").text(wins);
            
        }
        else if(total > target){
            losses--;
            $(".lossesText").text(losses);
        }
    })

    


    // // CALCULATIONS FOR TOTAL NUMBER, WINS, AND LOSSES
    // var totalScore = 0;
    // var wins = 0;
    // var losses = 0;

})
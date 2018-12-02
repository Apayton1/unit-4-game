// RANDOM NUMBER NEEDS TO BE GENERATED AT THE BEGINNING OF THE GAME BETWEEN 19 AND 120

$(document).ready(function() {
    var Random = Math.floor((Math.random()* 120) + 1);
    document.getElementById("targetNumber").innerHTML= Random;
}) 

    $("targetNumber").text(Random);
    

// EACH CHARACTER HAS TO HAVE A RANDOM NUMBER
    var number1 = Math.floor(Math.random()*12 + 1);
    var number2 = Math.floor(Math.random()*12 + 1);
    var number3 = Math.floor(Math.random()*12 + 1);
    var number4 = Math.floor(Math.random()*12 + 1);

// CALCULATIONS FOR TOTAL NUMBER, WINS, AND LOSSES
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
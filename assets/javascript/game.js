    // resetColor = function{
var randomBg = []
for ( var i = 0 ; i < 5 ; i++ ) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    randomBg.push(bgColor);
    console.log(randomBg);
}
    $("#b5").css("background-color", randomBg[0]);
    $("#b6").css("background-color", randomBg[1]);
    $("#b7").css("background-color", randomBg[2]);
    $("#b8").css("background-color", randomBg[3]);
    
// resetColor()    
// beginning variables
var totalWins = 0
var totalLosses = 0

var targetNumber = Math.floor(Math.random()*100 + 20);
console.log(targetNumber);

// fill in values for target number and wins/losses
$("#numberToGuess").text(targetNumber);
$("#u2").text(totalWins + "/" +totalLosses);

// counter varible for #3
var counter = 0
$("#u3").text(counter);

// random values for lower boxes
    resetRandom = function() {
var one = Math.ceil(Math.random()*12);
var two = Math.ceil(Math.random()*12);
var three = Math.ceil(Math.random()*12);
var four = Math.ceil(Math.random()*12);
// assigning values to boxes
$("#b5").attr("dataValue", one)
$("#b6").attr("dataValue", two)
$("#b7").attr("dataValue", three)
$("#b8").attr("dataValue", four)
    }
resetRandom()
// clicking a box gives you a value in #u1 and adds to the counter.  When they match the target value, the square turns green, when they go over it turns red.
$(document).on("click", ".box", function() {
    $("#u3").css("background-color", "orange");
    var boxValue = ($(this).attr("dataValue"));
    boxValue = parseInt(boxValue);
    counter += boxValue;
    console.log(counter)
    $("#u3").text(counter);
    $("#u1").text(boxValue);
    if (counter === targetNumber) {
        $("#u3").css("background-color", "green");
        counter = 0;
        totalWins++;
        console.log(totalWins)
        randomBg = []
        for ( var i = 0 ; i < 5 ; i++ ) {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            randomBg.push(bgColor);
            console.log(randomBg);
        }
            $("#b5").css("background-color", randomBg[0]);
            $("#b6").css("background-color", randomBg[1]);
            $("#b7").css("background-color", randomBg[2]);
            $("#b8").css("background-color", randomBg[3]);
            resetRandom()
    }
    else if (counter >= targetNumber) {
        
        counter = 0;
        totalLosses ++;
        $("#u3").css("background-color", "red");
        randomBg = []
        for ( var i = 0 ; i < 5 ; i++ ) {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            randomBg.push(bgColor);
            console.log(randomBg);
        }
            $("#b5").css("background-color", randomBg[0]);
            $("#b6").css("background-color", randomBg[1]);
            $("#b7").css("background-color", randomBg[2]);
            $("#b8").css("background-color", randomBg[3]);
            resetRandom()
    }
    $("#u2").text(totalWins + "/" + totalLosses);
    // if (totalWins = totalLosses) {
    // $("#u2").css("background-color", "orange");
    // }
    // else if (totalWins > totalLosses)  {
    //     $("#u2").css("background-color", "green");
    // }
    // else $("#u2").css("background-color", "red");
    

    
})





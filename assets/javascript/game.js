
$(document).ready(function() {
        
    //declare the viarables for the game
    
    var usersPick = 0; 
    var wins = 0; 
    var losses = 0;
    // var audio = new audio ("assets/audio/Button-onclick.mp3"); 

    //use math.floor method to randomize computerNumbers with values of 19-120
   
    var randomNumber = Math.floor(Math.random() * 101 + 19)
        $("#randomNumber").text(randomNumber); 
    
    //also use math.floop method for each cystal with values of 1-12
   
    var blueCrystal = Math.floor(Math.random() * 11 + 1)
    var orangeCrystal = Math.floor(Math.random() * 11 + 1)
    var pinkCrystal = Math.floor(Math.random() * 11 + 1)
    var purpleCrystal = Math.floor(Math.random() * 11 + 1)
    
    //.....GAME PLAY SECTION.......

    //create function to reset game when user either wins or losses
    
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 101 + 19)
        blueCrystal = Math.floor(Math.random() * 11 + 1)
        orangeCrystal = Math.floor(Math.random() * 11 + 1)
        pinkCrystal = Math.floor(Math.random() * 11 + 1)
        purpleCrystal = Math.floor(Math.random() * 11 + 1)
        $("#randomNumber").text(randomNumber);
        usersPick = 0;

    }

    //when clicking on each crystal create a function that will randomize the value to number betwween 1-12
    //if usersPick is equal to randomNumber user wins and if usersPick is greater than random number user loses.   

    $("#blueCrystal").on("click", function() {
        usersPick = usersPick + blueCrystal;
            // clickAudio();
    
            if (usersPick === randomNumber) {
                win();
            }
            else if (usersPick > randomNumber) {
                lose(); 
            }

            $("#totalScore").text(usersPick);
           
    })
          
    $("#orangeCrystal").on("click", function() {
        usersPick = usersPick + orangeCrystal;
        
        
            if (usersPick === randomNumber){
                win();
            }
            else if (usersPick > randomNumber) {
                lose();
            }

            $("#totalScore").text(usersPick);
    })

    $("#pinkCrystal").on("click", function() {
        usersPick = usersPick + pinkCrystal;
        
        
            if (usersPick === randomNumber){
                win();
            }
            else if (usersPick > randomNumber) {
                lose();
            }

            $("#totalScore").text(usersPick);
    })

    $("#purpleCrystal").on("click", function() {
        usersPick = usersPick + purpleCrystal;
        
        
            if (usersPick === randomNumber){
                win();
        
            }
            else if (usersPick > randomNumber) {
                lose();
            }

            $("#totalScore").text(usersPick);
    })
    
   //create functions for wins and losses that include win/lose counter, reset function and alerts.

    function win() {
        wins +1; 
        resetGame ();
        $("#wins").text(wins);
        $("#result").html("You Win!");
        alert("YOU WIN");
    }
   
    $("wins").text(wins);
   
    function lose() {
        losses +1;
        resetGame ();
        $("#result").html("You Lose!"); 
        $("#losses").text(losses);
        alert("YOU LOST");
    }

    $("losses").text(losses);
    // function clickAudio () {
    //     var audio = newAudio ("../audio/Button-onclick.mp3"); 
        
    // }



});
   
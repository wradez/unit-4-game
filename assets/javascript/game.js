//variables
    //achieveScore
    //yourScore
    //wins
    //losses
    //gemImages
var achieveScore= 0;
var yourScore = 0;
var wins = 0;
var losses = 0;
var gemImages = ["assets/images/Sapphire.png", "assets/images/Emerald.png", "assets/images/Ruby.png", "assets/images/Diamond.png", "assets/images/Dragonstone.png"];
var shame = new Audio("assets/shame-1.mp3");
var victory = new Audio("assets/birdtheword.mp3");

$(document).ready(function() {

    //Call/Run the updateVariablesOnPage function
    // $(".game").hide();
    updateVariablesOnPage();

    
    //game logic
        //click event for the gems
            //add the .rsGem value to the yourScore variable
            //conditional logic
                //if yourScore === achieveScore
                    //add one to the wins variable
                    //run updateVariablesOnPage()
                //if yourScore > achieveScore
                    //add one to the losses variable
                    //run updateVariablesOnPage()
                //else 
                    //not really needed

    $(".gems").on("click", ".gem", function(){

        yourScore = yourScore + parseInt($(this).attr("value"));
        $("#yourScore").text(yourScore);


        if(yourScore === achieveScore){
            wins++;
            $(".status").text("You win!");
            updateVariablesOnPage();
            victory.play();
        }else if(yourScore > achieveScore){
            losses++;
            $(".status").text("SHAME...");
            updateVariablesOnPage();
            shame.play();
        }
    });

    //once you click the starting button, this will remove the hide class and add a show class for the block surrounding the game
    $("body").on("click",".btn-primary",function(){
        $(".game").removeClass("d-none").addClass("d-block");
    })

    //functions
        //updateVariablesOnPage()
            //pick a number for achieveScore from 19 to 120
            //set yourScore to 0
            //generateGems()
                //create a variable for gems
                //create an image for each gem and randomly choose one of the gems in the gemImages array for the src
                //assign class to the gem .rsGem for the click events to latch onto
                //assign a value or data to the gem of a randomly generate number between 1-12
    function updateVariablesOnPage(){
        achieveScore = (Math.ceil(Math.random() * 101) + 19);
        yourScore = 0;
        $(".gems").empty();
        $("#wins").text(wins);
        $("#losses").text(losses);
        generateGems();

        $("#achieveScore").text(achieveScore);
        $("#yourScore").text(yourScore);
    }
    function generateGems(){
        for(var i = 0;i < 4; i++){
            var gems = $("<img>").attr("src", gemImages[Math.floor(Math.random() * gemImages.length)]).attr("value", Math.ceil(Math.random() * 12)).addClass("gem");
            $(".gems").append(gems);
        }
        
    }

});
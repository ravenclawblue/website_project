
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var score=0;
var highscore=0;

var started=false;
var level=0;
//whenever a key will be pressed the game will begun by a random color
$(document).keypress(function(){
    $("h3").hide();
    if(!started)
    {   
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});
   
//user will give their input by clicking and the answer will be checked
$(".btn").click(function()
{
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


// it will create a random number and animation to the button 
function nextSequence(){
    userClickedPattern=[];
    level++;
    score=score+level-1;
    $("#level-title").text("Level "+level);
    randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//to create sound
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

//animation
function animatePress(currentColour){
    var activeButton=$("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed");
    },100);
}

//this function will check the answer and give a option to start over
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        highestScore(score);
        startOver();
    }
}

//function highest score
function highestScore(score){
    $("h3").show();
    $(".recent").text(score);
    if(score>highscore){
        highscore=score;
        $(".highest").text(highscore);
    }
}


function startOver(){
    level=0;
    score=0;
    gamePattern=[];
    started=false;
}
$(document).ready(function() {
// variables 
var trivia = [
    {
		question: "What is the name of Jan's candle company ?", 
		options: ["Serenity by Jan", "Burn It", "Light by Jan", "Keep it Bright"],
		answer: 0,
		photo: "assets/images/candles.jpg"
	 },
	 {
	 	question: "What is Pete's nickname ?", 
		options: ["Slim", "Plop", "Slayer", "Dwight Jr."],
		answer: 1,
		photo: "assets/images/plop.jpg"
	 }, 
	 {
	 	question: "Andy adds what to his drink at Gabe's party?", 
		options: ["Cocaine", "Turtle", "Lava", "Sea Horse" ],
		answer: 3,
		photo: "assets/images/seahorse.jpg"
	}, 
	{
		question: "Toby's brothers name is?", 
		options: ["Rory", "Brian", "Sam", "Chad" ],
		answer: 0,
		photo: "assets/images/rory.jpg"
	}, 
	{
		question: "What is the name of Oscar's trivia team?", 
		options: ["Queerstien Bears", "Asops Foibles", "The Quizzards", "Les Quizeriables" ],
		answer: 1,
		photo: "assets/images/oscar.jpg"
	}, 
	{
		question: "How many seasons of The Office are there?", 
		options: ["19", "6", "10", "9" ],
		answer: 3,
		photo: "assets/images/herring.jpg"
	}, 
	{
		question: "Which office employee did Micahel hit with his car?", 
		options: ["Angela", "Kevin", "Meredith", "Stanley" ],
		answer: 2,
		photo: "assets/images/meredith.gif"
	}
];

var correctA = 0;
var wrongA = 0;
var unansweredQ = 0;
var timer = 15;
var intervalID;
var userGuesses = "";
var running = false;
var Q = trivia.length;
var choose;
var index;
var newArray = [];
var holder = [];

$("#startover").hide();
//click start button to start game
$("#start").on("click", function () {
		$("#start").hide();
		showTrivia();
		startTimer();
		for(var i = 0; i < trivia.length; i++) {
	holder.push(trivia[i]);
}
    })
//timer start
function startTimer(){
	if (!running) {
	intervalId = setInterval(countdown, 1000); 
	running = true;
    }
}
//timer countdown
function countdown() {
	$("#timer").html("Time remaining: " + timer);
	timer --;
//stop timer if reach 0
	if (timer === 0) {
		unansweredQ++;
		stop();
		$("#options").html("<p>Time is up! The correct answer is: " + choose.options[choose.answer] + "</p>");
		picture();
	}	
}
//timer stop
function stop() {
	running = false;
	clearInterval(intervalId);
}


    function showTrivia() {
        //generate random index in array
        index = Math.floor(Math.random()*trivia.length);
        choose = trivia[index];
$("#questions").html(choose.question)
    for(var i = 0; i < choose.options.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(choose.options[i]);
        //assign array position to it so can check answer
        userChoice.attr("data-guessvalue", i);
        $("#questions").append(userChoice);    
}
    }
$(".answerchoice").on("click", function () {
	//grab array position from userGuess
	userGuesses = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (userGuesses === choose.answer) {
		stop();
		correctA++;
		userGuesses="";
		$("#answers").html("<p>Correct!</p>");
		picture();

	} else {
		stop();
		wrongA++;
		userGuesses="";
		$("#answers").html("<p>Wrong! The correct answer is: " + choose.options[choose.answer] + "</p>");
		picture();
	}
})
function picture () {
	$("#answers").append("<img src=" + choose.photo + ">");
	newArray.push(choose);
	options.splice(index,1);

	var hidpic = setTimeout(function() {
		$("#answers").empty();
		timer= 20;

	//run the score screen if all questions answered
	if ((wrongA + correctA + unansweredQ) === Q) {
		$("#questions").empty();
		$("#questions").html("<h3>Game Over!  Here's how you did: </h3>");
		$("#answers").append("<h4> Correct: " + correctCount + "</h4>" );
		$("#answers").append("<h4> Incorrect: " + wrongCount + "</h4>" );
		$("#answers").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
		$("#reset").show();
		correctCount = 0;
		wrongCount = 0;
		unanswerCount = 0;

	} else {
		startTimer();
		showTrivia();
	}
}, 3000);
}
$("#startover").on("click", function() {
	$("#startover").hide();
	$("#answers").empty();
	$("#questions").empty();
	for(var i = 0; i < holder.length; i++) {
		options.push(holder[i]);
	}
	startTimer();
	startTrivia();

})
});
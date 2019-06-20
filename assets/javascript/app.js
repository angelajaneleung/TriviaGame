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

var correctA =0;
var wrongA =0;
var unansweredQ =0;
var timer =15;
var intervalID;
// Game Function

});
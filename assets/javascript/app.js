$(document).ready(function () {
    var correctA = 0;
    var wrongA = 0;
    var unansweredQ = 0;
    var timeRemaining = 15;
    var intervalID;
    var indexQandA = 0;
    var answered = false;
    var correct;
    var triviaGame = [
        {
            question: "What is the name of Jan's candle company ?",
            answer: ["Serenity by Jan", "Burn It", "Light by Jan", "Keep it Bright"],
            correct: "0",
            image: "assets/images/candles.jpg"
        },
        {
            question: "What is Pete's nickname ?",
            answer: ["Slim", "Plop", "Slayer", "Dwight Jr."],
            correct: "1",
            image: "assets/images/plop.jpg"
        },
        {
            question: "Andy adds what to his drink at Gabe's party?",
            answer: ["Cocaine", "Turtle", "Lava", "Sea Horse"],
            correct: "3",
            image: "assets/images/seahorse.jpg"
        },
        {
            question: "Toby's brothers name is?",
            answer: ["Rory", "Brian", "Sam", "Chad"],
            correct: "0",
            image: "assets/images/rory.jpg"
        },
        {
            question: "What is the name of Oscar's trivia team?",
            answer: ["Queerstien Bears", "Asops Foibles", "The Quizzards", "Les Quizeriables"],
            correct: "1",
            image: "assets/images/oscar.jpg"
        },
        {
            question: "How many seasons of The Office are there?",
            answer: ["19", "6", "10", "9"],
            correct: "3",
            image: "assets/images/seasons.jpg"
        },
        {
            question: "Which office employee did Micahel hit with his car?",
            answer: ["Angela", "Kevin", "Meredith", "Stanley"],
            correct: "2",
            image: "assets/images/meredith.jpeg"
        }
    ];


    $("#startover").hide();
    function startGame() {
        $("#start").remove();
        correctA = 0;
        wrongA = 0;
        unansweredQ = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false;
        timeRemaining = 15;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaGame[indexQandA].correct;
        var question = triviaGame[indexQandA].question;
        $("#questions").html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaGame[indexQandA].answer[i];
            $("#answers").append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true;
                $("#questions").text("Answer: " + triviaGame[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true;
                $("#questions").text("You picked: " + triviaGame[indexQandA].answer[id] + "..but the answer is: " + triviaGame[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $("#questions").text("The Correct Answer: " + triviaGame[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $("#timer").text("Time Remaing" + " " + timeRemaining);
        }
    }

    function correctAnswer() {
        correctA++;
        $("#timer").text("Your're Correct!!!")
        resetRound();
    }

    function incorrectAnswer() {
        wrongA++;
        $("#timer").text("Wrong Answer...Bummer!")
        resetRound();

    }

    function unAnswered() {
        unansweredQ++;
        $("#timer").text("You Havn't Picked An Answer")
        resetRound();
    }

    function resetRound() {
        $('.answersAll').remove();
        $("#answers").append('<img class=answerImage  src="' + triviaGame[indexQandA].image + ' ">');
        indexQandA++;
        if (indexQandA < triviaGame.length) {
            setTimeout(function () {
                loadQandA();
                $('.answerImage').remove();
            }, 4000);
        } else {
            setTimeout(function () {
                $("#questions").remove();
                $("#timer").remove();
                $('.answerImage').remove();
                $("#answers").append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctA + '</h4>');
                $("#answers").append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + wrongA + '</h4>');
                $("#answers").append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQ + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 5000);
            }, 4000);
        }
    };

    $("#start").on("click", function () {
        $("#start");
        startGame();

    });

});
$(document).ready(function(){

	var questionNum = 0;
	var numCorrect = 0;

	var questionsArray = [
		{
		question:"If I say I have tres eggs, how many do I have?",
		choices:["45.7", "-24", "3"],
		},
		{
		question:"How many hours are wasted annually watching cute kittens on YouTube?",
		choices:["1 billion", "It's not a waste!", "6.3"],
		},
		{
		question:"What is Jenny's number?",
		choices:["867-5309", "555-9117", "911"],
		},
		{
		question:"How many different artificial colors are in Hot Cheetos?",
		choices:["4", "I don't care, they're delicious.", "Chemicals are yummy."],
		},
		{
		question:"Last one! How many questions were on this quiz?",
		choices:["Too many", "12", "5"],
		}
	];


	$(".inner").on("click", ".button", function(event){
		event.preventDefault();
		$("h1").remove();
		$("h2").remove();
		$("input").remove();
		var question = questionsArray[questionNum].question;
		$(".inner").append("<h1>" + question + "</h1>");

		var choice1 = questionsArray[questionNum].choices[0];
		var choice2 = questionsArray[questionNum].choices[1];
		var choice3 = questionsArray[questionNum].choices[2];

		$(".inner").append("<div class='remove'>" +
			"<input class='inline' type='radio' name='choice' value=choice1 id='r1'>" +
			"<h2 class='inline'>" + choice1 + "</h2></div>");
		$(".inner").append("<div class='remove'>" +
			"<input class='inline' type='radio' name='choice' value='choice2' id='r2'>" +
			"<h2 class='inline'>" + choice2 + "</h2></div>");
		$(".inner").append("<div class='remove'>" +
			"<input class='inline' type='radio' name='choice' value='choice3' id='r3'>" +
			"<h2 class='inline'>" + choice3 + "</h2></div>");
		
		$(".inner").append("<input type='submit' name='submit' value='Submit' class='submitButton'>");
		

		questionNum++;
		console.log(questionNum);
	});

	$(".inner").on("click",".submitButton", function(event){
		event.preventDefault();
		
		var guess = $("input[type='radio'][name='choice']:checked").val();
		console.log("guess is " + guess);
		var correctChoice = getCorrectChoice();
		console.log("correctChoice is " + correctChoice);

		var isCorrect = checkIsCorrect(guess, correctChoice);
		console.log(isCorrect);

		var message = getMessage(isCorrect);
		console.log(message);

		var score = getScore(isCorrect);
		console.log(score);

		$("h1").remove();
		$(".remove").remove();
		$('.submitButton').remove();

		$(".inner").append("<h1>" + message + "</h1>");
		$(".inner").append("<h2>" + "Your score is: " + score + "</h2>");

		if(questionNum < 5){
			$(".inner").append("<input type='submit' name='submit' value='Next Question' class='button'>");
		} else {
			var endMessage = getEndMessage(score);
			$(".inner").append("<h1>" + endMessage + "</h1>");
		}

	});

	function getCorrectChoice(){
		if(questionNum == 1){
			return "choice3";
		}else if(questionNum == 2){
			return "choice2";
		}else if(questionNum == 3){
			return "choice1";
		}else if(questionNum == 4){
			return "choice1";
		}else if(questionNum == 5){
			return "choice3";
		}
	};

	function checkIsCorrect(guess, correctChoice){
		return(guess == correctChoice);
	};

	function getMessage(isCorrect){
		if(isCorrect){
			return "Yay! You got it right!"
		} else {
			return "Oh no... that was incorrect."
		}
	};

	function getScore(isCorrect){
		if(isCorrect){
			numCorrect++;
			return numCorrect + " / " + questionNum;
		} else {
			return numCorrect + " / " + questionNum;
		}
	};

	function getEndMessage(score){
		if(numCorrect < 3){
			return "Don't worry! That's not so bad!";
		} else if (numCorrect < 5){
			return "You did pretty good!";
		} else if (numCorrect == 5){
			return "Wow, perfect score! You are a numbers whiz!"
		}
	};



});

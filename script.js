$(document).ready(function(){
  //the ball
	var magic8Ball = {};
    $("#answer").hide();
   	magic8Ball.listOfAnswers = ["Yes", "No", "Perhaps…", "Eat and ask again", "Uncertain", "Of course!"];
    magic8Ball.askQuestion = function(question){
      	$("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#answer").text(answer);
          console.log(question);
          console.log(answer);
    };

    //the button
    var onClick = function() {
      $("#answer").hide();
      $("8ball").attr("https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
      setTimeout(
		function() {
	var question = prompt("What yes/no question have you for the cosmos?");
        magic8Ball.askQuestion(question);
        $("#8ball").effect("shake");
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	       }, 500);
    };

	 $("#questionButton").click(onClick);


});
//this magic oracle device brought to you by eggnog lattes and mid-day buds.

$(document).ready(function() {
// set total number of questions to ask
var total_questions = 5;
var questions = [];
 var questionNum = 0;
  var questionTotal = questions.length;
  var correctTotal = 0;
    
  $('#testQuestion').hide();
  $('#startQuizButton').click(function(){ //start the quiz and show the first question
    $('#message').hide();
    $('#startQuiz').hide();
    $('#welcomemessage').hide();
    $('#testQuestion').show();

  });  

  $.getJSON('questions.json', function(data) {
		$.each(data, function(index, item) {
           $('#questionNum').text("Question " + (questionNum+1) + " of " + total_questions);
           $("#question").append(item);  
           $('#choices').empty();
            var choiceTotal = questions[questionNum].choices;
            for (var i=0; i<choiceTotal; i++) {                  //displays the answer choices
      $('#choices').append("<input type='radio' class='guess' name='guess' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
    }
		});
   });

 console.log(data);
});

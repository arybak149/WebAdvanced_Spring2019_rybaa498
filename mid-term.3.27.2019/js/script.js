$(document).ready(function() {
    var questions = null;
    var quiz = $('#quiz');
    var questionsCompleted = 0;
    
// start quiz by displaying standard quiz buttons and loading data
    function startQuiz(url) {
        $('#next').show();
        $('#startagain').hide();
        quiz.empty();
        questionsCompleted = 0;
        loadQuestions(url);
    }

    // load the questions data structure from a JSON file
    function loadQuestions(url) {
        $.getJSON(url, function (data) {
            questions = data;
            displayQuestion();
        });
    }

    // add interactivity to HTML elements once
    $('#next').on('click', nextQuestion);
    $('#startagain').on('click', function () {
        startQuiz('data/SH_questions.json');
    });

    // display question
    startQuiz('data/SH_questions.json');

    // return question data user is working on now
    function currentQuestion() {
        return questions[questionsCompleted];
    }

    // returns selected answer
    function getChoice() {
        var element = $('input[name="answer"]:checked');
        if (element === null) {
            return -1;
        } else {
            return parseInt(element.val(), 10);
        }
    }

    // returns list of the answer choices as radio inputs
    function createRadios(questionData) {
        var radioList = $('<ul>');
        $.each(questionData.choices, function (index, text) {
            $('<li>').html('<input type="radio" name="answer" value=' + index + ' />' + text)
                     .appendTo(radioList);
        });
        return radioList;
    }

    // show question and the possible answers
    function createQuestionElement(questionData) {
        return $('<div>').append($('<p>').html(questionData.question))
                         .append(createRadios(questionData))
                         .attr('id', 'question');
    }

    // displays current question
    function displayQuestion() {
        createQuestionElement(currentQuestion()).appendTo(quiz);
    }

    // moves to next question by removing the current one
    function nextQuestion() {
        questionsCompleted += 1;
        quiz.empty();
        if (questionsCompleted === questions.length) {
            quiz.html('<p>You completed the quiz. Congrats!<p>');
            $('#next').hide();
            $('#startagain').show();
        } else {
            displayQuestion();
        }
    }

    
});

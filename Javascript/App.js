// Change the page to present questions and starting timer.
var userAnswers = [];
var correct = 0;
var wrong = 0;
var count = 99;
var counterIncrement=-2;
var counter = setInterval(timer, 1000); 


function timer() {
  count = count+counterIncrement;
  if (count == 0 ) {
        alert("Times up! Game Over!");
        $('#game').empty();
        generateQuestions();
        count = 99;
        reset= [];
        

    }
  console.log(count);
  $('#timer').text(count);
  
}

function stop(){
    
}
// Write a function to generate questions and start the game
function generateQuestions(){
    for(var i = 0; i < questions.length; i++){
        var questionDiv = $('<div>');
        questionDiv.attr('class', 'col-12 pt-4 pb-4');
        questionDiv.html('<h3>' + questions[i].question + '</h3>');
        $('#game').append(questionDiv);


        //Loop through questions
        for(var j = 0;j < questions[i].answers.length;j++){
            var answerDiv = $('<div>')
            answerDiv.addClass('form-check');

            var label = $('<label>');
            label.addClass('form-check-label');

            var checkBox = $('<input>');
            checkBox.attr({
                class: 'form-check-input',
                type: 'radio',
                name: `question-${i}`,
                value: questions[i].answers[j]
            });

            label.append(checkBox, questions[i].answers[j]);
    
            answerDiv.append(label);
            questionDiv.append(answerDiv);
        }
    }
  
    
}

generateQuestions();
timer();
// e.target
$(document).on('click', '.form-check-label', function(e) {
    console.log(e);
})


$('#submit').on('click', function(){
    // Call the stop() function
    document.querySelectorAll('input').forEach(function(el) {
        if(el.checked){
            userAnswers.push(el.value);
        }
    });

    for(var i = 0; i < userAnswers.length; i++){
        if(userAnswers[i] === questions[i].rightAnswer){
            correct++;
        } else {
            wrong++;
        }
        
    }
    console.log(userAnswers);
    $('#correct').text(`Correct: ${correct}`);
    $('#incorrect').text(`Incorrect: ${wrong}`);
});
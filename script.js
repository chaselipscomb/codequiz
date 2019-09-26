$(document).ready(function () {
    var choices = [
        {
            prompt: "(a) $\n(b) ]\n(c) .\n(d) ;",
            answer: 'd'
        },
        {
            prompt: "(a) &\n(b) $\n(c) #\n(d) @",
            answer: 'b'
        },
        {
            prompt: "(a) JavaScript'\n'(b) Junior Systems'\n'(c) JaxSon\n(d) Not an abbreviation",
            answer: 'a'
        }
    ];
    var questions = [
        "What do you put at the end of a line of code?",
        "What is the Jquery symbol",
        "What does JS stand for?"
    ];
    var score = 0;
    //get the elements by selectors
    var theQuestion = document.querySelector(".question");
    var theAnswers = document.querySelector(".answers");
    var gameEl = document.querySelector(".game");
    var userAnswer;

    //initializing the game
    startGame();

    function startGame() {
        for (var i = 0; i < questions.length; i++) {
            theQuestion.textContent = questions[i];  
            theAnswers.textContent = choices[i].prompt;
          /* //new div for question
            var newDiv = document.createElement("div");
            newDiv.textContent=theQuestion;
            gameEl.appendChild(newDiv);
           //new div for answers
           var anotherDiv = document.createElement("div");
            anotherDiv.textContent=choices[i].prompt;
            gameEl.appendChild(anotherDiv);
           
           
           // console.log(theQuestion);
           // console.log(theAnswers);
      */
            userAnswer=prompt("Enter letter of your answer: ")
             
             if(userAnswer===choices[i].answer) {
                 score++;
                 alert("Correct. Your score is now " + score);
             } else {
                 score--;
                 alert("Incorrect. Your score is now " + score);
              }


        }
    }
   





});
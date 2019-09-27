$(document).ready(function () {
  var questions = [{
    question: "What do you put at the end of a line of code?",
    answer: 'd'
  },
  {
    question: "What is the Jquery symbol",
    answer: 'b'
  },
  {
    question: "What does JS stand for?",
    answer: 'a'
  }
  ];
  var choices = [
    ['$', ']', '.', ';'],
    ['&', '$', '#', '@'],
    ['JavaScript', 'Junior Systems', 'JaxSon', 'Not an abbreviation'],
  ];


  var score = 0;
  //get the elements by selectors
  var theQuestion = document.querySelector(".question");
  var a = document.querySelector("#a");
  var b = document.querySelector("#b");
  var c = document.querySelector("#c");
  var d = document.querySelector("#d");
  var gameEl = document.querySelector(".game");
  var userAnswer;

  //initializing the game
  startGame();

  function startGame() {
    for (var i = 0; i < questions.length; i++) {
      theQuestion.textContent = questions[i].question;
      a.textContent = choices[i][0];
      b.textContent = choices[i][1];
      c.textContent = choices[i][2];
      d.textContent = choices[i][3];
      
      /* var choicesOfQuestionInArray = i;
      for (var j = 0; j<choicesOfQuestionInArray;j++) {
        a.textContent = choices[i][j];
        b.textContent = choices[i][j];
        c.textContent = choices[i][j];
        d.textContent = choices[i][j];
      }
      */
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
      /*   console.log(theQuestion);
               console.log(theAnswers);
       userAnswer = prompt("Enter letter of your answer: ")
 
       if (userAnswer === choices[i].answer) {
         score++;
         alert("Correct. Your score is now " + score);
       } else {
         score--;
         alert("Incorrect. Your score is now " + score);
       }
 */

    }
  }






});
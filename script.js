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
  //var choices = [
    //['$', ']', '.', ';'],
    //['&', '$', '#', '@'],
    //['JavaScript', 'Junior Systems', 'JaxSon', 'Not an abbreviation']
  //];
  var choices = [
    {
      a: '$',
      b: ']',
      c: '.',
      d: ';'
    },
    {
      a: '&',
      b: '$',
      c: '#',
      d: '@'
    },
    {
      a: 'JavaScript',
      b: 'Junior Systems',
      c: 'JaxSon',
      d: 'Not an abbreviation'
    }];
console.log(choices[0][2])

  var score = 0;
  //get the elements by selectors
  var theQuestion = document.querySelector(".question");
  var a = document.querySelector("#a");
  var b = document.querySelector("#b");
  var c = document.querySelector("#c");
  var d = document.querySelector("#d");
  var gameEl = document.querySelector(".game");
  var startBox = document.querySelector(".start");
  var userAnswer;

  //initializing the game
  //startGame();
  
  startBox.addEventListener("click", function startGame() {
    if (startBox.style.display === "block") {
      startBox.style.display = "none";
      gameEl.style.display = "block";
    } else {
      startBox.style.display = "none";
      gameEl.style.display = "block";
    }
    game();
  });
  

  function game() {
    
    for (var i=0; i<3; i++) {
      theQuestion.textContent = questions[i].question;
      a.textContent = choices[i].a;
      b.textContent = choices[i].b;
      c.textContent = choices[i].c;
      d.textContent = choices[i].d; 
      console.log(a,b,c,d);
      //button user choosed
      //wait for users selection
      function check(x) {
        var usersChoice=document.getElementById("#radio").checked = true;
        usersChoice = usersChoice.value;
        if (usersChoice=questions[i].answer) {
          return true;
        } else {
          return false;
        }
      }
      //updates score, true for correct, false for incorrect
      if (x=true){
        score++;
      } else {
        score--;
      }
      //go to next question now
 }
    //send score to highscores
    console.log(score);
  }
//function startGame() {

  //if click event changeContent()
//}



//view highscores
var hsLink = document.querySelector("#highscores");
var viewScores = document.querySelector(".viewHighscores");

hsLink.addEventListener("click", function showHighscorez() {
  if (viewScores.style.display === "none") {
    viewScores.style.display = "block";
  } else {
    viewScores.style.display = "none";
  }
});

});
$(document).ready(function () {
  //array of question/answer objects
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
  var submit = document.querySelector("#submit");
  submit.addEventListener("click", function(event){
    event.preventDefault();
    console.log("hi");
    //getting choice of user
    var checkedRadio= document.querySelector('.radio:checked');
    var answer;
    if (checkedRadio===null){
      answer=-9;
    } else {
      answer = checkedRadio.value;
    }
    console.log(answer);
    console.log("check if right");
    currentIndex++;
    game();
    //clear radio
  });
  //var choices = [
    //['$', ']', '.', ';'],
    //['&', '$', '#', '@'],
    //['JavaScript', 'Junior Systems', 'JaxSon', 'Not an abbreviation']
  //];
  //array of answer choice objects
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

  //get the elements by selectors
  var currentIndex = 0;
  var theQuestion = document.querySelector(".question");
  var a = document.querySelector("#a");
  var b = document.querySelector("#b");
  var c = document.querySelector("#c");
  var d = document.querySelector("#d");
  var gameEl = document.querySelector(".game");
  var startBox = document.querySelector(".start");

  //initializing the game
  //Game();
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
  
//the game, after clicking start game
var score = 0;
  function game() {
    //setTimeout(function() {
      console.log(theQuestion,a,b,c,d);
      //replaces previous question
      theQuestion.textContent = questions[currentIndex].question;
      //should change all choices to the new question
      a.textContent = choices[currentIndex].a;
      b.textContent = choices[currentIndex].b;
      c.textContent = choices[currentIndex].c;
      d.textContent = choices[currentIndex].d; 
  
      //logs the choices for all questions
      console.log(theQuestion,a,b,c,d);
      //button user choosed
      //wait for users selection
     /* function check(x) {
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
     */
      //go to next question now 
    //save/send score to highscores
    //display end game page
    console.log(score);
  }//, 3000);}


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
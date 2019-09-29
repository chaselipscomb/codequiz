$(document).ready(function () {
  //array of question/answer objects
  var questions = [{
    question: "What do you put at the end of a line of code?",
    answer: '3'
  },
  {
    question: "What is the Jquery symbol",
    answer: '1'
  },
  {
    question: "What does JS stand for?",
    answer: '0'
  }
  ];
  //set highscore board
  var viewScores = document.querySelector(".viewHighscores");
  if (viewScores.textContent = null) { } else {
    //viewScores.textContent = parseInt(localStorage.getItem('scored'));
    let div = document.createElement('div');
    div.innerHTML = JSON.parse(localStorage.getItem('scored'))
    viewScores.appendChild(div);
  }
  var score = 0;
  var submit = document.querySelector("#submit");
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    //endgame
    if (currentIndex === 2) {
      console.log(score);
      console.log("game over");
      var scorecard = document.querySelector(".scoreCard");
      var percentage = document.querySelector("#percentage");
      scorecard.style.display = "block";
      gameEl.style.display = "none";
      var scored = score / 3 * 100
      var scored = scored.toFixed(2);
      //console.log(scored + "%");
      percentage.textContent = scored + "%";

      //store/get/creatediv and append it to scoreboard
      var viewScores = document.querySelector(".viewHighscores");
      localStorage.setItem("scored", JSON.stringify(scored));
      newDiv = document.createElement("div");
      newDiv.textContent = scored;
      viewScores.appendChild(newDiv);
    }
    //console.log("hi");
    //getting choice of user
    var checkedRadio = document.querySelector('.radio:checked');
    var answer;
    if (checkedRadio === null) {
      answer = -9;
    } else {
      answer = checkedRadio.value;
    }
    //console.log(answer);
    //console.log("check if right");
    currentIndex++;
    game();
    //compare answer and user answer. update score
    if (answer == questions[currentIndex - 1].answer) {
      score++;
    } else { score; }
    console.log(score);

    //clear radio
    checkedRadio.checked = false;


  });

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
  function game() {
    //setTimeout(function() {
    //replaces previous question
    theQuestion.textContent = questions[currentIndex].question;
    //should change all choices to the new question
    a.textContent = choices[currentIndex].a;
    b.textContent = choices[currentIndex].b;
    c.textContent = choices[currentIndex].c;
    d.textContent = choices[currentIndex].d;




    //go to next question now 
    //save/send score to highscores
    //display end game page

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
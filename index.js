//MarkTwo

var readLineSync = require('readline-sync')

var score = 0

var questionUserName = "What is your name?"
var answer1 = readLineSync.question(questionUserName)

//high scores by users
var highScore = [
  {
  name : "Sourav",
  score: 1 
  },
  {
    name: "Tanay", 
    score: 0
  }
]

//array of objects 
var questions = [
  {
  question: "Do you know what is my favourite webseries?",
  answer : "Panchayet" 
  },

  {
    question: "Do you know who is my favourite Character in Panchayet Webseries?",
    answer: "Abhishek Tripathi"
  },

  {
    question: "Do you know how many times I watched Panchayet?",
    answer: "3" 
  },
  
  {
    question: "Do you know who calls himself Sakht launda?",
    answer: "Zakir khan" 
  }, 

   {
    question: "Do you know what zakir khan does? ",
    answer: "Comedy" 
  }

  ];

function askQuestionsToUser(askedQuestion, expectedAnswer){
  var givenAnswer = readLineSync.question(askedQuestion)
  if(givenAnswer === expectedAnswer){
    score =  score + 1;
    console.log("Right!!!");
  }
    
  else {
  
    console.log("Wrong!!!")
  }
  
   console.log("Current Score"+score) 
  
}
function startGame(){
  for (var i = 0; i< questions.length; i++){
    var ongoingQuestion = questions[i];
    askQuestionsToUser(ongoingQuestion.question, ongoingQuestion.answer)
  }
}
function showScore(){

    console.log("Final Score of the User is: "+ score)
    isTheHighestRecordBroken(score)

}
// bonus homework: has the user beaten high score?
function isTheHighestRecordBroken(score) {
  var maxScore = 0;
  for (var i = 0; i < highScore.length; i++) {
    var currentHighScore = highScore[i].score;
    if (currentHighScore > maxScore) {
      maxScore = currentHighScore;
    }
  }
  if (score > maxScore) {
   console.log("Congrats! You are the highest scorer... Kindly, send me the screeshot of your score so that I can update the scoreboard");
    
  }
}
startGame();
showScore();

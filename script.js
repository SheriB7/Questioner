// console.log("having fun");
// $("body").append("jquery is loaded")

// var question = document.querySelector(".question");
var question = $('.question');
// var win = document.querySelector(".win");
var win = $(".win");
// var lose = document.querySelector(".lose");
var lose = $(".lose");
// var timerElement = document.querySelector(".timer-count");
var timerElement = $(".timer-count");
// var startButton = document.querySelector(".start-button");
var startButton = $(".start-button");
var questionIndex = 0 
var questionText = $('.questionText')
var answers = $(answers)
// var exampleData = [
//         {
//             question: 'Question 1',
//             opotions: ["a", "b", "c", "d"],
//             answer: 'a'
//         },
//         {
//             question: 'Question 2',
//             opotions: ["a", "b", "c", "d"],
//             answer: '3'
//         },
//         {
//             question: 'Question 3',
//             opotions: ["a", "b", "c", "d"],
//             answer: 'd'
//         },
//     ]

    
    function start(event) {
        event.preventDefault()
        $("#Start").addClass("hide")
        $("#Game").removeClass("hide")
        game()
        console.log("clicked")
    }
    
    function game() {
        // render question
        function renderQuestion() {
        
        }
        // check if right or wrong
// load next question
}


// startButton.addEventListener("click",start)
startButton.on("click",start)


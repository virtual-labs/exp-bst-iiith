/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. Suppose that we have numbers between 1 and 100 in a binary search tree and want to search for the number 55. Which of the following sequences CANNOT be the sequence of nodes examined?", ///// Write the question inside double quotes
answers: {
a: "{90, 12, 68, 34, 62, 45, 55}", ///// Write the option 1 inside double quotes
b: "{79, 14, 72, 56, 16, 53, 55} ", ///// Write the option 2 inside double quotes
c: " {9, 85, 47, 68, 43, 57, 55}", ///// Write the option 3 inside double quotes
d: "{10, 75, 64, 43, 60, 57, 55} ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. Which of the following traversals is sufficient to construct BST from given traversals? <br> 1. Inorder<br>2. Preorder <br> 3. Postorder ",  ///// Write the question inside double quotes
answers: {
a: "Any one of the given three traversals is sufficient ",                  ///// Write the option 1 inside double quotes
b: "2 and 3",                  ///// Write the option 2 inside double quotes
c: "Either 2 or 3 is sufficient ", ///// Write the option 3 inside double quotes
d: "1 and 3", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "3. How many distinct binary search trees can be created out of 4 distinct keys?",  ///// Write the question inside double quotes
answers: {
a: "35",                  ///// Write the option 1 inside double quotes
b: "14",                  ///// Write the option 2 inside double quotes
c: "24", ///// Write the option 3 inside double quotes
d: "5", ///// Write the option 4 inside double quotes
},
correctAnswer: "b"                ///// Write the correct option inside double quotes
},

{
question: "4. While inserting the elements 71, 65, 84, 69, 67, 83 in an empty binary search tree (BST) in the sequence shown, the element in the lowest level is __.",  ///// Write the question inside double quotes
answers: {
a: "65",                  ///// Write the option 1 inside double quotes
b: "69",                  ///// Write the option 2 inside double quotes
c: "67", ///// Write the option 3 inside double quotes
d: "83", ///// Write the option 4 inside double quotes

},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},



];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

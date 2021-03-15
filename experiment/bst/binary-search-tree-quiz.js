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
            question: "1. The number of edges from the root to the node is called __________ of the tree.", ///// Write the question inside double quotes
            answers: {
                a: " Length ", ///// Write the option 1 inside double quotes
                b: " Width", ///// Write the option 2 inside double quotes
                c: "  Depth  ", ///// Write the option 1 inside double quotes
                d: " Height ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. The number of edges from the node to the deepest leaf is called _________ of the tree.",  ///// Write the question inside double quotes
      answers: {
        a: "Height",                  ///// Write the option 1 inside double quotes
        b: "Depth",                  ///// Write the option 2 inside double quotes
	c: "Width ", ///// Write the option 3 inside double quotes
        d: "Length", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What is a full binary tree?",  ///// Write the question inside double quotes
      answers: {
        a: "Each node has exactly two children",                  ///// Write the option 1 inside double quotes
        b: "Each node has exactly one or two children ",                  ///// Write the option 2 inside double quotes
	c: "Each node has exactly zero or two children  ", ///// Write the option 3 inside double quotes
        d: "  All the leaves are at the same level", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "4. What is a complete binary tree? ",  ///// Write the question inside double quotes
      answers: {
        a: "A binary tree, which is completely filled, with the possible exception of the bottom level, which is filled from left to right ",                  ///// Write the option 1 inside double quotes
        b: "Each node has exactly zero or two children ",                  ///// Write the option 2 inside double quotes
	c: "A tree In which all nodes have degree 2", ///// Write the option 3 inside double quotes
        d: "A binary tree, which is completely filled, with the possible exception of the bottom level, which is filled from right to left", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
{
      question: "5. Which of the following is not an advantage of trees? ",  ///// Write the question inside double quotes
      answers: {
        a: "Hierarchical structure  ",                  ///// Write the option 1 inside double quotes
        b: "Router algorithms  ",                  ///// Write the option 2 inside double quotes
	c: "Faster search", ///// Write the option 3 inside double quotes
        d: " Undo/Redo operations in a notepad", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
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

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
            question: "1. Leaf nodes have no children (select True or False)", ///// Write the question inside double quotes
            answers: {
                a: " False", ///// Write the option 1 inside double quotes
                b: "True", ///// Write the option 2 inside double quotes
                
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Atmost how many leaf nodes (L) can be present in a tree of n nodes?",  ///// Write the question inside double quotes
      answers: {
        a: "n-1",                  ///// Write the option 1 inside double quotes
        b: "n",                  ///// Write the option 2 inside double quotes
	c: "0", ///// Write the option 3 inside double quotes
        d: "1", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What is the time and space complexity of merge sort? ",  ///// Write the question inside double quotes
      answers: {
        a: "O(N^2) time, O(N) space",                  ///// Write the option 1 inside double quotes
        b: "O(Nlog N) time, O(N) space ",                  ///// Write the option 2 inside double quotes
	c: "O(Nlog N) time, O(NlogN) space ", ///// Write the option 3 inside double quotes
        d: " O(N) time, O(NlogN) space", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
{
      question: "4. If a variable is a pointer to a structure, then which of the following operator is used to access data members of the structure through the pointer variable? ",  ///// Write the question inside double quotes
      answers: {
        a: ".",                  ///// Write the option 1 inside double quotes
        b: "&",                  ///// Write the option 2 inside double quotes
	c: "->", ///// Write the option 3 inside double quotes
        d: "*", ///// Write the option 4 inside double quotes
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

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
            question: "1. What are the worst case and average case complexities of a binary search tree?", ///// Write the question inside double quotes
            answers: {
                a: " O(n), O(logn) ", ///// Write the option 1 inside double quotes
                b: " O(n), O(n) ", ///// Write the option 2 inside double quotes
                c: "  O(logn), O(n)  ", ///// Write the option 1 inside double quotes
                d: "  O(logn), O(logn)  ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. In a full binary tree if number of internal nodes is I, then number of leaves L are _______.",  ///// Write the question inside double quotes
      answers: {
        a: "L = I – 1 ",                  ///// Write the option 1 inside double quotes
        b: "L = 2*I – 1",                  ///// Write the option 2 inside double quotes
	c: " L = I + 1  ", ///// Write the option 3 inside double quotes
        d: " L = 2*I", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
      question: "3. In a full binary tree if number of internal nodes is I, then number of nodes N are ______.",  ///// Write the question inside double quotes
      answers: {
        a: "N = 2*I ",                  ///// Write the option 1 inside double quotes
        b: "N = 2*I + 1 ",                  ///// Write the option 2 inside double quotes
	c: "N = I + 1  ", ///// Write the option 3 inside double quotes
        d: "N = I – 1", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
{
      question: "4. Which of the following is incorrect with respect to binary trees?",  ///// Write the question inside double quotes
      answers: {
        a: " Let T be a binary tree with λ levels. Then T has no more than 2<sup>λ – 1</sup> nodes ",                  ///// Write the option 1 inside double quotes
        b: " Let T be a binary tree with N nodes. Then the number of levels is at least floor(log (N + 1)) ",                  ///// Write the option 2 inside double quotes
	c: "Let T be a binary tree. For every k ≥ 0, there are no more than 2k nodes in level k", ///// Write the option 3 inside double quotes
        d: "Let T be a binary tree with N nodes. Then the number of levels is at least ceil(log (N + 1)) ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
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

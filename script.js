// The user starts with a score of 0. There are 2 possible outcomes, page 1 or page 2
let questionCount = 0;
let pageOneResult = 0;
let pageTwoResult = 0;

// Question 1 options
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");

// Question 2 options
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");

// Question 3 options
let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");


//Add Event Listeners + page score
q1a1.addEventListener("click", pageTwo);
q1a2.addEventListener("click", pageTwo);
q1a3.addEventListener("click", pageOne);
q1a4.addEventListener("click", pageOne);

q2a1.addEventListener("click", pageTwo);
q2a2.addEventListener("click", pageTwo);
q2a3.addEventListener("click", pageOne);
q2a4.addEventListener("click", pageOne);

q3a1.addEventListener("click", pageOne);
q3a2.addEventListener("click", pageOne);
q3a3.addEventListener("click", pageTwo);
q3a4.addEventListener("click", pageTwo);


// This part adds up the score results to either be page 1 or page 2
function pageOne() {
  pageOneResult += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

function pageTwo() {
  pageTwoResult += 1;
  questionCount += 1;
  if (questionCount >= 3) {
    updateResult();
  }
}

let result = document.querySelector("#result");

// This is the part that links each page to the result page
function updateResult() {
  if (pageOneResult >= 2 && (pageOneResult > pageTwoResult)) {
    result.innerHTML = "Continue";
    result.href = "result1.html";
  } else if (pageTwoResult >= 2 && (pageTwoResult > pageOneResult) ) {
    result.innerHTML = "Continue";
    result.href = "result2.html";
  } else {
    result.innerHTML = "Error";
  }
}

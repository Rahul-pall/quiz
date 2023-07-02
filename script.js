const question = [
  {
    ques: "Which of the following is markup language ?",
    a: "HTML",
    b: "CSS",
    c: "Javascript",
    d: "java",
    correct: "a",
  },
  {
    ques: "What is the full form of HTML ?",
    a: "Hyper text markup language",
    b: "Hyper text transfer protocol",
    c: "Hyper text masup protocol",
    d: "Hyper refrence markup language",
    correct: "a",
  },
  {
    ques: "What is the full form of OS ?",
    a: "Open system",
    b: "Operating system",
    c: "Organisation system",
    d: "Open Source",
    correct: "b",
  },
  {
    ques: "who is the PM of india ?",
    a: "Akshay kumar",
    b: "Sardar vallbhai  patel",
    c: "Mamta Benerji",
    d: "Narender Modi",
    correct: "d",
  },
  {
    ques: "Total population of india ?",
    a: " 80cr",
    b: "90cr",
    c: "10cr",
    d: "145cr",
    correct: "d",
  },
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const questionBox = document.getElementById("h_question");
let option = document.querySelectorAll(".options");
const loadquestion = () => {
  if (total === index) {
    return endquiz();
  }
  reset();
  const data = question[index];
  questionBox.innerText = `${index + 1})${data.ques}`;
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
};
let change = () => {
  const data = question[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  return;
};
const getAnswer = () => {
  let answer;
  option.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  })
  return answer;
};
const reset = () => {
  option.forEach((value) => {
    value.checked = false;
  });
};
const endquiz = () => {
  document.getElementById("box1").innerHTML = `
  <h3>thankyou to participate in my Quiz </h3>
  <h2>${right}/${total} are correct`;
};
loadquestion();

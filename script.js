const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats"
      ],
      correct: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborghinis"
      ],
      correct: "Hypertext Markup Language"
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      correct: "1995"
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("quiz-options");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  let selectedAnswer = null;
  
  function loadQuiz() {
    deselectOptions();
  
    const currentQuizData = quizData[currentQuestion];
  
    questionEl.innerText = currentQuizData.question;
    optionsEl.innerHTML = "";
  
    currentQuizData.options.forEach((option) => {
      const li = document.createElement("li");
      li.innerText = option;
      li.addEventListener("click", () => selectOption(li));
      optionsEl.appendChild(li);
    });
  }
  
  function deselectOptions() {
    selectedAnswer = null;
    document.querySelectorAll("li").forEach((option) => {
      option.classList.remove("selected");
    });
  }
  
  function selectOption(optionEl) {
    deselectOptions();
    optionEl.classList.add("selected");
    selectedAnswer = optionEl.innerText;
  }
  
  submitBtn.addEventListener("click", () => {
    if (selectedAnswer) {
      if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        showResults();
      }
    } else {
      alert("Please select an answer before submitting.");
    }
  });
  
  function showResults() {
    quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>
    `;
  }
  
  loadQuiz();
  
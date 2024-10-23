// Imposta il timer
const TOTAL_TIME = 60;
let timeLeft = TOTAL_TIME;

// Recupera gli elementi SVG
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;




/*
La prima cifra (il primo circumference) 
rappresenta la lunghezza del segmento visibile 
(quanto del cerchio sarà visibile).
La seconda cifra (il secondo circumference) 
rappresenta la lunghezza dello spazio vuoto successivo.
*/
circle.style.strokeDasharray = `${circumference } ${circumference}`;
// stroke-dasharray è una proprietà che specifica la lunghezza dei segmenti 
//visibili e degli spazi vuoti di un tracciato.
circle.style.strokeDashoffset = circumference;
//stroke-dashoffset controlla dove inizia il tracciato visibile.

function setProgress(percent) {
    const offset = circumference - (percent / 100)* circumference;
    circle.style.strokeDashoffset = offset;
}

// Funzione countdown
function startTimer() {
    const timerElement = document.getElementById('timer');

    const interval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // calcola la percentuale di completamento di un'animazione (come un countdown) e aggiorna la visualizzazione del progresso 
        //tramite la funzione setProgress(progress).
        const progress = ((TOTAL_TIME - timeLeft) / TOTAL_TIME) * 100;
        setProgress(progress);

        if (timeLeft <= 0) {
            clearInterval(interval); // Ferma il timer quando arriva a zero
        }
    }, 1000);
}

startTimer();

//--------------------------------------------------//

const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  
  const container = document.querySelector(".buttonContainer");
  const getTtitle = function (){
    const title = document.createElement ("h3");
    for (let i =0; i<questions.length;i++){
        title.innerText = questions[i].question;
        container.appendChild(title);
    }
  }
  getTtitle()

const currentQuestionIndex = 0;
const score = 0;

const loadQuestion = function () {
  const currentQuestion = 
}















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



  
  const container = document.querySelector(".buttonContainer");
  const getTtitle = function (){
    const title = document.createElement ("h3");
    for (let i =0; i<questions.length;i++){
        title.innerText = questions[i].question;
        container.appendChild(title);
    }
  }
  getTtitle()

  const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      answer:
      [
        {title: "Central Processing Unit",
        value: true},
            {title: "Central Process Unit",
            value: false},
            {title: "Computer Personal Unit",
                value: false},
                {title: "Central Processor Unit",
                    value: false}
      ]
      
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      answer:
      [
        {title: "Final",
        value: true},
            {title: "Static",
            value: false},
            {title: "Private",
                value: false},
                {title: "Public",
                    value: false}
      ]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      answer:
      [
        {title: "False",
        value: true},
            {title: "True",
            value: false},
      ]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      answer:
      [
        {title: "False",
        value: true},
            {title: "True",
            value: false},
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      answer:
      [
        {title: ".svg",
        value: true},
            {title: ".png",
            value: false},
            {title: ".png",
                value: false},
                {title: ".gif",
                    value: false}
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      answer:
      [
        {title: "Cascading Style Sheet",
        value: true},
            {title: "Counter Strike: Source",
            value: false},
            {title: "Corrective Style Sheet",
                value: false},
                {title: "Computer Style Sheet",
                    value: false}
      ]
      
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      answer:
      [
        {title: "Nougat",
        value: true},
            {title: "Ice Cream",
            value: false},
            {title: "Jelly Bean",
                value: false},
                {title: "Marshmallow",
                    value: false}
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      answer: [
        {title: "140",
        value: true},
            {title: "120",
            value: false},
            {title: "160",
                value: false},
                {title: "100",
                    value: false},
      ]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      answer: [
        {title: "true",
        value: false},
            {title: "false",
            value: true},
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      answer: [
        {title: "Java",
        value: true},
        {title: "Python",
            value: false},
            {title: "C",
                value: false},
                {title: "Jakarta",
                    value: false},
            
    ]
    },
  ];













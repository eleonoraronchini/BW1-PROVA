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
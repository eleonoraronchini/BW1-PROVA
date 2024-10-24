const ctx = document.getElementById('myChart').getContext('2d');

const numDomande = 10;
const corrette = 6;
const sbagliate = 4;

function calcolaPercentuale (num1, num2){
let result = num1 * num2;
result = result*100;
result = result/100;
return result;
} 


        // Dati per il grafico
        const data = {
            labels: ['Corrette', 'Sbagliate'],
            datasets: [{
                data: [calcolaPercentuale(corrette,numDomande), calcolaPercentuale(sbagliate,numDomande)], // Percentuali
                backgroundColor: ['#00e0f0', '#a64d79'], // Colori per corrette e sbagliate
                hoverOffset: 4,
                borderWidth: 0
            }]
        };

        // Opzioni del grafico
      const options = { 
        responsive: false, 
        cutout: "75%",
     }
            
        // Creare il grafico a ciambella
        const myChart = new Chart (ctx, {
            type: 'doughnut',
            data: data,
            options: options
        
        });
        const button = document.querySelector(".buttonNextPage");
        button.addEventListener("click", function (){
            window.location.href ="../feedbackpage/index (2)(1).html"
        })

        const correct = document.getElementById("correctPerc")
        const wrong = document.getElementById("wrongPerc")

        correct.textContent = "Correct " + calcolaPercentuale(corrette,numDomande) + "%";
        wrong.textContent = "Wrong " + calcolaPercentuale(sbagliate, numDomande) + "%";
const ctx = document.getElementById('myChart').getContext('2d');

const numDomande = 10;
const corrette = parseInt(localStorage.getItem("score"),10) || 0;
const sbagliate = numDomande - corrette;

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
        const button2 = document.querySelector(".Results");
        button2.addEventListener("click", function  () {
            window.location.href = "../answersheetpage/answer.html"
        })
        

        const correct = document.getElementById("correctPerc")
        const wrong = document.getElementById("wrongPerc")

        correct.textContent = "Correct " + calcolaPercentuale(corrette,numDomande) + "%";
        wrong.textContent = "Wrong " + calcolaPercentuale(sbagliate, numDomande) + "%";

        const paragraph = function (){ 
            const messageResult = document.querySelector (".paragraph")
            messageResult.style.fontSize = "40px";
            messageResult.style.fontFamily = "Outfit";
            if (corrette > sbagliate ) { 
                messageResult.innerText = "Congratulations! You passed the exame. \nWe'll send you the certificate in few minutes.  \nCheck your email (including promotions/ spam folder)."
            } else {
                messageResult.innerText = "Sorry, but you didn't pass the exam! \nNext time you can do better!"
            }
        }; 

        paragraph()

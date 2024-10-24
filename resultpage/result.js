const ctx = document.getElementById('myChart').getContext('2d');

        // Dati per il grafico
        const data = {
            labels: ['Corrette', 'Sbagliate'],
            datasets: [{
                data: [75, 25], // Percentuali
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
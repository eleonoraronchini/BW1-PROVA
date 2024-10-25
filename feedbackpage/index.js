const btn = document.getElementById('btn')
const ratings = document.getElementsByClassName('ratings')
const inputBtn = document.getElementById('tag')
 btn.addEventListener('click', function(){
    if(inputBtn.value != 0){
         inputBtn.remove() 
         btn.remove()
         let comm = document.createComment('helooo')
         document.body.appendChild(comm)
         let pComm = document.getElementById('comment')
         pComm.innerHTML = "La tua opinione è importante, grazie per il tuo contributo"
         pComm.style.fontFamily = 'Inter'
         pComm.style.fontWeight = '700'
         pComm.style.fontSize  = '1.5rem'
    };
 })

 

 const stars = document.querySelectorAll('#dimStella');
  starsArr = Array.from(stars)
 
 stars.forEach(dimStella => {
    dimStella.addEventListener('click', () => {
         for (let index = 0; index < starsArr.length; index++) {
            const element = starsArr[index];
            element.remove()
            let sostituto = document.createComment('heloo')
            document.body.appendChild(sostituto)
            let pSos = document.getElementById('sostituto')
            pSos.style.fontWeight = 900
            pSos.style.fontSize = '3rem'
            pSos.style.color = '#00FFFF'
            pSos.style.textShadow = '0 0 .5em magenta'
            if(element.length)
          pSos.innerHTML = 'Grazie per la tua recensione!'
            /* if(element.length < 6 ){ //se recensione positiva, pSos inner.HTML = positivo, senno...
                
            }/*else if(element.length >= 6){
                pSos.innerHTML = 'Grazie per la recensione positiva!'
            }*/
           
            
         } dimStella.remove()
   
    });
});
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener('mouseover', handleHover);
  star.addEventListener('mouseout', resetStars);
  star.addEventListener('click', setRating);
});

function handleHover(event) {
  const value = event.target.getAttribute('data-value');
  highlightStars(value);
}

function highlightStars(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add('hovered');
    } else {
      star.classList.remove('hovered');
    }
  });
}

function resetStars() {
  stars.forEach((star) => {
    star.classList.remove('hovered');
    if (parseInt(star.getAttribute('data-value')) <= currentRating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

function setRating(event) {
  currentRating = parseInt(event.target.getAttribute('data-value'));
  if(currentRating <6){
   ratingValue.textContent ="We are sorry for your negative review";
  }else {
   ratingValue.textContent ="We are happy for your positive review";
  }
  stars.forEach((star, index) => {
    if (index < currentRating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

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

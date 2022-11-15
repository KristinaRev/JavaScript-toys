const CREATE_RANDOM_NUMBER = document.getElementById('create-random-num');
const MIN_NUMBER = document.getElementById('min');
const MAX_NUMBER = document.getElementById('max');


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

CREATE_RANDOM_NUMBER.addEventListener('click', function() {
    
    let rand = getRandomNumber(parseInt(MIN_NUMBER.value), parseInt(MAX_NUMBER.value, 10));

    alert(`Число: ${rand}`);
  });

  
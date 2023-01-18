const changeBtn = document.querySelector('.change-btn');
const quotes = document.querySelector('.text');
const quoteNumber = document.querySelector('.advice-number');

const QUOTES_URL = 'https://api.adviceslip.com/advice';

function generateQuote() {
  fetch(QUOTES_URL)
    .then((res) => res.json())
    .then((data) => {
      quotes.textContent = `"${data.slip.advice}"`;
      quoteNumber.textContent = data.slip.id;
    });
}

changeBtn.addEventListener('click', () => location.reload());

addEventListener('load', generateQuote);

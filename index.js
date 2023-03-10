const url = "https://api.exchangerate-api.com/v4/latest/USD";

function fetchExchangeRate() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates.KRW;
      console.log(`1 USD = ${rate} KRW`);
      const div1 = document.getElementById('div1');
      const div2 = document.getElementById('div2');
      div1.textContent = `USD KRW Exchange Rate`;
      div2.textContent = `1 USD = ${rate} KRW`;
    })
    .catch(error => console.error(error));
}

fetchExchangeRate();
// Call the function every 5 seconds to get the latest exchange rate
// setInterval(fetchExchangeRate, 5000);

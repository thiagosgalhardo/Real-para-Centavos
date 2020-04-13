'use strict'
function convert() {
  
  let message, num = document.getElementById('number').value;
  
  if (document.querySelector('table')) document.querySelector('table').remove();
  if (document.querySelector('.total')) document.querySelector('.total').remove();

  
  function divide_by_coins(number) {
    let um, cinco, dez, vintecinco, cinquenta, balance;
    cinquenta = Math.floor(number / 50);
    balance = number % 50;
    vintecinco = Math.floor(number / 25);
    balance = number % 25;
    dez = Math.floor(balance / 10);
    balance = balance % 10;
    cinco = Math.floor(balance / 5);
    balance = balance % 5;
    um = Math.floor(balance / 1);
    return `<table>
              <tr>
                <td>Coins</td>
                <td>Count</td>
              </tr>
              <tr>
              <td>cinquenta (50 &#162)</td><td>${cinquenta}</td>
              </td>
              <tr>
                <td>vintecinco (25 &#162)</td><td>${vintecinco}</td>
              </tr>
              <tr>
                <td>dez (10 &#162)</td><td>${dez}</td>
              </tr>
              <tr>
                <td>cinco (5 &#162)</td><td>${cinco}</td>
              </tr>
              <tr>
                <td>um (1 &#162)</td><td>${um}</td>
              </tr>
            </table>`;
  }


  if (!(Number.isFinite(+num))) message = `<div class="total">Formato incorreto</div>`;
  else {
    let cents;
    if (num.indexOf('.') != -1 && num.indexOf('.') < num.length-3) {
      message = `<div class="total">Formato incorreto</div>`;
    } else {
      cents = +num * 100;
      message = `<div class="total">Total cents: ${cents}</div>` + divide_by_coins(cents);
    }

  }
  
  document.querySelector('.window').insertAdjacentHTML('beforeend', message);
}

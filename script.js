const select = document.querySelectorAll("#field-select");
const input = document.querySelector("#field1-input");
const output = document.querySelector("#field2-input");

fetch("https://api.frankfurter.app/currencies", {
  
   method: "GET",

})
  .then((data) => data.json())
  .then((data) => loadCountryName(data));

// loading the country Names
function loadCountryName(data) {
  const currencyName = Object.entries(data);

  for (let i = 0; i < currencyName.length; i++) {
    select[0].innerHTML += `<option value="${currencyName[i][0]}">${currencyName[i][0]} : ${currencyName[i][1]}</option>`;
    select[1].innerHTML += `<option value="${currencyName[i][0]}">${currencyName[i][0]} : ${currencyName[i][1]}</option>`;
  }
}

//To Update the value when we Select and If user choose the same currency to aleart them to change
function updateValue() {
  
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  
  let inputValue = input.value;

  if (currency1 != currency2) 
  {
   convertCurrency(currency1, currency2, inputValue);
  } 
  else if (inputValue <= 0) 
  {
    alert("Please Enter Correct value !!!");
  } 
  else 
  {
    alert("Please choose different Currency !!!");
  }
}

// Converting the Currency
function convertCurrency(currency1, currency2, inputValue) {
  fetch(
    `https://api.frankfurter.app/latest?amount=${inputValue}&from=${currency1}&to=${currency2}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(Object.values(data.rates)[0]);
      output.value = Object.values(data.rates)[0];
    });
}

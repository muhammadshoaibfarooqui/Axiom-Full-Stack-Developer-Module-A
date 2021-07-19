// function calculate(){
//     fetch('items.json')
//     .then(res => res.json())
//     .then(data => document.body.innerHTML = data[0].text);
//     //.then(data => console.log(data));
// };

// calculate();

//Get DOM Elements
const currencyOne = document.getElementById('currency-one');
const amountcurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountcurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch Exchange Rates & Update the DOM
function calculate(){
    //Get the currency Code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    //Send Request to ExchangeRate-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/01d13933e5b8d3d8c4144893/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(res => res.json())
    .then(data => {
    //Get the Conversion Rate from Currency One to Currency Two
    const conversionRate = data.conversion_rate;
    //Update the DOM to display the conversion rate
    rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;
    //Update the Currency Two Amount
    //amountcurrencyTwo.value = new Intl.NumberFormat('en-US', {style: 'currency', currency: currencyTwoCode}).format((amountcurrencyOne.value * conversionRate).toFixed(2));
    //amountcurrencyTwo.value = (amountcurrencyOne.value * conversionRate).toFixed(2);
    //console.log(amountcurrencyTwo.value);

    //Formatting Currency Two Amount
    const amount2 = new Intl.NumberFormat('en-US', {style: 'currency', currency: currencyTwoCode}).format((amountcurrencyOne.value * conversionRate).toFixed(2));
    amountcurrencyTwo.value = amount2;
    console.log(amountcurrencyTwo.value);
    });
    //.then(data => console.log(data))

    

    
    //console.log('success');
    //console.log(currencyOneCode,currencyTwoCode);
};

//Event Listeners
//Recalculate exchange rate when currency 1 changes
currencyOne.addEventListener('change',calculate);

//Recalculate exchange rate when currency 1 amount changes
amountcurrencyOne.addEventListener('input',calculate);

//Recalculate exchange rate when currency 2 changes
currencyTwo.addEventListener('change',calculate);

//Recalculate exchange rate when currency 2 amount changes
amountcurrencyTwo.addEventListener('input',calculate);

swap.addEventListener('click',() => {
    //Save Value of Currency One Code to Temp Variable
    const temp = currencyOne.value;

    //Copy Currency Two Code to Currency One
    currencyOne.value = currencyTwo.value;

    //Copy Currency One Code from Temp Variable to Currency Two
    currencyTwo.value = temp;

    //Recalculate Exchange Rate After Swap
    calculate();
})

//Execute calculate function on page load
calculate();
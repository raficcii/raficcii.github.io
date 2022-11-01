window.addEventListener('load', getQuote);
const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener("click", getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    //console.log("Button is confirmed to be working.");
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    //console.log(json_res);
    console.log(json_response['message']);

    displayQuote(json_response['message']);
}

function displayQuote(quote){
   /* const quoteBox = document.querySelector('#js-quote-text');
   //console.log('Display quote worked successfully'); 
   const textMessage = document.createTextNode(quote);

   quoteBox.appendChild(textMessage); */

   document.getElementById('js-quote-text').textContent = quote;
}
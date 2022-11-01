window.addEventListener('load', getQuote);
const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener("click", getQuote);
quoteButton.addEventListener("click", randomizeFonts);
const endpoint = 'https://api.kanye.rest/';

async function getQuote(){
    //console.log("Button is confirmed to be working.");
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['quote']);
    displayQuote(json_response['quote']);
}

function displayQuote(quote){
   /* const quoteBox = document.querySelector('#js-quote-text');
   //console.log('Display quote worked successfully'); 
   const textMessage = document.createTextNode(quote);

   quoteBox.appendChild(textMessage); */

   document.getElementById('js-quote-text').textContent = quote;
}

/*RANDOMIZE FONT FUNCTION FOUND ONLINE */
function randomizeFonts() {
    if (window.jQuery) {
      elements = jQuery('*');
      families = jQuery.unique(elements.map(function() { return jQuery(this).css('font-family') }));
      families.push("'comic sans ms', sans-serif");
  
      elements.each(function() {
        jQuery(this).css('font-size', 32*Math.random() + 'px');
        jQuery(this).css('font-family', families[Math.floor(Math.random()*families.length)]);
      });
    } else {
      var jq = document.createElement('script'); jq.type = 'text/javascript';
      jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
      document.getElementsByTagName('head')[0].appendChild(jq);
      setTimeout(randomizeFonts, 0.1);
    }
  }
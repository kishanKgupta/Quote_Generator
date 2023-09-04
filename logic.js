const quoteContainer = document.getElementById('quote-container'); 
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// loading spinner shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hidden loading spinner
function complete() {
    if (!loader.hidden) {
        loader.hidden = true;
    quoteContainer.hidden = false;
    }
}


let apiQuotes = [];

function Quotes() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    authorText.textContent = quote.author;
  
}

//Tweet Quote
function tweetQuote(){
    const twitterurl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterurl, '_blank');
}

//event listener

newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);


//access quotes through API

async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    
        try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
            Quotes();
           complete(); 
    } catch (error) {
            loading();
    }
 
}
 
//calling function
getQuotes();









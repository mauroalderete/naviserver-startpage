var oneQuotePerDay = false; //change quote daily?
//Picks a random quote per day
function pickQuote() {
    var today_expected = localStorage.today || 0; //default value of 0 for new users
    var today_actual = new Date().getDate(); //current day

    if(oneQuotePerDay) {
         if(today_expected != today_actual) {
            generateQuote();
            localStorage.today = today_actual;
        }
    } else {
        getRandomQuote();
    }
    updateQuoteDisplay();
    updateAuthorDisplay();
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function getRandomQuote() {

    var albums = ["Within", "To Travel for Evermore", "Far From the Madding Crowd", "The Shadow Cabinet", "Salt"]
    var albumRanges = [19, 25, 27, 41, 67];

    //pick random album and select corresponding range
    var randomNumber = randomIntFromInterval(0, 4);
    var album = albums[randomNumber];
    var range = albumRanges[randomNumber];

    //pick random quote from collection
    var quoteIndex = randomIntFromInterval(1, range);
    var document = "Quote" + quoteIndex;

    await fetchAndSetQuote(album, document);
}

async function fetchAndSetQuote(album, document) {
    //fetch from firebase database
    //make sure fetching is done before doing operations
    const doc = await db.collection(album).doc(document).get().then((doc) => {

        //make sure linebreaks are converted from firebase format
        var quote = doc.data().Quote.replaceAll( " \\n ", "\n" );
        var author = doc.data().Song + " (" + album + ")";

        localStorage.quote = quote;
        localStorage.author = author;
    });
}

function updateQuoteDisplay() {
    document.getElementById("quote").innerHTML = localStorage.quote;
}

function updateAuthorDisplay() {
    document.getElementById("authorName").innerHTML = localStorage.author;
}
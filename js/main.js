var quotes = [{
        quote: "“Be yourself; everyone else is already taken.”",
        author: "-Oscar Wilde-"
    },
    {
        quote: "“So many books, so little time.”",
        author: "-Marilyn Monroe-"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "-Marcus Tullius Cicero-"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "-Mae West-"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "-Mahatma Gandhi-"
    },

]
var newIndex
var lastIndex
var displayedQuotes = []


function getQuotes() {
    if (displayedQuotes.length == quotes.length) {
        displayedQuotes = []
    }
    do {
        newIndex = Math.floor(Math.random() * quotes.length)
    } while (newIndex == lastIndex || displayedQuotes.includes(newIndex));

    lastIndex = newIndex
    displayedQuotes.push(newIndex)
    console.log(newIndex);

    document.getElementById("quote").innerHTML = quotes[newIndex].quote
    document.getElementById("auther").innerHTML = quotes[newIndex].author
}
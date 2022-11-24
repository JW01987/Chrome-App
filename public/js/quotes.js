const quotes = [
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
    },
    {
        quote: "We don't see things as they are, we see them as we are",
        author: "Anaïs Nin",
    },
    {
        quote: "\"You love me. Real or not real?\"I tell him, \"Real.\"",
        author: "Suzanne Collins",
    },
    {
        quote: "I would rather walk with a friend in the dark, than alone in the light",
        author: "Helen Keller",
    },
    {
        quote: "I am no bird and no net ensnares me: I am a free human being with an independent will.",
        author: "Charlotte Brontë",
    },
]
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
const HIDDEN_CLASS = "hidden";

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

function mouseOver() {
    author.classList.remove(HIDDEN_CLASS);
}
function mouseOut() {
    author.classList.add(HIDDEN_CLASS);
}
quote.addEventListener("mouseover", mouseOver);
quote.addEventListener("mouseout", mouseOut);



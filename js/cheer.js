const cheer_quotes = [
    {
        quote: "You can do it.",
    },
    {
        quote: "Break a leg.",
    },
    {
        quote: "Go for it.",
    },
    {
        quote: "You can make it.",
    },
    {
        quote: "I will be always right behind you",
    },
    {
        quote: "Pull yourself together",
    },
    {
        quote: "I got your back",
    },
    {
        quote: "Nothing can stop you.",
    },
    {
        quote: "I believe in you.",
    },
    {
        quote: "I hope it goes well.",
    },
    {
        quote: "Don't be afraid of consequences.",
    },
    {
        quote: "God is with you.",
    }
]

const cheer = document.querySelector("#cheer");

const todayCheer = cheer_quotes[Math.floor(Math.random() * cheer_quotes.length)];

cheer.innerText = todayCheer.quote;


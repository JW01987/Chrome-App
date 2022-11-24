const loginform = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const greetingPack = [
    {
        hi: "Hi",
    },
    {
        hi: "Hello",
    },
    {
        hi: "How’s it going",
    },
    {
        hi: "Good to see you",
    },
    {
        hi: "Nice to see you",
    },
    {
        hi: "Pleased to meet you",
    },
    {
        hi: "Howdy!",
    },
    {
        hi: " Sup",
    },

]
const todayGreeting = greetingPack[Math.floor(Math.random() * greetingPack.length)];
const nextGreeting = document.querySelector(".next-greeting");



function onLoginsubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginform.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `${todayGreeting.hi}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    nextGreeting.classList.remove(HIDDEN_CLASSNAME);
    nextGreeting.classList.add("felxadd");
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", onLoginsubmit);
} else {
    paintGreetings(savedUserName);
}
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.querySelector('.gif_container img');

    // Change GIF to sad GIF
    gif.src = "https://media.tenor.com/_brRB_jf-gIAAAAi/dog.gif";

    // Fade-in effect
    gif.classList.remove("fade-in");
    void gif.offsetWidth; // force reflow
    gif.classList.add("fade-in");

    // Update No button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Slightly increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.1}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

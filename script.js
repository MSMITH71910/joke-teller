// DOM Elements
const jokeButton = document.getElementById('joke-button');
const languageButtons = document.querySelectorAll('.language-button');
const languageBackground = document.querySelector('.language-background');
const loader = document.querySelector('.loading-zone');

// Default Language
let language = 'english';

// Show Loader
const showLoader = () => {
    loader.style.display = 'flex';
};

// Hide Loader
const hideLoader = () => {
    loader.style.display = 'none';
};

// Fetch and Tell a Joke
const getAJoke = async () => {
    showLoader();

    const apiUrl =
        language === 'english'
            ? 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit'
            : 'https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,religious,racist,sexist,explicit';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const joke = data.setup ? `${data.setup} ... ${data.delivery}` : data.joke;

        tellAJoke(joke);
    } catch (error) {
        alert('Error fetching joke: ' + error.message);
    } finally {
        hideLoader();
    }
};

// Speak the Joke using Web Speech API
const tellAJoke = (joke) => {
    const utterance = new SpeechSynthesisUtterance(joke);
    utterance.lang = language === 'english' ? 'en-US' : 'es-ES'; // English or Spanish
    utterance.rate = 1; // Adjust the speaking rate if needed

    // Disable the button while the joke is being spoken
    toggleButton();

    // Re-enable the button after the joke is finished
    utterance.onend = () => {
        toggleButton();
    };

    speechSynthesis.speak(utterance);
};

// Toggle Button State
const toggleButton = () => {
    jokeButton.disabled = !jokeButton.disabled;
};

// Event Listeners
jokeButton.addEventListener('click', getAJoke);

languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        language = button.textContent.toLowerCase() === 'english' ? 'english' : 'español';
        jokeButton.textContent = language === 'english' ? 'Tell Me A Joke' : 'Cuéntame un chiste';

        languageBackground.style.left = language === 'english' ? '0%' : '50%';
    });
});

// Hide Loader on Page Load
window.addEventListener('DOMContentLoaded', hideLoader);
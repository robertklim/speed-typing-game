document.addEventListener('DOMContentLoaded', init);

// Global variables
let time = 5;
let score = 0;
let isPlaying;

// DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#senonds');

const words = [
    'promise',
    'unnatural',
    'tail',
    'act',
    'quirky',
    'lackadaisical',
    'type',
    'embarrass',
    'unused',
    'crown',
    'cloistered',
    'grip',
    'book',
    'rinse',
    'juicy',
    'stain',
    'paper',
    'frighten',
    'enchanted',
    'ludicrous',
];

// Init
function init() {
    // Load a word from array
    showWord(words);
    // Match on word input
    wordInput.addEventListener('input', startMatch);
    // Countdown
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 100);
}

// Match word
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match current word to input
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// Countdown
function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}
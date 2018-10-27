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
    // Countdown
    setInterval(countdown, 1000);

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
// Home and Guest scores displayed
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

// Home score buttons 
let homeScorePlusOne = document.getElementById('home-score1');
let homeScorePlusTwo = document.getElementById('home-score2');
let homeScorePlusThree = document.getElementById('home-score3');

// Guest score buttons
let guestScorePlusOne = document.getElementById('guest-score1');
let guestScorePlusTwo = document.getElementById('guest-score2');
let guestScorePlusThree = document.getElementById('guest-score3');

// Starting Home and Guest Scores

let homeScoreCount = 0;
let guestScoreCount = 0;

// Home Scores

homeScorePlusOne.addEventListener('click', () => {
    homeScoreCount++;
    homeScore.textContent = homeScoreCount;

    console.log("Button (+1, Home) has been clicked.");
});

homeScorePlusTwo.addEventListener('click', () => {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;

    console.log("Button (+2, Home) has been clicked.");
});

homeScorePlusThree.addEventListener('click', () => {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;

    console.log("Button (+3, Home) has been clicked.");
});

// Guest Scores

guestScorePlusOne.addEventListener('click', () => {
    guestScoreCount++;
    guestScore.textContent = guestScoreCount;

    console.log("Button (+1, Guest) has been clicked.")
});

guestScorePlusTwo.addEventListener('click', () => {
    guestScoreCount += 2;
    guestScore.textContent = guestScoreCount;

    console.log("Button (+2, Guest) has been clicked.")
});

guestScorePlusThree.addEventListener('click', () => {
    guestScoreCount += 3;
    guestScore.textContent = guestScoreCount;

    console.log("Button (+3, Guest) has been clicked.");
});

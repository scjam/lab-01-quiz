import { translateToAYes } from './test/translate-to-a-yes.test.js';

const button = document.getElementById('quiz-button');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    const userName = prompt('Welcome Aboard! What is your name?');

    const userHasConfirmed = confirm(`Captain ${userName} has assured everyone that this ship will never sink. Continue with your journey?`);

    if (!userHasConfirmed) {
        alert('you have decided to wait six more years for trans-Atlantic flight!');
        return;
    }

    let correctAnswers = 0;

    const productionResponse = prompt('Did Peter Jackson direct the 1997 film Titanic?');

    if (!translateToAYes(productionResponse)) {
        correctAnswers ++;
    }

    const oscarsResponse = prompt('Did Leonardo diCaprio win the Academy Award for Best Actor in a Leading Role for his vulnerable, yet powerful portrayal of Jack Dawson in Titanic?');

    if (!translateToAYes(oscarsResponse)) {
        correctAnswers ++;
    }

    const opinionResponse = prompt('Is the best scene the one where there\'s clearly enough room on that damn door for two people but the lead actor dies anyways?');

    if (!translateToAYes(opinionResponse)) {
        correctAnswers ++;
    }

    alert('Welp, we hit the iceberg and the ship is sinking. If you get 100% on the quiz, you will earn a spot on a lifeboat!');

    results.textContent = `Congratulations Captain ${userName}, you got ${correctAnswers} right out of 3. Go ahead and take that lifeboat all to yourself.`;
});
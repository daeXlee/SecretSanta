'use strict'

let participants = [];
let pairs = [];
let nameInput = document.getElementById("nameInput");
let participantsDisplay = document.getElementById("participantsDisplay");
let pairsDisplay = document.getElementById("pairsDisplay");

function displayNames(namesToDisplay, diplayDiv) {
    let displayHTML = '<ul>';
    for (let name of namesToDisplay) {
        displayHTML += '<li>' + name +'</li>';
    }

    displayHTML += '</ul>';
    diplayDiv.innerHTML = displayHTML;
}

function addName() {
    participants.push(nameInput.value);
    nameInput.value = '';
    displayNames(participants, participantsDisplay);
}

// Pseudo Linked List pairing its neighbor and last gets first
function calculatePairs() {
    let shuffled = participants.slice().sort(function() { return 0.5 - Math.random(); });
 
    for (let i = 0; i < shuffled.length - 1; i++) {
        pairs.push([shuffled[i], shuffled[i+1]]);
    }
    pairs.push([shuffled.pop(), shuffled[0]]);
    displayNames(pairs, pairsDisplay);
}
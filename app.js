'use strict'

let participants = [];
let pairs = [];
let nameInput = document.getElementById("nameInput");
let participantsDisplay = document.getElementById("participantsDisplay");
let pairsDisplay = document.getElementById("pairsDisplay");

function displayNames() {
    participantsDisplay.innerHTML = '';
    let unorderList = document.createElement('ul');
    participantsDisplay.appendChild(unorderList);

    for (let name of participants) {
        let listElement = document.createElement('li');
        listElement.innerText = name;
        unorderList.appendChild(listElement);
    }
}

function addName() {
    participants.push(nameInput.value);
    nameInput.value = '';
    displayNames();
}

function displayResults() {
    pairsDisplay.innerHTML = '';
    let unorderList = document.createElement('ul');
    pairsDisplay.appendChild(unorderList);

    for (let pair of pairs) {
        let listElement = document.createElement('li');
        unorderList.appendChild(listElement);

        let a = document.createElement('a');
        listElement.appendChild(a);

        let linkText = document.createTextNode(pair[0]);
        a.appendChild(linkText);
        let pathQueryString = '?name=' + encodeURIComponent(pair[0]) + '&pair=' + encodeURIComponent(pair[1]);
        a.title = pair[0];
        a.href = './results.html' + pathQueryString;
        a.target = '_blank';
    }
}

// Pseudo Linked List pairing its neighbor and last gets first
function calculatePairs() {
    let shuffled = participants.slice().sort(function() { return 0.5 - Math.random(); });
 
    for (let i = 0; i < shuffled.length - 1; i++) {
        pairs.push([shuffled[i], shuffled[i+1]]);
    }
    pairs.push([shuffled.pop(), shuffled[0]]);

    displayResults();
}
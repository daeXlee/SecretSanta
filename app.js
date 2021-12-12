'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

const pairBtn = document.getElementById('pairBtn');

pairBtn.addEventListener('click', function() {
    var participants = document.getElementById("participants").value.split(/\r?\n/);
    var shuffle1 = participants.slice().sort(function() { return 0.5 - Math.random(); });
    var shuffle2 = participants.slice().sort(function() { return 0.5 - Math.random(); });

    while (shuffle1.length) {
        var name1 = shuffle1.pop(),
            name2 = shuffle2[0] == name1 ? shuffle2.pop() : shuffle2.shift();

        console.log(name1 + " buys gifts to " + name2);
    }
});
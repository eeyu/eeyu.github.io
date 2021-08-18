'use strict'

const listText = document.getElementById("textedit");
const FBPostFeedback = document.getElementById("FB-post-feedback");
const FBread = document.getElementById("FB-read");

const keystrokeLogger = new KeystrokeLogger();
var numberKeySelect = 0;

/* 
    KEYCOUNTS
*/
document.addEventListener('keydown', (event) => {
    var name = event.key;

    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.code) > -1) {
        event.preventDefault();
    }

    if(["Digit1","Digit2","Digit3","Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0"].indexOf(event.code) > -1) {
        numberKeySelect = parseInt(name);
    }
    
    switch (name) {
        case "ArrowUp":
            keystrokeLogger.incrementUp();
            break;
        case "ArrowDown":
            keystrokeLogger.incrementDown();
            break;
        case "ArrowLeft":
            keystrokeLogger.incrementLeft();
            break;
        case "ArrowRight":
            keystrokeLogger.incrementRight();
            break;
        default:
            listText.textContent = "Last Key: " + name;
            break;
    }
    updateKeyCounts(keystrokeLogger);
    
}, false);

function updateKeyCounts(keyLog) {
    document.getElementById("upkeys").textContent = "Up Counts: " + keyLog.upKey;
    document.getElementById("downkeys").textContent = "Down Counts: " + keyLog.downKey;
    document.getElementById("leftkeys").textContent = "Left Counts: " + keyLog.leftKey;
    document.getElementById("rightkeys").textContent = "Right Counts: " + keyLog.rightKey;
}


/* 
    DATABASE
*/
function recordKeysAndReset() {
    sendKeysToDatabase(keystrokeLogger);
    keystrokeLogger.resetCounts();
    updateKeyCounts(keystrokeLogger);
}

function sendKeysToDatabase(keyLog) {
    firebase.database().ref('keystrokes/').set({
        up: keyLog.upKey,
        down: keyLog.downKey,
        left: keyLog.leftKey,
        right: keyLog.rightKey
    });
}

function recordNumberAndReset() {
    sendNumberSelectToDatabase(numberKeySelect);
    numberKeySelect = 0;
}

function sendNumberSelectToDatabase(number) {
    firebase.database().ref('number/').set({
        selection: number
    });
}

var keyLoggerRefreshRate = 100; // in ms
setInterval(recordKeysAndReset, keyLoggerRefreshRate);

var buttonRefreshRate = 100; // in ms
setInterval(recordNumberAndReset, buttonRefreshRate);

var inputField = document.getElementById("inputField");
var outputField = document.getElementById("outputField");

function appendToInput(value) {
    inputField.innerText += value;
}

function clearInput() {
    inputField.innerText = "";
    outputField.innerText = "";
}

function backspace() {
    inputField.innerText = inputField.innerText.slice(0, -1);
}

function calculate() {
    try {
        var result = eval(inputField.innerText);
        outputField.innerText = result;
    } catch (e) {
        outputField.innerText = "Error";
    }
}

function square() {
    try {
        var val = eval(inputField.innerText);
        outputField.innerText = val * val;
    } catch (e) {
        outputField.innerText = "Error";
    }
}

function cube() {
    try {
        var val = eval(inputField.innerText);
        outputField.innerText = val * val * val;
    } catch (e) {
        outputField.innerText = "Error";
    }
}

function sqrt() {
    try {
        var val = eval(inputField.innerText);
        if (val < 0) throw "Invalid Input";
        outputField.innerText = Math.sqrt(val);
    } catch (e) {
        outputField.innerText = "Error";
    }
}
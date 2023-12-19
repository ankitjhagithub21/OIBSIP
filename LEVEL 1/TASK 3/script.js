const userInput = document.getElementById('userInput');
const userSelect = document.getElementById('userSelect');
const convertTo = document.getElementById('convertTo');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
    if (userInput.value === "") {
        alert("Input field is empty");
    } else {
        convertTemp(userInput.value, userSelect.value, convertTo.value);
    }
});

function convertTemp(userInput, fromTemp, convertTemp) {
    let convertedValue;
    if (fromTemp === "c" && convertTemp === "f") {
        convertedValue = (userInput * 9 / 5) + 32;
    } else if (fromTemp === "c" && convertTemp === "k") {
        convertedValue = parseFloat(userInput) + 273.15;
    } else if (fromTemp === "f" && convertTemp === "c") {
        convertedValue = (userInput - 32) * 5 / 9;
    } else if (fromTemp === "f" && convertTemp === "k") {
        convertedValue = (userInput - 32) * 5 / 9 + 273.15;
    } else if (fromTemp === "k" && convertTemp === "c") {
        convertedValue = userInput - 273.15;
    } else if (fromTemp === "k" && convertTemp === "f") {
        convertedValue = (userInput - 273.15) * 9 / 5 + 32;
    } else {
        alert("Invalid conversion.");
        return;
    }

    result.innerHTML = `Converted Temperature: ${convertedValue.toFixed(2)} ${convertTemp.toUpperCase()}`;
}
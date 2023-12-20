const buttonsContainer = document.getElementById('buttonsContainer');
const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, ".", "+", "-", "*", "/","%", "C", "="];
const displayBox = document.getElementById('displayBox');

buttons.forEach((button) => {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = button;
    buttonsContainer.appendChild(btn);

    btn.addEventListener('click', () => {
        if (button === "C") {
            displayBox.value = "";
        } else if (button !== "=") {
            displayBox.value += btn.textContent;
        } else {
            try {
                displayBox.value = Function('"use strict";return (' + displayBox.value + ')')();
            } catch (error) {
                displayBox.value = 'Error';
            }
        }
    });
});

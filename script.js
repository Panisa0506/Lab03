let currentValue = 0;

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = currentValue;
}

const addButton = document.getElementById('AddButton');
const minusButton = document.getElementById('RemoveButton');

addButton.addEventListener('click', function () {
    if (currentValue < 10) {
        currentValue += 1;
        updateDisplay();
    }
});

minusButton.addEventListener('click', function () {
    if (currentValue > 0) {
        currentValue -= 1;
        updateDisplay();
    }
});

updateDisplay();

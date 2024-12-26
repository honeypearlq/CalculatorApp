const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

// Update date and time dynamically
const datetimeElement = document.getElementById('datetime');
setInterval(() => {
    const now = new Date();
    datetimeElement.textContent = now.toLocaleString();
}, 1000);

buttons.forEach((button) => {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        try {
            if (display.value !== '') {
                display.value = eval(display.value);
            }
        } catch {
            display.value = 'Error';
        }
    } else if (clickedButtonValue === 'C') {
        display.value = '';
    } else {
        display.value += clickedButtonValue;
    }
}

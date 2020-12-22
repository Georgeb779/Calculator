const screenOperation = document.getElementById("screen-operation");
const screenResult = document.getElementById("screen-result");
const buttons = document.getElementById("buttons")

let operationComplete = false;

const lastValue = () => screenOperation.textContent.substring(screenOperation.textContent.length - 1)


const writeOperation = (text) => {
    if (screenOperation.textContent == 0) screenOperation.textContent = '';

    if (operationComplete && isNaN(text)) {
        screenOperation.textContent = screenResult.textContent;
        operationComplete = false;
    }

    if (operationComplete && !isNaN(text)) {
        screenOperation.textContent = '';
        screenResult.textContent = '0';
        operationComplete = false;
    }

    if (isNaN(lastValue()) && isNaN(text)) {
        screenOperation.textContent = screenOperation.textContent.substring(0, screenOperation.textContent.length - 1);
    }
    screenOperation.textContent += text;
}

const writeResult = () => {
    screenResult.textContent = eval(screenOperation.textContent);
    operationComplete = true;
}


const resetScreen = () => {
    screenOperation.textContent = '0';
    screenResult.textContent = '0';
}




buttons.addEventListener('click', e => {
    if (e.target.textContent !== "") {
        switch (e.target.textContent) {
            case '=':
                writeResult();
                break;
            case 'c':
                resetScreen();
                break;
            case '+/-':
                changeSing();
                break;
            case ',':
                writeOperation('.');
                break;

            default:
                writeOperation(e.target.textContent);
                break;
        }
    }
})
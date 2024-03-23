var display = document.getElementById("screen");
var calculatedValue = 0;

// function for toggling Dark/Light mode
function mode(){
    var element = document.body;
    element.classList.toggle("dark-mode")
    var togler = document.getElementById("btttn")
    togler.classList.toggle("togle-btn-dark")
}

// function for calculating 
function calculate() {
    let calc = display.value.toString();
    calculatedValue = eval(display.value);
    display.value = calculatedValue;
}

// function for checking operators

function checkOperator(value) {
    if (calculatedValue == 0) {
        if ((value != "+") && (value != "-") && (value != "*") && (value != "/")) {
            display.value += value;
        }
        let calc = display.value.toString();
        if ((value == "+") || (value == "-") || (value == "*") || (value == "/")) {
            if ((calc.slice(-1) != "+") && (calc.slice(-1) != "-") && (calc.slice(-1) != "*") && (calc.slice(-1) != "/")) {
                display.value += value
            }
            if ((calc.slice(-1) == "+") || (calc.slice(-1) == "-") || (calc.slice(-1) == "*") || (calc.slice(-1) == "/")) {
                // console.log(display.value)
                const displayInput = display.value;
                display.value = displayInput.substring(0, display.value.length - 1);
                display.value += value;
            }
        }
    }

    if (calculatedValue != 0) {
        if (((value != "+") && (value != "-") && (value != "*") && (value != "/"))) {
            display.value = "";
        }
        display.value += value;
        calculatedValue = 0;
    }
}

function input(inputValue) {
    if (!display.value) {
        display.value = "";
    }
    checkOperator(inputValue);
}

function empty() {
    display.value = "";
    calculatedValue = 0;
}

// keyboard keys for input and calculations

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {

    e.preventDefault();


    //numbers
    if (e.key === "0") {
        // checkOperator(e.key)
        checkOperator(e.key);
    } else if (e.key === "1") {
        checkOperator(e.key);
    } else if (e.key === "2") {
        checkOperator(e.key);
    } else if (e.key === "3") {
        checkOperator(e.key);
    } else if (e.key === "4") {
        checkOperator(e.key);
    } else if (e.key === "5") {
        checkOperator(e.key);
    } else if (e.key === "6") {
        checkOperator(e.key);
    } else if (e.key === "7") {
        checkOperator(e.key);
    } else if (e.key === "7") {
        checkOperator(e.key);
    } else if (e.key === "8") {
        checkOperator(e.key);
    } else if (e.key === "9") {
        checkOperator(e.key);
    }

    //operators
    if (e.key === "+") {
        checkOperator(e.key);
    } else if (e.key === "-") {
        checkOperator(e.key);
    } else if (e.key === "*") {
        checkOperator(e.key);
    } else if (e.key === "/") {
        checkOperator(e.key);
    }

    //decimal key
    if (e.key === ".") {
        display.value += ".";
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Delete") {
        empty();
    }

    if (e.key === "Backspace") {
        const displayultInput = display.value;
        display.value = displayultInput.substring(0, display.value.length - 1);
    }
}

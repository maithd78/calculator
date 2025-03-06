const numberB       = document.querySelectorAll(".number");
const operatorB     = document.querySelectorAll(".operator");
const disp          = document.querySelector(".disp-text");
const dispExp       = document.querySelector(".exp-text");
const clear         = document.querySelector("#clear");
const clearEntry    = document.querySelector("#ce");
const back          = document.querySelector("#back");
const plusmn        = document.querySelector(".plusmn");
const decimal       = document.querySelector("#decimal");
const equal         = document.querySelector("#equal");

// create arithmetic operations
const add   = () => +a + +b;
const sub   = () => +a - +b;
const div   = () => +a / +b;
const mult  = () => +a * +b;

// create variables
let sum;
let display    = "";
let a          = "";
let b          = "";
let finalsum   = "";
let finalexp   = "";
let operator   = "";
let expression = "";

// create function to evaluvate variables a and b and match with operator
function calc() {
    switch (operator) {
        case "+":
            sum = add();
            break;
        case "-":
            sum = sub();
            break;
        case "/":
            if (a == 0 || b == 0) {
                sum = "Cant Divide by 0";
            } else {sum = div();}
            break;
        case "*":
            sum = mult();
            break;
        default:
            sum = "something went wrong";
            break;
    }
}

// create functions to run when buttons are clicked
function plusminus() {
    if (+display > 0) {
        display = -Math.abs(+display);
        display = display.toString();
        disp.textContent = display;
    } else {
        display = Math.abs(+display);
        display = display.toString();
        disp.textContent = display;
    }
}
function clrEntry() {
    if (display !== "0") {
        display = "";
        disp.textContent = "0";
    }
}
function clrAll() {
    display    = "";
    a          = "";
    b          = "";
    operator   = "";
    expression = "";
    finalsum   = "";
    finalexp   = "";
    disp.textContent = "0";
    dispExp.textContent = "";
}
function bkspc() {
    if (display !== "" && finalsum == "") {    
        display = display.slice(0,-1);
        if (display == "") {
            disp.textContent = "0";
        } else {
            disp.textContent = display;
        }
    }
}
function addDecimal() {
    if (!display.includes(".")) {
        display = display + ".";
        disp.textContent = display;
    }
}
function operate() {
    if (display !== "" && a == "" && b == "") {
        disp.textContent = display
    } else {
        b = display;
        calc();
        finalsum = sum
        finalexp = expression + " " + b
        if (finalexp.at(-1) == " ") {
            finalexp = finalexp.slice(0,-2);
        }
        disp.textContent = finalsum;
        dispExp.textContent = finalexp
    }
}

// event listeners for each button
clear.addEventListener("click", clrAll);
clearEntry.addEventListener("click", clrEntry);
back.addEventListener("click", bkspc);
plusmn.addEventListener("click", plusminus);
decimal.addEventListener("click", addDecimal);
equal.addEventListener("click",operate)

numberB.forEach((button) => {
    button.addEventListener("click", () => {
        finalsum !== "" && clrAll();
        display = display + button.textContent;
        disp.textContent = display;
    })
})
operatorB.forEach((button) => {
    button.addEventListener("click", () => {
        if (display == "" && a !== "") {
            operator = button.id
            expression = expression.slice(0,-1) +" "+ button.textContent;
            dispExp.textContent = expression;
        }
        if (display !== "" && a == "") {
            a                           = display;
            display                     = "";
            operator                    = button.id;
            expression                  = a +" "+ button.textContent;
            return dispExp.textContent  = expression;
        }
        if (display !== "" && a !== "" && b == "") {
            b                           = display;
            calc();
            operator                    = button.id;
            a                           = sum;
            expression                  = expression + " " + b + " " + button.textContent;
            b                           = "";
            display                     = "";
            disp.textContent            = sum;
            return dispExp.textContent  = expression;
        }
    })
})

// functions for keyboard input
function updateDisplay() {
    finalsum !== "" && clrAll();
    display = display + event.key;
    disp.textContent = display;
}
function updateOperator() {
    if (display == "" && a !== "") {
        operator = event.key
        expression = expression.slice(0,-1) +" "+ event.key;
        dispExp.textContent = expression;
    }
    if (display !== "" && a == "") {
        a = display;
        display = "";
        operator = event.key;
        expression = a +" "+ event.key;
        return dispExp.textContent  = expression;
    }
    if (display !== "" && a !== "" && b == "") {
        b                           = display;
        calc();
        operator                    = event.key;
        a                           = sum;
        expression                  = expression + " " + b + " " + event.key;
        b                           = "";
        display                     = "";
        disp.textContent            = sum;
        return dispExp.textContent  = expression;
    }
}
// keyboard input event listener
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "1":
            updateDisplay();          
            break;
        case "2":
            updateDisplay();
            break;
        case "3":
            updateDisplay();
            break;
        case "4":
            updateDisplay();
            break;
        case "5":
            updateDisplay();
            break;
        case "6":
            updateDisplay();
            break;
        case "7":
            updateDisplay();
            break;
        case "8":
            updateDisplay();
            break
        case "9":
            updateDisplay();
            break;
        case "0":
            updateDisplay();
            break;
        case "Enter":
            operate();
            break;
        case "+":
            updateOperator();
        case "-":
            updateOperator();
            break;
        case "*":
            updateOperator();
            break;
        case "/":
            updateOperator();
            break;
        case "Escape":
            clrAll();
            break;
        case "Backspace":
            bkspc();
            break;
        case "Tab":
            clrEntry();
            break;
        case ".":
            addDecimal();
            break;
        default:
            break;
    }
})
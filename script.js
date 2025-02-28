const numButtons    = document.querySelectorAll(".numButton")
const operators     = document.querySelectorAll(".operator")
const operate       = document.querySelector(".operate")
const display       = document.querySelector(".disp")
const clear         = document.querySelector("#clr")
const backspace     = document.querySelector("#bkspc")
const decimal       = document.querySelector(".decimal")

// set default vals
let displayVal  = 0; 
let left        = "";
let right       = "";
let operator    = "";

// reset to default vals
function clr() {
    left        = "";
    right       = "";
    operator    = "";
    currentInput = "left"
}

// create operator functions
const add  = () => displayVal = +left + +right; 
const sub  = () => displayVal = +left - +right; 
const div  = () => displayVal = +left / +right; 
const mult = () => displayVal = +left * +right;

// run this function when clicking =
function operations() {
    if (operator === "+") {return add()}
    if (operator === "-") {return sub()} 
    if (operator === "/") {
        if (right == 0 || left == 0) {
            displayVal = "Can't divide by zero"
            return display.textContent = displayVal;
        }
        return div()
    }
    if (operator === "*") {return mulitiply()}
}

// numpad logic
currentInput = "left";
numButtons.forEach((button) => {
    button.addEventListener("click", function() {
        if (currentInput == "left") {
            left = "" + left +button.id;
            display.textContent = left;
        }
        if (currentInput == "right") {
            right = "" + right +button.id;
            display.textContent = right;
        }
    })
})
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == "") {
            operator = button.id;
            display.textContent = operator;
            currentInput = "right";
        } else {
            operations();
            left = displayVal;
            right = "";
            if (displayVal == "Can't divide by zero") {
                return display.textContent = displayVal;
            }   
            display.textContent = Math.round(left * 10) /10;
            operator = button.id;
            currentInput = "right";
        }
   })
})
decimal.addEventListener("click", () => {
    if (currentInput == "left") {
        if (!left.includes(".")) {
            left = left + decimal.id;
            display.textContent = left;
        }
    } else {
        if (!right.includes(".")) {
            right = right + decimal.id;
            display.textContent = right;
        }
    }
})
operate.addEventListener("click", () => {
    operations();
    if (displayVal == "Can't divide by zero") {
        return display.textContent = displayVal;
    }
    display.textContent = Math.round(displayVal * 10) /10;
    clr();
})
clear.addEventListener("click", () => {
    clr();
    displayVal = 0;
    display.textContent = displayVal;
})
backspace.addEventListener("click", () => {
    if (currentInput == "left") {
        left = left.slice(0,-1);
        if (left == "") {
            display.textContent = displayVal = 0;       
        } else display.textContent = left;
    } else if (currentInput == "right") {
        right = right.slice(0,-1);
        if (right == "") {
            display.textContent = displayVal = 0;       
        } else display.textContent = right;
    }
})

// keypress;

// document.addEventListener("keydown", (event) => {
//     currentKey = event.key
//     keypress;
// })
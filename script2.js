const numButtons = document.querySelectorAll(".numButton")
const operators = document.querySelectorAll(".operator")
const operate = document.querySelector(".operate")
const display = document.querySelector(".disp")
const clear = document.querySelector("#clr")
const backspace = document.querySelector("#bkspc")
const decimal = document.querySelector(".decimal")

// set default vals
let displayVal = 0; 
let left = "";
let right = "";
let operator = "";

// create operator functions
const add  = () => displayVal = +left + +right; 
const sub  = () => displayVal = +left - +right; 
const div  = () => displayVal = +left / +right; 
const mult = () => displayVal = +left * +right;

// run this function when clicking =
function operations() {
    if (operator === "add") {return add()}
    if (operator === "sub") {return sub()} 
    if (operator === "div") {
        if (right == 0) {
            displayVal = "Can't divide by zero"
            return display.textContent = displayVal;
        }
        return div()
    }
    if (operator === "mult") {return mulitiply()}
}

function clr() {
    left = "";
    right = "";
    operator = "";
    currentInput = "left"
}

currentInput = "left";
numButtons.forEach((button) => {
button.addEventListener("click", () => {
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
            currentInput = "right";
        } else {
            operations();
            left = displayVal;
            right = "";
            display.textContent = left;
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
    display.textContent = displayVal;
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
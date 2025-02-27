const numButtons = document.querySelectorAll(".numButton")
const operators = document.querySelectorAll(".operator")
const operate = document.querySelector(".operate")
const display = document.querySelector(".disp")
const clear = document.querySelector("#clr")
const backspace = document.querySelector("#bkspc")
const decimal = document.querySelector(".decimal")

let displayVal = 0;
let prev = "";
let next = "";
let operator = "";

const add   = () => displatVal = +prev + +next
const sub   = () => displayVal = +prev - +next 
const div   = () => displayVal = +prev / +next 
const mult  = () => displayVal = +prev * +next 

function operations() {
    if (operator === "add") {return add()}
    if (operator === "sub") {return sub()} 
    if (operator === "div") {
        if (prev || next == 0) {
            displayVal = "Can't divide by zero"
            return display.textContent = displayVal;
        }
        return div()
    }
    if (operator === "mult") {return mulitiply()}
}


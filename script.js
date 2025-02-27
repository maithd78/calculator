const numButtons = document.querySelectorAll(".numButton")
const operators = document.querySelectorAll(".operator")
const highOperate = document.querySelector(".operate")
const clear = document.querySelector("#clr")
const display = document.querySelector(".disp")

// functions for operators(+,-,/,*)
const addition = () => display.textContent = left + right;
const subtract = () => display.textContent = left - right;
const division = () => display.textContent = left / right;
const mulitiply = () => display.textContent = left * right;


let left = 0;
let right = 0;
let operator = "";
let sendNextL = "";
let sendNextR = "";
let currentInput = "left";

function operate() {
    highOperate.addEventListener("click", () => {
        currentInput = "operate";
        if (operator === "add") {return addition(left,right)}
        if (operator === "sub") {return subtract(left,right)} 
        if (operator === "div") {
            if (right == 0) {
                return display.textContent = "Can't divide by zero"
            }
            return division(left,right)
        }
        if (operator === "mult") {return mulitiply(left,right)}

    })
}

// function cal => input => leftinput => operator => input => rightinput => nextoperator or operateKey


function getInput() {
    numButtons.forEach((button) => {    
        button.addEventListener("click", () => {
            if (currentInput == "operate") {
                left = 0;
                right = 0;
                sendNextL = "";
                sendNextR = "";
                operator = "";
                currentInput = "left";
            }
            if (currentInput == "left") {
                sendNextL =  "" + sendNextL + button.id
                left = +sendNextL;
            } else if (currentInput == "right") {
                sendNextR =  "" + sendNextR + button.id
                right = +sendNextR;
            }
        })
    })
    operators.forEach((button) => {
        button.addEventListener("click", () => {
            if (operator !== "") {
                currentInput = "left";
                sendNextL = "";
                sendNextR = "";
                if (operator === "add") {return addition(left,right)}
                if (operator === "sub") {return subtract(left,right)} 
                if (operator === "div") {
                    if (right == 0) {
                        return display.textContent = "Can't divide by zero"
                    }
                    return division(left,right)
                }
                if (operator === "mult") {return mulitiply(left,right)}
            }
            currentInput = "right";
            operator = button.id;
        })
    })
    operate();
}

getInput();

clear.addEventListener("click", () => {
    currentInput = "left";
    left = 0;
    right = 0;
    sendNextL = "";
    sendNextR = "";
    operator = "";
    display.textContent = 0;
})

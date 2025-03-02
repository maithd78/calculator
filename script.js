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

for (let i=0; i< numberB.length; i++) {
    numberB[i].setAttribute("value", i);
}

const add   = () => +a + +b;
const sub   = () => +a - +b;
const div   = () => +a / +b;
const mult  = () => +a * +b;
let operators = ["+","-","*","/"]

let sum;
let display    = "";
let a          = "";
let b          = "";
let finalsum   = "";
let finalexp   = "";
let operator   = "";
let expression = "";

function calc() {
    switch (operator) {
        case "plus":
            sum = add();
            break;
        case "minus":
            sum = sub();
            break;
        case "div":
            if (a == 0 || b == 0) {
                sum = "Cant Divide by 0";
            } else {sum = div();}
            break;
        case "mult":
            sum = mult();
            break;
        default:
            sum = "0";
            break;
    }
}
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
    if (display !== "") {    
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

clear.addEventListener("click", clrAll);
clearEntry.addEventListener("click", clrEntry);
back.addEventListener("click", bkspc);
plusmn.addEventListener("click", plusminus);
decimal.addEventListener("click", addDecimal);

numberB.forEach((button) => {
    button.addEventListener("click", () => {
        if (finalsum !== "") {
            clrAll()
        }
        display = display + button.value;
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
equal.addEventListener("click", () => {
    if (display !== "" && a == "" && b == "") {
        disp.textContent = display
    } else {
        b = display;
        calc();
        finalsum = sum
        finalexp = expression + " " + b
        disp.textContent = finalsum;
        dispExp.textContent = finalexp
    }
})


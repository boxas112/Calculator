    // your code
const display = document.querySelector("#text1");

 //Number Buttons
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const button5 = document.querySelector(".btn5");
const button6 = document.querySelector(".btn6");
const button7 = document.querySelector(".btn7");
const button8 = document.querySelector(".btn8");
const button9 = document.querySelector(".btn9");
const button0 = document.querySelector(".btn0");

//Operators
const devidebtn = document.querySelector(".devide");
const multiplybtn = document.querySelector(".multiply")
const equalsbtn = document.querySelector(".equals");
const addbtn = document.querySelector(".add");
const subtractbtn = document.querySelector(".subtract")
const clearbtn = document.querySelector(".clear")


let value1 = "0";
let value2 = "0";
let chosenoperator = "";
function operate (value1, value2, chosenoperator) {
    if (chosenoperator == "*") {
    return multiply(value1, value2);
    }
    else if (chosenoperator == "+") {
    return add(value1, value2);
    }
    else if (chosenoperator == "-") {
    return subtract(value1, value2);
    }
    else if (chosenoperator == "/") {
    return devide(value1, value2);
    }
}
function add (value1, value2) {
    var addOfInt = parseInt(value1) + parseInt(value2);
    return addOfInt;
}
function subtract (value1,value2) {
    var sub = parseInt(value1) - parseInt(value2);
    return sub;
}
function multiply (value1, value2) {
    var multiInt = parseInt(value1) * parseInt(value2);
    return multiInt;
}
function devide (value1, value2) {
    if value1 && value2 == "0" {
        return ""
    }

    var devInt = parseInt(value1) / parseInt(value2);
    return devInt;

}
window.onload=function() {
button1.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("1")
    } else {
        display.placeholder = "1";
    }
})
}
button2.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("2")
    } else {
        display.placeholder = "2";
    }
})
button3.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("3")
    } else {
        display.placeholder = "3";
    }
})
button4.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("4")
    } else {
        display.placeholder = "4";
    }
})
button5.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("5")
    } else {
        display.placeholder = "5";
    }
})
button6.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("6")
    } else {
        display.placeholder = "6";
    }
})
button7.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("7")
    } else {
        display.placeholder = "7";
    }
})
button8.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("8")
    } else {
        display.placeholder = "8";
    }
})
button9.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("9")
    } else {
        display.placeholder = "9";
    }
})
button0.addEventListener("click", e => {
    if (display.placeholder != "0") {
        display.placeholder = display.placeholder.concat("0")
    } else {
        display.placeholder = "0";
    }
})
addbtn.addEventListener("click", e => {
    value1 = display.placeholder;
    chosenoperator = "+";
    display.placeholder = "0";
    console.log(value1,value2);
} )
subtractbtn.addEventListener("click",e => {
    value1 = display.placeholder;
    chosenoperator = "-";
    display.placeholder = "0";
})
devidebtn.addEventListener("click", e => {
    value1 = display.placeholder;
    chosenoperator = "/";
    display.placeholder = "0";
})
multiplybtn.addEventListener("click", e => {
    value1 = display.placeholder;
    chosenoperator = "*";
    display.placeholder = "0";
})
clearbtn.addEventListener("click", e => {
    display.placeholder = "0";
    value1 = "0";
    value2 = "0";
})
equalsbtn.addEventListener("click", e => {
    value2 = display.placeholder;
    display.placeholder = Math.round(operate(value1, value2, chosenoperator));
})

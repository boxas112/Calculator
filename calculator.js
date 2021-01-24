function operate (x, y, z) {
    var z;
    if (z === "*") {
        multiply(x,y);
        else if (z === "+") {
            add(x, y);
        else if (z === "-") {
            subtract(x,y);
        else if (z === "/") {
            devide(x, y)
        }
        }

        }
    }

}


function add (x, y) {
    var addOfInt = x+y;
    return addOfInt;
}
console.log(add(5,4));
function subtract (x, y) {
    var sub = x-y;
    return sub;

}
console.log(subtract(8, 4));
function multiply (x, y) {
    var multiInt = x * y;
    return multiInt;
}
console.log(multiply(5, 8));

function devide (x, y) {
    var devInt = x / y;
    return devInt;
}
console.log(devide(8, 2));

console.log("Welcome")


function addTwoNumbers(number1, number2) {
    return number1 + number2;

}

function substractTwoNumbers(number1, number2) {
    return number1 - number2
}

function multiplyTwoNumbers(number1, number2) {
    return number1 * number2
}

function divideTwoNumbers(number1, number2) {
    return number1 / number2
}

// START


console.log("HELLO")
const number1InputElement = document.getElementById(number1)
function getNumber1InputElement() {
    const number1InputElement = document.getElementById(number1)
    return number1InputElement;
}

const number2InputElement = document.getElementById(number2)
function getNumber2InputElement() {
    const number2InputElement = document.getElementById(number2)
    return number2InputElement;
}

function getInputElement(elementId) {
    const inputElement = document.getElementById(elementId);
    return inputElement;

}
function getInputValue(elementId) {
    const inputElement = document.getElementById(elementId);
    return inputElement.value;
}


//ADITION

const addbuttonelement = document.getElementById("addbutton")
addbuttonelement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked Add button");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");

    console.log(number1, number2);

    //addtwo numbers

    const total = addTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total");
    totalElemnt.value = total;


});
//SUBSTRACTION

const substractButtonElement = document.getElementById("substractbutton")
substractButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked substract buttton");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");

    //subtract two numbers
    const total = substractTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total");
    totalElemnt.value = total;

});

//MULTIPLYING

const multiplybuttonelement = document.getElementById("multiplybutton")
multiplybuttonelement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked multiply button");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");


    //multiply two numbers

    const total = multiplyTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total");
    totalElemnt.value = total;

});

//DIVIDING

const dividebuttonelement = document.getElementById("dividebutton")
dividebuttonelement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked divide buttton");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");

    //divide two numbers

    const total = divideTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total")
    totalElemnt.value = total;
});


//end







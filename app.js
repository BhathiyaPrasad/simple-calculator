
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

const addButtonElement = document.getElementById("addButton")
addButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Clicked Add Button");
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

const substractButtonElement = document.getElementById("substractButton")
substractButtonElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Clicked substract buttton");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");

    //subtract two numbers
    const total = substractTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total");
    totalElemnt.value = total;

});

//MULTIPLYING

const multiplybuttonelement = document.getElementById("multiplyButton")
multiplybuttonelement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Clicked multiply Button");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");


    //multiply two numbers

    const total = multiplyTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total");
    totalElemnt.value = total;

});

//DIVIDING

const dividebuttonelement = document.getElementById("divideButton")
dividebuttonelement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Clicked divide buttton");
    const number1 = getInputValue("number1");
    const number2 = getInputValue("number2");

    //divide two numbers

    const total = divideTwoNumbers(+number1, +number2);
    console.log("total", total);
    const totalElemnt = getInputElement("total")
    totalElemnt.value = total;
});


//end








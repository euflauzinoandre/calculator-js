const display = document.querySelector("#display-value");

const buttons = document.querySelector("#keyboard");
const digits = buttons.querySelectorAll(".digits");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";

//Get digits on display
digits.forEach((element) =>
	element.addEventListener("click", () => {
		if (operator == "") {
			displayValue += element.textContent;
			firstNumber = displayValue;
		}
		if (operator != "") {
			displayValue += element.textContent;
			secondNumber += element.textContent;
		}
		display.textContent = displayValue;
	}),
);

//Clear all data display
const allClear = document.querySelector("#allClear");
allClear.addEventListener("click", () => {
	display.textContent = "";
	displayValue = "";
	firstNumber = "";
	secondNumber = "";
	operator = "";
});

//Clear the last display caractere
const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
	if (secondNumber == "" && operator == "")
		firstNumber = firstNumber.slice(0, -1);
	if (secondNumber == "" && operator != "") operator = "";
	if (secondNumber != "") secondNumber = secondNumber.slice(0, -1);
	displayValue = displayValue.slice(0, -1);
	display.textContent = displayValue;
});

//Get any operator
const getOperator = document.querySelectorAll(".operators");
getOperator.forEach((element) =>
	element.addEventListener("click", () => {
		if (operator == "") {
			operator = element.textContent;
			displayValue += operator;
			display.textContent = displayValue;
		}
	}),
);

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
	displayValue = String(operate(firstNumber, secondNumber, operator));
	display.textContent = displayValue;
	firstNumber = displayValue;
	secondNumber = "";
	operator = "";
});

function operate(firstNumber, secondNumber, operator) {
	return operator == "+"
		? Number(firstNumber) + Number(secondNumber)
		: operator == "–"
			? Number(firstNumber) - Number(secondNumber)
			: operator == "x"
				? Number(firstNumber) * Number(secondNumber)
				: operator == "÷"
					? Number(firstNumber) / Number(secondNumber)
					: null;
}

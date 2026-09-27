const display = document.querySelector("#display-value");

const buttons = document.querySelector("#keyboard");
const digits = buttons.querySelectorAll(".digits");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
let resetDisplay = 0;

//Get digits on display
digits.forEach((element) =>
	element.addEventListener("click", () => {
		if (operator == "") {
			if (resetDisplay == 1) {
				displayValue = "";
				resetDisplay = 0;
			}
			displayValue += element.textContent;
			firstNumber = displayValue;
		} else {
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
	if (secondNumber == "0" && operator == "÷") {
		displayValue = "Seriously?";
		resetDisplay = 1;
	} else if (secondNumber != "" && operator != "") {
		displayValue = String(operate(firstNumber, secondNumber, operator));
		resetDisplay = 1;
		firstNumber = displayValue;
		secondNumber = "";
		operator = "";
	}
	display.textContent = displayValue;
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

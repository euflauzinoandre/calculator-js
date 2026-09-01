const display = document.querySelector("#display-value");

const buttons = document.querySelector("#keyboard");
const digits = buttons.querySelectorAll(".digits");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let value = "";

digits.forEach((element) =>
	element.addEventListener("click", () => {
		value += element.textContent;
		display.textContent += value;
	}),
);

//Clear all data display
const allClear = document.querySelector("#allClear");
allClear.addEventListener("click", () => {
	display.textContent = "";
	value = "";
});

//Clear the last display caractere
const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
	display.textContent = display.textContent.slice(0, -1);
});

//Get any operator
const getOperator = document.querySelectorAll(".operators");
getOperator.forEach((element) =>
	element.addEventListener("click", () => {
		firstNumber = value;
		operator = element.textContent;
		display.textContent = firstNumber + operator;
		value = "";
	}),
);

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
	secondNumber = value;
	display.textContent = String(operate(firstNumber, secondNumber, operator));
	value = "";
});

function operate(firstNumber, secondNumber, operator) {
	return operator == "+"
		? Number(firstNumber) + Number(secondNumber)
		: operator == "–"
			? firstNumber - secondNumber
			: operator == "x"
				? firstNumber * secondNumber
				: operator == "÷"
					? firstNumber / secondNumber
					: null;
}

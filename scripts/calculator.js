const display = document.querySelector("#display-value");

const buttons = document.querySelector("#keyboard");
const digits = buttons.querySelectorAll(".digits");

let firstNumber = "";

digits.forEach((element) =>
	element.addEventListener("click", () => {
		firstNumber += element.textContent;

		display.textContent = value;
	}),
);

const allClear = document.querySelector("#allClear");
allClear.addEventListener("click", () => {
	display.textContent = "";
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
	display.textContent = display.textContent.slice(0, -1);
});

const equal = document.querySelector("equal");
equal.addEventListener("click", () => {
	operate(firstNumber, secondNumber, operator);
});

function operate(firstNumber, secondNumber, operator) {
	return operator == "+"
		? firstNumber + secondNumber
		: operator == "–"
			? firstNumber - secondNumber
			: operator == "x"
				? firstNumber * secondNumber
				: operator == "÷"
					? firstNumber / secondNumber
					: null;
}

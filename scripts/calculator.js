const display = document.querySelector("#display");

const buttons = document.querySelector("#keyboard");
const digits = buttons.querySelectorAll(".digits");

digits.forEach((element) =>
	element.addEventListener("click", () => {
		display.textContent += element.textContent;
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

const display = document.querySelector("#display-input");
const key1 = document.querySelector("#one");
const key2 = document.querySelector("#two");
const key3 = document.querySelector("#three");
const key4 = document.querySelector("#four");
const key5 = document.querySelector("#five");
const key6 = document.querySelector("#six");
const key7 = document.querySelector("#seven");
const key8 = document.querySelector("#eight");
const key9 = document.querySelector("#nine");
const key0 = document.querySelector("#zero");
const c = document.querySelector("#c");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");

const teclas = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "/",
  "*",
  "-",
  "+",
];

const contentManeger = (content) => {
  if (
    content === "/" ||
    content === "*" ||
    content === "-" ||
    content === "+"
  ) {
    if (
      display.textContent[display.textContent.length - 1] === "/" ||
      display.textContent[display.textContent.length - 1] === "*" ||
      display.textContent[display.textContent.length - 1] === "-" ||
      display.textContent[display.textContent.length - 1] === "+"
    ) {
      return;
    }
  }
  if (display.textContent === "0") {
    display.textContent = content;
  } else if (display.textContent.length === 11) {
    return;
  } else {
    display.textContent = display.textContent + content;
  }
};

const displayClear = () => (display.textContent = 0);

const deleteLast = () => {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
  if (display.textContent.length <= 0) {
    display.textContent = 0;
  }
};

const addDecimal = () => {
  const numberList = display.textContent.split(/[/*+-]/);
  const lastNumber = numberList[numberList.length - 1];
  for (let character of lastNumber) {
    if (character === ".") {
      return;
    }
  }
  contentManeger(".");
};

const result = () => {
  try {
    let equation = eval(display.textContent);
    display.textContent = parseFloat(equation).toFixed(2);
  } catch (err) {
    display.textContent = "Error!";
    console.error(err);
  }
};

key1.addEventListener("click", () => {
  contentManeger("1");
});

key2.addEventListener("click", () => {
  contentManeger("2");
});

key3.addEventListener("click", () => {
  contentManeger("3");
});

key4.addEventListener("click", () => {
  contentManeger("4");
});

key5.addEventListener("click", () => {
  contentManeger("5");
});

key6.addEventListener("click", () => {
  contentManeger("6");
});

key7.addEventListener("click", () => {
  contentManeger("7");
});

key8.addEventListener("click", () => {
  contentManeger("8");
});

key9.addEventListener("click", () => {
  contentManeger("9");
});

key0.addEventListener("click", () => {
  contentManeger("0");
});

division.addEventListener("click", () => {
  contentManeger("/");
});

multiplication.addEventListener("click", () => {
  contentManeger("*");
});

minus.addEventListener("click", () => {
  contentManeger("-");
});

plus.addEventListener("click", () => {
  contentManeger("+");
});

decimal.addEventListener("click", () => {
  addDecimal();
});

c.addEventListener("click", () => {
  displayClear();
});

backspace.addEventListener("click", () => {
  deleteLast();
});

equals.addEventListener("click", () => {
  result();
});

document.addEventListener("keydown", (e) => {
  for (const tecla of teclas) {
    if (e.key === tecla) {
      contentManeger(e.key);
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === ".") {
    addDecimal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Delete" || e.key === "Escape") {
    displayClear();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    deleteLast();
  }
});

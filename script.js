//Even Odd Emozy
// Heading
let heading = document.createElement("h2");
heading.innerText = "Even Odd Emozy";
document.body.appendChild(heading);
let input = document.createElement("input");
input.type = "number";
input.placeholder = "Enter a number";
document.body.appendChild(input);

let btn = document.createElement("button");
btn.innerText = "Click";
document.body.appendChild(btn);

let result = document.createElement("h1");
document.body.appendChild(result);

btn.addEventListener("click", function() {
  let num = parseInt(input.value);


  if (num % 2 === 0) {
    for (let i = 0; i < num; i++) {
      result.innerText += "🙂 ";
    }
  } else {
      for (let i = 0; i < num; i++){
         result.innerText += "😢 ";
    }
  }
  }
);


//BOX 1: CALCULATOR
let calcBox = document.createElement("div");
document.body.appendChild(calcBox);

calcBox.innerHTML = "<h2>Calculator</h2>";

// Inputs
let num1 = document.createElement("input");
let num2 = document.createElement("input");

num1.placeholder = "Number 1";
num2.placeholder = "Number 2";

calcBox.appendChild(num1);
calcBox.appendChild(num2);

// Result
let calcResult = document.createElement("h3");
calcBox.appendChild(calcResult);

// Button function
function createBtn(text, op) {
  let btn = document.createElement("button");
  btn.innerText = text;

  btn.onclick = function () {
    let a = Number(num1.value);
    let b = Number(num2.value);

    if (op === "+") calcResult.innerText = a + b;
    if (op === "-") calcResult.innerText = a - b;
    if (op === "*") calcResult.innerText = a * b;
    if (op === "%") calcResult.innerText = a % b;
  };

  calcBox.appendChild(btn);
}

// Buttons
createBtn("+", "+");
createBtn("-", "-");
createBtn("*", "*");
createBtn("%", "%");


// BOX 2: ARRAY PROCESSOR
let arrBox = document.createElement("div");
document.body.appendChild(arrBox);

arrBox.innerHTML = "<h2>Array Processor</h2>";

// Input
let inp = document.createElement("input");
inp.placeholder = "1,2,3,4";

arrBox.appendChild(inp);

// Result
let res = document.createElement("h3");
arrBox.appendChild(res);

// Convert input to array
function getArr() {
  return inp.value.split(",").map(Number);
}

// SUM
let sumBtn = document.createElement("button");
sumBtn.innerText = "Sum";

sumBtn.onclick = function () {
  let arr = getArr();
  let sum = arr.reduce((a, b) => a + b, 0);
  res.innerText = sum;
};

arrBox.appendChild(sumBtn);

// MAX
let maxBtn = document.createElement("button");
maxBtn.innerText = "Max";

maxBtn.onclick = function () {
  let arr = getArr();
  res.innerText = Math.max(...arr);
};

arrBox.appendChild(maxBtn);

// EVEN
let evenBtn = document.createElement("button");
evenBtn.innerText = "Even";

evenBtn.onclick = function () {
  let arr = getArr();
  let even = arr.filter(n => n % 2 === 0);
  res.innerText = even;
};

arrBox.appendChild(evenBtn);



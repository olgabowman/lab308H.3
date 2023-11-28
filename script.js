// fizzbuzz.js
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

// prime.js
let n = 4; // Change this to your arbitrary number

while (true) {
  let isPrime = true;
  n++;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && n > 1) {
    console.log(n);
    break;
  }


}

// csv-parser.js
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let currentCell = "";
let rowData = [];
let isInCell = false;

for (let i = 0; i < csvString.length; i++) {
  const currentChar = csvString[i];

  if (currentChar === "," && !isInCell) {
    rowData.push(currentCell.trim());
    currentCell = "";
  } else if (currentChar === "\r" || currentChar === "\n") {
    rowData.push(currentCell.trim());
    console.log(rowData.join(", "));
    rowData = [];
    currentCell = "";
    isInCell = false;

    // Skip the next character if it is '\n'
    if (currentChar === "\r" && csvString[i + 1] === "\n") {
      i++;
    }
  } else {
    currentCell += currentChar;
    isInCell = true;
  }
}

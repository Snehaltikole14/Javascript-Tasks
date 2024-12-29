function displayoutput() {
  //Convert Minute To Seconds
  const minutes = 5; // You can change this value
  const seconds = minutes * 60;
  const outputElement = document.getElementById("output");

  // Incremented By 1
  const number = 10;
  const increment = number + 1;

  //Area Of Triangle
  const height = 10;
  const base = 20;
  const Area = (1 / 2) * base * height;

  // perimeter of Rectangle
  const length = 50;
  const width = 30;
  const perimeter = 2 * (length + width);

  //Sum is Less Than 100
  const num1 = 20;
  const num2 = 10;
  const sum = num1 + num2;

  outputElement.innerHTML =
    "1. Write a function that takes an integer minutes and converts it to seconds.<br>";
  outputElement.innerHTML += `Ans => ${minutes} minutes is equal to ${seconds} seconds.<br> <br>`;

  outputElement.innerHTML +=
    "2. Create a function that takes a number as an argument, increments the number by +1 and returns the result.<br>";
  outputElement.innerHTML += `Ans => Number ${number} is incremented by 1, resulting in ${increment}<br><br>`;

  outputElement.innerHTML +=
    "3. Write a function that takes the base and height of a triangle and return its area.<br>";
  outputElement.innerHTML += `Ans => Area Of Triangle = ${Area}m <br><br>`;

  outputElement.innerHTML +=
    "4. Create a function that takes length and width and finds the perimeter of a rectangle.<br>";
  outputElement.innerHTML += `Ans => perimeter Of rectangle = ${perimeter}<br><br>`;

  outputElement.innerHTML +=
    "5. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.<br>";
  if (sum < 100) {
    outputElement.innerHTML += `Ans => True  The Sum of Given Number ${num1} & ${num2} is Less than 100 <br><br>`;
  } else {
    outputElement.innerHTML += `Ans => false ${sum}`;
  }

  outputElement.innerHTML +=
    "5. Write a function that checks whether a number is even or odd.<br>";
  if (num1 % 2 === 0) {
    outputElement.innerHTML += `Ans=> This Number Is EVEN <br><br>`;
  } else {
    outputElement.innerHTML += `Ans => This Number Is ODD`;
  }
}

const button = document.getElementById("showoutputbutton");
button.addEventListener("click", displayoutput);

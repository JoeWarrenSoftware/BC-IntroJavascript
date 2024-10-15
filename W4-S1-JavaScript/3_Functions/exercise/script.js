function calculateSum(a, b) {
  console.log("The sum of the numbers is: " + (a + b));
}

calculateSum(5, 10);

function multiplyNumbers(a, b) {
  return a * b;
}

let result = multiplyNumbers(5, 1);
console.log("The result is: " + result);


function calculate(input1, input2, operator)
{
  if (typeof input1)
  switch (operator) {
    case "add":
      return in1 + in2;
    case "subtract":
      return input1 - input2;
    case "multiply":
      return input1 * input2;
    case "divide":
      if (input2 == 0)
      {
        console.log("Divide by zero error");
        return;
      }
      return input1 / input2;
    default:
        console.log("Invalid Operator");
  }
}

// Example valid usage:
console.log(calculate(10, 5, "add")); // Output: 15
console.log(calculate(10, 5, "subtract")); // Output: 5
console.log(calculate(10, 5, "multiply")); // Output: 50
console.log(calculate(10, 5, "divide")); // Output: 2
console.log(calculate(10, 5, "div")); // Output: Invalid Operator
console.log(calculate(10, 0, "divide")); // Output: Divide by zero error

let A = 10;
if (typeof A == Number)
{

}
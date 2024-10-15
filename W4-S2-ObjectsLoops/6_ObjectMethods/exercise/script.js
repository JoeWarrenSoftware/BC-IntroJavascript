// 1. Object.keys() - TODO: WHat does this method do? What is the output?

// A: Returns the object's property names.
// Below example prints Keys: ["name", "age", "city"]

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.log("Keys:", Object.keys(person));

// 2. Object.values() - TODO: WHat does this method do? What is the output?

// A: Returns an array of the objects values
// Below example prints Values: [Alice, 30, New York]

console.log("Values:", Object.values(person));

// 3. Array.push() - TODO: WHat does this method do? What is the output?

// A: Inserts a new object into the array
// Output: After push: ['apple', 'banana', 'orange']

let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

// 4. Array.pop() - TODO: WHat does this method do? What is the output?

// A: Removes the last element of the array
// Output: After pop: ['apple', 'banana']
// Output: Popped fruit: orange

let poppedFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Popped fruit:", poppedFruit); // "orange"

// 5. Array.shift() - TODO: WHat does this method do? What is the output?

// A: Moves each element of the array down an index (1st element is removed).
// Similar to a pop(), but for 1st index

let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // ["banana"]
console.log("Shifted fruit:", shiftedFruit); // "apple"

// 6. Array.concat() - TODO: WHat does this method do? What is the output?

// A: Creates a new array using an input of two or more arrays

let vegetables = ["carrot", "potato"];
let food = fruits.concat(vegetables);
console.log("After concat:", food); // ["mango", "banana", "carrot", "potato"]

// 7. Array.indexOf() - TODO: WHat does this method do? What is the output?

// A: Returns the index of the first occurence of the element in the array.
// There is also a ReturnLastIndexOf that gets the last occurrence. 

let index = food.indexOf("banana");
console.log("Index of banana:", index); // 1

// 8. Array.includes() - TODO: WHat does this method do? What is the output?

// A: Returns a true or false based on whether the element query exists in the array.

let hasMango = food.includes("mango");
console.log("Array contains mango:", hasMango); // true

// 9. Array.filter() - Creates a new array with all elements that pass a test

// A: Creates a new array of a subset of the input array, ased on a condition

let longFoods = food.filter((item) => item.length > 5);
console.log("Foods with more than 5 letters:", longFoods); // ["banana", "carrot", "potato"]

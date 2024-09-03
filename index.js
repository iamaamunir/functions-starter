// index.js

// Function to add two numbers
function add(a, b) {
  return a + b
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero"
  }
  return a / b
}

add(5, 6)
subtract(4, 1)
multiply(6, 3)
divide(6, 3)

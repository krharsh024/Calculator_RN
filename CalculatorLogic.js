import React from "react";

export default function Calculate(input:String) {
    const operators = ['+', '-', '*', '/'];
    const inputArray = input.split(' ');
    const num1 = Number.parseInt(inputArray[0]);
    const operator = inputArray[1];
    const num2 = Number.parseInt(inputArray[2]);
  
    if (isNaN(num1) && isNaN(num2)) {
        return 'Both INs';
      }

      if (isNaN(num1) ) {
        return 'invalid num1';
      }

      if (isNaN(num2) ) {
        return 'invalid num2';
      }

    if (isNaN(num1) || isNaN(num2)) {
      return 'Either Ins';
    }
  
    if (!operators.includes(operator)) {
      return 'Invalid operator';
    }
  
    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        if (num2 === 0) {
          return 'Cannot divide by zero';
        }
        return (num1 / num2).toString();
      default:
        return 'Invalid input';
    }
  };
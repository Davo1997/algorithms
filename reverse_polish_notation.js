/*
  Algorithm to solve reverse Polish notation
*/

function check_notation(a) {
  const stack = [];
  for(let i = 0; i < a.length; i++) {
    if(['+', '-', '*', '/'].includes(a[i])) {
      const operation = a[i];
      let y = parseInt(stack.pop());
      let x = parseInt(stack.pop());
      if(isNaN(x) || isNaN(y)) {
        break;
      }

      if(operation === '+') {
        stack.push(x + y);
      } else if(operation === '-') {
        stack.push(x - y);
      } else if(operation === '*') {
        stack.push(x * y);
      } else {
        stack.push(Math.floor(x / y));
      }
    } else {
      const digit = parseInt(a[i], 10);
      if(isNaN(digit)) {
        break;
      }
      stack.push(digit);
    }
  }
  if(stack.length === 1) {
    return stack[0];
  }
  return 'Wrong digits, operations or notation sequence provided...';
}

const test1 = ['2', '5', '+'];
const test2 = ['2', '5', '7', '*', '+'];
const test3 = ['*', '2', '5', '7', '*', '+'];

console.log(check_notation(test1)); // 7
console.log(check_notation(test2)); // 37
console.log(check_notation(test3)); // Wrong digits, operations or notation sequence provided...

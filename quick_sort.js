// Complexity -> worst: N**2, average: N(logN)

function quick_sort(elements) {
  if(elements.length <= 1) {
    return elements;
  }
  let barrier = elements[0];
  let left = [];
  let equal = [];
  let right = [];
  let i = 0;
  while(i < elements.length) {
    if(elements[i] < barrier) {
      left.push(elements[i]);
    } else if(elements[i] === barrier) {
      equal.push(elements[i]);
    } else {
      right.push(elements[i]);
    }
    i++;
  }
  left = quick_sort(left);
  right = quick_sort(right);
  const result = left.concat(equal, right);
  return result;
}

let a = [4,5,2,3,1,5,1,2,4,9,0,2];
let b = [5,4,3,2,1,0,-1];

console.log('\n --------->', quick_sort(a));
console.log('\n --------->', quick_sort(b));

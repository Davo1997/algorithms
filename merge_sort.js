// Complexity -> worst: N(logN)

function merge(a, b) {
  let result = [];
  let i = 0;
  let j = 0;
  while(i < a.length && j < b.length) {
    if(a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  // solution # 1
  if(i < a.length) {
    result.push(...a.slice(i, a.length));
  } else {
    result.push(...b.slice(j, b.length));
  }

  // solution # 2 (anyway one of the arrays is empty, so there will be 0 iterations)
  /*
    while(i < a.length) {
      result.push(a[i]);
      i++;
    }
    while(j < b.length) {
      result.push(b[j]);
      j++;
    }
  */
  return result;
}

function merge_sort(list) {
  if(list.length <= 1) {
    return list;
  }
  const middle = Math.ceil(list.length / 2);
  let left = list.slice(0, middle);
  let right = list.slice(middle, list.length);
  left = merge_sort(left);
  right = merge_sort(right);
  return merge(left, right);
}

let a = [4,5,2,3,1,5,1,2,4,9,0,2];
let b = [5,4,3,2,1,0,-1];

console.log('\n --------->', merge_sort(a));
console.log('\n --------->', merge_sort(b));

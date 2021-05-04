// searchClosest(4.5, [-1.5, 0, 4.4, 5, 6, 7]);
// => 4.4

// searchClosest(5.5, [-1.5, 0, 4.4, 5, 6, 7]);
// => 6

// Assumption: First diff is the initial min
// loop can check differences between N and each element
// minimum difference = closest in value
// if other differences match the minimum, choose the greater


function searchClosest(N, inputArray) {
  let minDiff = Math.abs(inputArray[0] - N);

  let closestNum = inputArray[0];

  for(let i =1; i < inputArray.length; i++) {
    let currentDiff = Math.abs(inputArray[i] - N);
    // let greaterVal = 0;
    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      closestNum = inputArray[i];
    } else if (currentDiff == minDiff && closestNum < inputArray[i]) {
      closestNum = inputArray[i];
    }
  }

  return closestNum;
}

console.log(searchClosest(4.5, [4.4, -1.5, 0, 5, 6, 7]));
console.log(searchClosest(5.5, [-1.5, 0, 4.4, 5, 6, 7]));
console.log(searchClosest(3, [2, 1, 4, 6]));
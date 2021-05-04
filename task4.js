// function doit($a, $b) {
//   return ($b == 0) ? $a : doit($b, $a % $b);
// }

// Example: doit(1071, 1029) => 21

// Running through the example...
// FIRST
// function doit(1071, 1029) {
//   return (1029 == 0) ? 1071 : doit(1029, 1071 % 1029);
// }

// SECOND
// function doit(1029, 42) {
//   return (42 == 0) ? 1029 : doit(42, 1029 % 42);
// }

// THIRD
// function doit(42, 21) {
//   return (21 == 0) ? 42 : doit(21, 42 % 21);
// }

// FOURTH
// function doit(21, 0) {
//   return (0 == 0) ? 21 : doit(0, 21 % 0);
// }

//ANS => 21

function doit(a, b) {
  // let x;
  let modResult;

  while (modResult != 0) {
    modResult = a % b;
    // x = a;
    a = b;
    b = modResult;
  }
  return a
}

console.log(doit(1071, 1029));
// @flow

// (function () {
// function foo(x) {
//   return x * 10
// }

// foo('Hello, world!')
// })

// (function() {
// function foo (x: string, y: number): string {
//   return x.length * y
// }

// foo('Hello', 42);
// });

function checkForThing (a) {
  if (a > 10) {
    return 'Okay!'
  }
};

console.log(checkForThing(1).toString())

function total(numbers: Array<number>) {
  var result = 0
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }
  return result;
}

total([1, 2, 3, 'Hello'])

// function length (x) {
//   return x.length
// }
// var total = length('Hello') + length(null)

// console.log(total)



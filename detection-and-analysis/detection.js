// let add = (a, b) => {
//   return a + b;
// };

// console.log('logging add', add(10, 20));

// let mac = {
//   name: 'mac',
//   instructor: true
// };

// console.log(mac);

// function nested() {
//   function nestedAgain() {
//     function anotherNest() {
//       function aLotOfBirdsHere() {
//         console.trace('nested trace');
//       }
//       aLotOfBirdsHere();
//     }
//     anotherNest();
//   }
//   nestedAgain();
// }

// nested();

let x = 0;

for (var i = 0; i < 10; i++) {
  console.log('some context ', i);
  console.count('some context');
  i = 10;
}

console.count('outside the loop');

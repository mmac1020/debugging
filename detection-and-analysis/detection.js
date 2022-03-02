const add = (a, b) => a + b;

console.log('logging add', add(10, 20));

const mac = {
  name: 'mac',
  instructor: true,
};

console.log(mac);

function nested() {
  function nestedAgain() {
    function anotherNest() {
      function aLotOfBirdsHere() {
        console.trace('my stack trace log');
      }
      aLotOfBirdsHere();
    }
    anotherNest();
  }
  nestedAgain();
}

nested();

const x = 0;

for (let i = 0; i < 100; i++) {
  console.count('to make it obvious that I am console counting');
}

const foo = 'foo';

function add(a, b) {
  return a + b;

  console.log('hello');
}
function nestedFunctions() {
  function anotherNest() {
    const c = 10;

    function anotherNestNest() {}
  }
}

console.log(add(1, 2));

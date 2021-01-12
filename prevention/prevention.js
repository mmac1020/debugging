const foo = 'foo';

function add(a, b) {
  return a + b;
}
function nestedFunctions() {
  function anotherNest() {
    const c = 10;
    function anotherNestNEst() {}
  }
}

console.log(add(1, 2));

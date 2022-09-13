function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return (num1 < num2 ? num2 - num1 : num1 - num2);
};

// Tests
console.log(add(1, 2));
console.log(add(-1, -3));
console.log(add("3", 3));
console.log(add("teste", 4));

console.log(subtract(1, 2));
console.log(subtract(-1, -4));
console.log(subtract("teste", 4));
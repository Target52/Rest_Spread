const som = (...getallen) => getallen.reduce((vorige, huidige) => vorige + huidige);


console.log(som(1, 2, 3, 4, 5, 6));

const som2 = (x, y, z) => x + y + z;

let nummers = [1, 2, 3];
console.log(som2(...nummers));
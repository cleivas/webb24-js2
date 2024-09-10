const car = {
    make: 'Saab',
    model: '9-5',
    year: 2007
}

// const make = car.make;
const {year, make} = car;

console.log(make, year);

const numbers = [34, 32, 432, 66, 52, 3];
// const a = numbers[0];
const [a, b, c] = numbers;
console.log(a, b, c);
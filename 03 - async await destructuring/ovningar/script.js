// övning destruct 4
const item = {
    name: 'Xbox One X',
    originalPrice: 499.99,
    discount: 0.15
}
const item2 = {
    name: 'Xbox One X',
    originalPrice: 100,
    discount: 0.5
}


const {originalPrice, discount} = item;
console.log(originalPrice, discount)

function getPrice({originalPrice, discount}, quantity){
    return originalPrice * quantity * (1-discount);
}

let totalPrice = getPrice(item, 2);
console.log('item1: ', totalPrice)

totalPrice = getPrice(item2, 20);
console.log('item2: ', totalPrice)


// övning spread - 6

function addProp(obj){
    const clonedObj = {...obj}
    clonedObj.location = 'Malmö';
    return clonedObj;

    // När vi inte klonar objektet resulterar det i att objektet som vi skickade in som argument får en ny egenskap
    // obj.location = 'Malmö';
    // return obj;
}


const person = {
    first: 'Nicholas',
    last: 'Cage',
}

const clonedPerson = addProp(person);

console.log(person, clonedPerson);


const arr = [3, 3, 24, 234, 423]
console.log(arr);
console.log(...arr)
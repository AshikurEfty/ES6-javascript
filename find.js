const numbers = [2,10,40,60, 3, 43, 5, 6];

const fives = numbers.find(num => num % 5 ===0)
const fiveAll = numbers.filter(num => num % 5 == 0);
console.log(fives);
console.log(fiveAll);

const products = [
    {id: 1, name: 'laptop', price: 45000}, 
    {id: 2, name: 'mac', price: 50000},
    {id: 3, name: 'hp', price: 56000},
    {id: 3, name: 'lenovo', price: 76000} 
];


const cheap = products.find(product => product.price < 50000);
console.log(cheap);
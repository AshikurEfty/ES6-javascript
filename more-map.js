const numbers = [12, 56, 87,44];
const half = numbers.map( n=> n/2 );
const thirds = numbers.map( x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom hanks','Tom minu','Tom cruis','Tom shanu','Tom banu',];
const firstLetters = friends.map( friend => friend[0]);
console.log(firstLetters);

const products = [
    {id: 1, name: 'laptop', price: 45000}, 
    {id: 2, name: 'mac', price: 50000},
    {id: 3, name: 'hp', price: 56000} 
]
const items = products.map(product => product.name);
const prices = products.map(p=>p.price);
console.log(prices);
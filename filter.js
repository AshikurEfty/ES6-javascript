const numbers = [2,10,40,60, 3, 43, 5, 6];
const maxNumber = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter( x => x % 2 == 0);
console.log(even);
console.log(tiny);
console.log(maxNumber);


const products = [
    {id: 1, name: 'laptop', price: 45000}, 
    {id: 2, name: 'mac', price: 50000},
    {id: 3, name: 'hp', price: 56000} 
]
const expesive = products.filter(product => product.price > 50000);
console.log(expesive);
const  max = Math.max(12,23,34,45);
const  numbers = [23,45,5,6,67];
const largest = Math.max(numbers);

console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(10);
numbers2.push(11);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

 const numbers4 = [3,4,5, ...numbers , 33]
 console.log(numbers4);


 //Arrow function
 const doubleIt = x * 2;
 const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

 //5. spread
 const ages = [11,22,33,44,12,23,45];
 const newAges = agesAges = [...ages, 22,24,23];

 // destructuring
const {x,y,z, ...c} = {x: 45, y:12, z:33, name: 'Sakib al Hasan'};

const [a, b, ...r] = [12,45,21,65,98];
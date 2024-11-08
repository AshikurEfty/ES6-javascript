const fish = { 
    name : 'King Hilsa',
    address : 'Chandpur',
    color: 'silver',
    phone: '0332323',
    price: 49999
}

const phone = fish.phone;
const color = fish.color;
const price = fish.price;

const {address} = fish;
console.log(address);



// console.log(phone);
// console.log(color);
// console.log(price);

const {age,name} = {name: 'Almas', age: 45, profession: 'sir'};
console.log(age);
console.log(name);

// array destructuring
const [first, another] = [2,3,4,5,6];
console.log(first,another);


const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getNames();
console.log(baba,chacha);

const y = (x) => x*x;
 const z = y(5);
 console.log(z);

 const name1 = 'Hero';
 const greetings = `Welcome Home! ${name1}`;

 console.log(greetings);

 const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
 const array2 = [nayikas];
 console.log(...array2);
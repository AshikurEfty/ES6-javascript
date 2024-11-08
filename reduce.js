//map, forEache, filter, find, reduce
const numbers = [1,2,3,4,5];
// .reduce (accumulatiorFunciton, initial value)
// ccumulatorFunction use two parameters


// const total = numbers.reduce((prevous, current) => prevous + current ,0);

const total = numbers.reduce((prevous, current) => {
    console.log(prevous,current);
   return prevous + current
}, 0);
console.log(total);
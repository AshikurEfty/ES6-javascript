const numbers = [2, 3, 4, 5, 6];

const output = [];
for(const number of numbers){
    const double = number * 2;
    output.push(double);
}
// console.log(output);



function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = doublesIt(number);
        output.push(doubled);
    }
    return output;
}

function doublesIt(number){
    return number * 2;
}

// const result = getDoubles(numbers);
// console.log(result);




function doubleItOld(num){
    return num * 2;
}

;


// const result = getDoubles(numbers);
// console.log(result)

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x*2);
console.log(makeDoubleDirect);

const fiveTimes = [1,2,3,4,5].map(x=> x*5);
console.log(fiveTimes);


const nums = [1,2,3,4,5];
let output1 = nums.filter(n => n%2);
console.log(output1);
const add = (first, second) => first + second;

const getFullName = (first, last) => first + '' + last;

const multiply = (a,b) => a*b;

const result = multiply(7,5);
// console.log(result);

const addAll = (a,b,c,d,e,f) => a+b+c+d+e+f;
console.log(addAll(2,3,4,5,6,7))

const getPie = ()=> 3.1416;
console.log(getPie());

//one parameter
// const doubleIt = (num)=> num*2;

//one parameter simple version
const fiveTimes=num=>num*2;
console.log(fiveTimes(5))


//multiline arrow function
const doMath = (x,y,z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}
console.log(doMath(3,4,5));
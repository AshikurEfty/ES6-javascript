// function declaration
// function  add(first, second){
//     const total = first + second;
//     return total;
// }

// const result = add(10,20);
// console.log( result);

const number = 56;

//function expression
const addOne = function  add1(first, second){
    const total = first + second;
    return total;
}

//function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}
// console.log(addOne(5,4));
// console.log(add2(6,7));




function add4(first, second){
    return first + second;
}

const add5 = function(first, second){
    return first + second;
}
const add6 = (first,second) => {return first + second};
console.log(add6(5,4));

// arrow funciton
const add7 = (first,second) => first + second;
console.log(add7(10,20));

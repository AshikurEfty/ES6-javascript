// function add(first, second){
//     console.log(first, second);
//     if(second == undefined){
//         second = 0;
//     }
//     const total = first + second ;
//     return total;
// }
// const result = add(10);
// console.log(result);


function add(first, second=0){
  const total = first + second ;
    return total;
}
const result = add(10,20);
console.log(result);

function fullName(first, second= ' Rahman'){
  const name = first + '' + second;
  return name;
}
const name = fullName('Ashikur');
console.log(name);
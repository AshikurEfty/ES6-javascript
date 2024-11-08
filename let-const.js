// breakup with var
// no more use of var
// let: let it to reassign
// const : do not allow it to ressign

 let money = 25;
 money = 35;
 console.log(money);

 const bird = 'jan pakhi';
//  bird = 'moyna pakhi';
 console.log(bird)

 const numbers = [2,3,4,5,6];
 numbers.push(23,34,45);
 numbers[3]=50;
 console.log(numbers);

const students = {
    name: 'ashikur',
    age: 24,
    place: 'jashore'
}
students.name = 'efty';

console.log(students);

for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

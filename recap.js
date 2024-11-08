// var let const 
// bread up with var
// const numbers = [2,3,4,5,6];
// let salary = 45;
// salary = 33;

// default parameters
function calculateSalary(salary,tax= 2,bonus= 0){
    const remaining = salary - tax;
    const total = remaining + bonus;
    return total;
}
console.log(calculateSalary(20));

// Element starting
const element = `
<div>
    <h3>Name:</h3>
    <h4>Address:${calculateSalary(1000,0,0)}</h4>
    <p>Salary:${number[2]}</p>
</div>

`
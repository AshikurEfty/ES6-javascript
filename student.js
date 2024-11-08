const student = {
    name: 'kokil mia',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}
const marks = student.marks;
const math = student.marks.math;
const chemistry = student['marks']['chemistry'];
console.log(chemistry);
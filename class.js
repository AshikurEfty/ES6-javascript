// syntactic sugar 
class Instructor{
    name;
    designation = 'web Course Instructior '
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log('Please create quiz for module ${module}')
    }
}
const amir = new Instructor('amir','mombai');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(60);

const solaiman = new Instructor('Solaiman khan', 'dhaka');
console.log(solaiman);
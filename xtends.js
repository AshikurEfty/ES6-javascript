class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`$(this.name) thank you for your feedback.`)
    }
}


class Developer extends TeamMember {
    name;
    designation = 'web Course Instructior '
    team = 'web team'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log('Please create quiz for module ${module}')
    }
    provideFeedback() {
        console.log(`${this.name} thak you for your feedback.`)
    }
}





class Instructor extends TeamMember {
    name;
    designation = 'job placement comanddos'
    team = 'Job Placement'
    tech;
    constructor(name, location) {
        super(name, location);
        this.tech = tech;
    }
    developerfeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`Please create quize for module ${version}`)
    }
}

const alia = new Developer('Alia Bhat', 'Dhaka', 'react');
console.log(alia);

alia.provideFeedback();
const bipasha = new JobPlacement('bipasha', 'kolkata', 'India');
console.log(bipasha);

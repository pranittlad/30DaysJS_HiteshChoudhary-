class person{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `My anme is ${this.firstName} ${this.lastName}`
    }
    set fullName(name){
    const [firstName,lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName =lastName;
    }
}
const student1 = new person("dexy","daddy")
console.log(student1.fullName);
student1.fullName = 'pranit raju'
console.log(student1.fullName);
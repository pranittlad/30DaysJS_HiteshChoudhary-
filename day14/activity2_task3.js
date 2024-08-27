class person{
    constructor(name,age,born){
        this.name = name;
        this.age = age;
        this.born = born;
    }

    greething(){
        return `Greetings, ${this.name}bhai`;
    }

    changeAge(newage){
        this.age = newage;
        console.log(`the age is change${this.age}`);  
    }
}
const person2 = new person("pranit","20","2004")

// console.log(person2.greething()); 
// person2.changeAge(23);

class student extends person {
    constructor(name,studentId){
        super(name);
        this.studentId = studentId;
    }

    studentIdPrinter(){
        return this.studentId;
    }

    greething(){
        return `${super.greething()} (studentId : ${this.studentId})`
    }
}
const mai = new student("sanju",1)

console.log(mai.studentIdPrinter());
console.log(mai.greething());

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

console.log(person2.greething()); 
// console.log(person2.changeAge(12)); 
person2.changeAge(23);
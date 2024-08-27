class student{

    static count = 0;
    constructor(name , age){
        this.name = name;
        this.age = age;
        student.increment()
    }
    static increment(){
        student.count ++
        console.log(`the count of student is ${student.count}`);
    }
}
const student1 = new  student('de', 12)
const student2 = new  student('ce', 12)
const student3 = new  student('te', 12)

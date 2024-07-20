//task 3

const book = {
    title:"Mody-dick",
    author:"Herman",
    year:1815
    }
    book.dick = function() {
        console.log(`the title is ${this.title}`)
    }
console.log(book.dick())

// task 4

book.dick2 = function (year){
    book.year = 1815;
    console.log(`the year is ${this.year}`)
}
console.log(book.dick2())
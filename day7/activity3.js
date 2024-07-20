const Library ={
    name:"Modern college",
    book:[
        {
            title:"Mody-dick",
            author:"Herman",
            year:1815,
    },
    {
        title:"The Red and the Black",
        author:" Stendhal ",
        year:1811,
    },
    {
        title:"War and Peace ",
        author:"pranit ",
        year:1890,
    },
]
};
console.log(Library.book);

// task 6
Library.seacrh = function(){
    console.log(`the name of the libary is${this.name}`)
}

console.log("Library Name: " + Library.name);
Library.book.forEach((book, index) => {
    console.log(`Book ${index + 1}:`);
    console.log(`  Title: ${book.title}`);
    
});

// task 7

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
// task 8
for (let i = 0; i < Library.book.length; i++) {
    for (let a in Library.book[i]) {
        console.log(a + ":", Library.book[i][a]);
    }
}


Library.book.forEach(book =>{
    Object.keys(book).forEach(key =>{
        console.log(key + ":",book[key]);
    })
})
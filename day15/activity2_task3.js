function mainn(){
    let  id = 0;
    return function(){
            id += 1;
            return id;
        }
    }


const user = mainn()
console.log(user())
console.log(user())
console.log(user())
console.log(user())
console.log(user())
console.log(user())
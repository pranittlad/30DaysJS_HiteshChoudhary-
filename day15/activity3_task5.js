function createFunction(n){
    const functions = []
        
    for (let i = 0; i < n; i++) {
        functions.push(
            (function (index) {
                return function () {
                    console.log(index)
                }
            })(i)
        )
        
    }
    return functions;
}

const funcs = createFunction(5);
funcs[0](); 
funcs[1](); 
funcs[2](); 
funcs[3](); 
funcs[4](); 
function outer (){
    let value  = 0;

    return{
        inncrement : function(){
            value += 1;
        },
        returning(){
            return value;
        }

    }
}
const result = outer();

result.inncrement();
console.log(result.returning());
result.inncrement();
console.log(result.returning());
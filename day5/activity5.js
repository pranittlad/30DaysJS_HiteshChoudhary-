function HigerOrder(string,num){
    return function (){
        for(let i =0; i< num; i++){
            string();
        }
    }
}
const sayHello = () => console.log("Hello!");
const hello = HigerOrder(sayHello, 5);

hello()


function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
  }
  

  function addFive(x) {
    return x + 5;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  const initialValue = 10
  const finalResult = applyFunctions(addFive, multiplyByThree, initialValue);
  
  console.log(finalResult); 
  
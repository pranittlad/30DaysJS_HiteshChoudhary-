//Comparison Operation
var num1 = 40;
var num2 = 30;

if(num1 > num2){
    console.log(`${num1}is greather then ${num2}`);
};

num1 = 10;
num2 = 20;
if(num1 < num2){
    console.log(`${num1}is less then ${num2}`);
};

var number1 = 40;
var number2 = 40;

if(num1 >= num2){
    console.log(`${num1}is greather = ${num2}`);
};

num1 = 20;
num2 = 20;
if(num1 <= num2){
    console.log(`${num1}is less = ${num2}`);
};

num1 = 10;
num2 = "10";
if(num1 == num2){
    console.log(`${num1}is equal to ${num2}`);
};

num1 = 10;
num2 = 10;
num3 = "10";
if(num1 === num3){
    console.log(`${num1}is equal to ${num3}`);
}else{
    console.log(`${num1}is not equal to bcus of  diffrent datatype${num2}`);
}

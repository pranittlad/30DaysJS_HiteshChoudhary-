//For loop
// task 1
for(let i =1; i<=10;i++){
    console.log(i)
    }
    
    // task 2
    
    for(let i = 5; i < 51; i= i+5){
        console.log(i)
        }
 // While loop
 
 // task 3

let i = 1;
let number = 0;

while (i <= 10) {
 number += i;
 i++
}
console.log(`The num of 1 to 10 is:${number}`)

// task 4

i = 11;
while(i > 1){
i--;
console.log(i)
}

// Do.. while loop
//task 5
let num = 1;

do {
    console.log(num);
    num ++;
} while (num <=5);



// task 6

 let Fact = 1;
 let n = 5;
 do {
    Fact *= n;
    n--; 
 } while (n>0);

 console.log(`The factorial of ${n} is ${Fact}`)

 //Neasted Loops
 // task 7

for(let i =1;i<=6;i++){
    let star =""
    for(let j =1; i>j; j++){
        star += "*"
    }
    console.log(star)
}

// Loop Control Statemnets
// task 8
for(let i = 1; i <= 10; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

// task 9
for(let i = 1; i <= 10; i++){
    if(i==7){
        break;
    }
    console.log(i)
}


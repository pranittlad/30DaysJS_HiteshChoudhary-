// task 4:

let dayNumber = 5;  
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day number';
}

console.log(dayName);  


// Task 5:

let score = 85;  
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log(`Score: ${score}, Grade: ${grade}`);  


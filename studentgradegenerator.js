const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create a function showing the limitations of the marks input
function limit (marks){
    if (marks>=0 && marks <=100){
        return grades(marks);
    }
    else{
        return "Invalid Number";
    }
}

// Use an If else statement to classify different input values
function grades(marks){
    if(marks > 79){
        return "A";
    }
    else if(marks>=60 && marks<=79){
        return "B";
    }
    else if(marks>=50 && marks<=59){
        return "C";
    }
    else if(marks>=40 && marks<=49){
        return "D";
    }
    else{
        return "E";
    }
}
// use the readline question to get the user input
rl.question('Please type in your marks ', (marks) => {
    console.log(`You scored` + marks);
    rl.close();
  });
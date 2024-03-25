const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create a function showing the limitations of the marks input
// Use an If else statement to classify different input values
function studentGrades(marks){
  if(marks >= 0 && marks <=100){
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
  }else {
    return "Invalid input, please put in a number within the range"
  }

}
// use the readline question to get the user input
rl.question('Please type in your marks ', (marks) => {
    marks = parseFloat(marks) // converts number strings to integers

    // Confirm that input is valid
    const grade = studentGrades(marks)

    // !isNaN = if input is a number
    if(!isNaN(marks)){
    console.log(`You scored` + ` ` + `${grade}`);
    } else{
        console.log("Invalid input, please put in a number")
    }
    rl.close();
  });
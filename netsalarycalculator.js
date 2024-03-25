function net(basicSalary, benefits){
    let grossSalary = basicSalary + benefits

    //Payee calculations based on gross salary
    let payee;
    if (grossSalary <= 24000){
        payee = grossSalary * 0.1
    } else if (grossSalary > 24000 && grossSalary < 32334){
        payee = grossSalary * 0.25
    } else if (grossSalary >= 32334 && grossSalary < 500001){
        payee = grossSalary * 0.3
    } else if (grossSalary >= 500001 && grossSalary < 800001){
        payee = grossSalary * 0.325
    } else {
        payee = grossSalary * 0.35

    }

    // NHIF clculations based on gross salary
    let nhif;
    if (grossSalary <= 5999) {
      nhif = 150;
     } else if (grossSalary <= 7999) {
        nhif = 300;
     } else if (grossSalary <= 11999) {
        nhif = 400;
     } else if (grossSalary <= 14999) {
        nhif = 500;
     } else if (grossSalary <= 19999) {
        nhif = 600;
     } else if (grossSalary <= 24999) {
        nhif = 750;
     } else if (grossSalary <= 29999) {
        nhif = 850;
     } else if (grossSalary <= 34999) {
        nhif = 900;
     } else if (grossSalary <= 39999) {
        nhif = 950;
     } else if (grossSalary <= 44999) {
        nhif = 1000;
     } else if (grossSalary <= 49999) {
        nhif = 1100;
     } else if (grossSalary <= 59999) {
        nhif = 1200;
     } else if (grossSalary <= 69999) {
        nhif = 1300;
     } else if (grossSalary <= 79999) {
        nhif = 1400;
     } else if (grossSalary <= 89999) {
        nhif = 1500;
     } else if (grossSalary <= 99999) {
        nhif = 1600;
     } else {
        nhif = 1700;
     }

    // NSSF deductions
    let nssf = basicSalary * 0.06

    // Calculate the net salary
    const netSalary = grossSalary - (payee + nhif + nssf)
    return netSalary;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Add the readline prompt for input
rl.question('Input your basic salary' + ' ', (basicSalary) =>{
    rl.question('Input your benefits' + ' ', (benefits) =>{

     // Convert strings into numbers
     basicSalary = parseFloat(basicSalary)
     benefits = parseFloat(benefits)

     const netpay = net(basicSalary, benefits)

     //
     if (!isNaN(basicSalary) && !isNaN(benefits)){
        console.log(`Net salary: ${netpay}`)
     } else {
        console.log("Invalid input.")
     }


    rl.close()
  })
})

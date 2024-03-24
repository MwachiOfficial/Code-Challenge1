const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Create a function for Payee
function netSalary(basicSalary, benefits){
    let grossSalary = basicSalary + benefits
    if (grossSalary <= 24000){
        return console.log(grossSalary * 0.1)
    } else if (grossSalary > 24000 && grossSalary < 32334){
        return console.log(grossSalary * 0.25)
    } else if (grossSalary >= 32334 && grossSalary < 500001){
        return console.log(grossSalary * 0.3)
    } else if (grossSalary >= 500001 && grossSalary < 800001){
        return console.log(grossSalary * 0.325)
    } else {
        return console.log(grossSalary * 0.35)
    }

    let nssfDeduction = 0.06 * grossSalary
}

const netSalary = prompt("Please input your payee")
if(grossSalary > 0){
    let payee = netSalary(basicSalary, benefits)
    console.log(payee, "Amount")
    alert(`Your payee is` + payee)
}
// Create a function for NHIF
function nhif(gross){
    if (grossSalary <= 5999) {
       return nhif = 150;
    } else if (grossSalary <= 7999) {
       return nhif = 300;
    } else if (grossSalary <= 11999) {
       return nhif = 400;
    } else if (grossSalary <= 14999) {
       return  nhif = 500;
    } else if (grossSalary <= 19999) {
       return  nhif = 600;
    } else if (grossSalary <= 24999) {
       return nhif = 750;
    } else if (grossSalary <= 29999) {
       return nhif = 850;
    } else if (grossSalary <= 34999) {
       return   nhif = 900;
    } else if (grossSalary <= 39999) {
       return    nhif = 950;
    } else if (grossSalary <= 44999) {
       return nhif = 1000;
    } else if (grossSalary <= 49999) {
       return nhif = 1100;
    } else if (grossSalary <= 59999) {
       return nhif = 1200;
    } else if (grossSalary <= 69999) {
       return nhif = 1300;
    } else if (grossSalary <= 79999) {
       return nhif = 1400;
    } else if (grossSalary <= 89999) {
       return nhif = 1500;
    } else if (grossSalary <= 99999) {
       return nhif = 1600;
    } else {
       return nhif = 1700;
    }
}
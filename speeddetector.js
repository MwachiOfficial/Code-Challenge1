const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// set a variable for the 70km/h speed limit
const speedLimit = 70

// Create a function to do the demerit points calculations
function carSpeed(speed){
    if(speed > speedLimit){
        let demerits = Math.floor((speed - speedLimit)/5)
        return demerits
    }

    else{
        return 0
    }
}

// add the readline prompt for user input
rl.question('Input your speed' + ' ', (speed) =>{
    speed = parseFloat(speed) // change strings into integers

    // Create an if for values that are numbers or not
    if(!isNaN(speed)){
        const points = carSpeed(speed)

        // nest an if for values that are numbers, both above and below speed limit
          if(points === 0){
          console.log('OK')
        } else if(points > 12){
            console.log('License Suspended')
        } else{
          console.log(`You have` + ` ` + `${points}` + ` ` + `points`)
        }
    } else {
        console.log('Invalid input!')
    }
    rl.close()
})

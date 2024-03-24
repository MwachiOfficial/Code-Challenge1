const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const speedLimit = 70;

rl.question('Input your speed: ', (speedInput) => {
    const speed = parseInt(speedInput); // change any strings to integers
    let points;

    //  confirm whether the speed was within the given range
    if (speed > speedLimit) {
        // calculates the points penalty if the speed is above the speed limit
        points = Math.floor((speed - speedLimit) / 5);
        // Math.floor rounds of integers

        //Check whether points have reached license suspension speed
        if (points < 12) {
            console.log(Points);
        } else {
            console.log("License suspended!");
        }
    } else {
        console.log("OK");
    }

    rl.close();
});
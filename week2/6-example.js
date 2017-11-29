// 6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"

function vehicle(color, code, age) {
    if (code === 1 && age === 0) {
      console.log('a ' + color + ' new car');
    }
    if (code === 1 && age > 0 && age <= 200) {
      console.log('a ' + color + ' used car');
    }
    if (code === 2 && age === 0) {
      console.log('a ' + color + ' new motorbike');
    }
    if (code === 2 && age > 0 && age <= 200) {
      console.log('a ' + color + ' used motorbike');
    }
    if (code !== 1 && code !== 2 || typeof (code) === 'string' || typeof (code) === 'undefined') {
      console.log('Please enter the right code');
    }
    if (age < 0 || age > 200 || typeof (age) === 'string' || typeof (age) == 'undefined') {
      console.log('Please enter a reasonable value for age!');
    }
  
  }
  vehicle('blue', 1, 7);
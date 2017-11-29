// 11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?
function listOfVehicles() {
    const data = [
        { type: 'car', color: 'white', age: 3, code: 4 },
        { type: 'motorbike', color: 'red', age: 1, code: 1 },
        { type: 'caravan', color: 'green', age: 1, code: 3 },
        { type: 'bike', color: 'black', age: 2, code: 2 },
        { type: 'electric bike', color: 'yellow', age: 1, code: 5 }
    ];
    let output = '';
    for (let index = 0; index < 3; index++) {
      output += data[index].type + 's, ';
    } for (let index = 3; index < 4; index++) {
        output += data[index].type + 's and ';
    } for (let index = 4; index < 5; index++) {
        output += data[index].type + 's. ';
    }
    console.log('Amazing Joe\'s Garage, we service ', output);
  }
  listOfVehicles();
// 10.Use the list of vehicles to write an advertisement. So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function listOfVehicles() {
    const data = [
        { type: 'car', color: 'white', age: 3, code: 4 },
        { type: 'motorbike', color: 'red', age: 1, code: 1 },
        { type: 'caravan', color: 'green', age: 1, code: 3 },
        { type: 'bike', color: 'black', age: 2, code: 2 }
    ];
    let output = '';
    for (let index = 0; index < 2; index++) {
      output += data[index].type + 's, ';
    } for (let index = 2; index < 3; index++) {
        output += data[index].type + 's and ';
    } for (let index = 3; index < 4; index++) {
        output += data[index].type + 's. ';
    }
    console.log('Amazing Joe\'s Garage, we service ', output);
  }
  listOfVehicles()
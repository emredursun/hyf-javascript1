// 9.Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".

function listOfVehicles() {
    const data = [
      { type: 'motorbike', color: 'red', age: 1, code: 1 },
      { type: 'bike', color: 'black', age: 2, code: 2 },
      { type: 'caravan', color: 'green', age: 1, code: 3 },
      { type: 'car', color: 'white', age: 3, code: 4 },
      { type: 'electric bike', color: 'yellow', age: 1, code: 5 }
    ];
    for (let index = 0; index < data.length; index++) {
      if ( data[index].age <= 1 && data[index].code === 3 ) {
        data[index].age ='new';
        console.log('a', data[index].color, data[index].age, data[index].type);
      } 
      
    }
  
  }
  listOfVehicles();
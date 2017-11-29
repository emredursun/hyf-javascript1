// 7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

function listOfVehicles() {
    const data = [
      { type: 'motorbike'},
      { type: 'bike'},
      { type: 'car'},
      { type: 'caravan'},
      { type: 'electric bike'}
    ];
    for (let index = 0; index < data.length; index++) {
      console.log('Vehicle type:', data[index].type);
    }
    
  }
  listOfVehicles();
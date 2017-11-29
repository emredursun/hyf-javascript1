// 3.Create an object and a function that takes the object as a parameter and prints out all of its names and values.

function autonomous() {
    const classInfo = [
      { name: 'Zero Automation', level: 0 },
      { name: 'Driver Assisted', level: 1 },
      { name: 'Partial Automation', level: 2 },
      { name: 'Condition Automation', level: 3 },
      { name: 'High Automation', level: 4 },
      { name: 'Fully Automation', level: 5 },
    ];
  
    for (let index = 0; index < classInfo.length; index++) {
        console.log('The Name is :', classInfo[index].name, '  The autonomous driver level is : ', classInfo[index].level);
    }
  }
  autonomous();
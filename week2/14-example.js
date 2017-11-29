// 14.Add a property to the object you just created that contains the languages that they have taught you.

var teachers = [
    { name: 'Philip B3au', language: 'HTML-CSS.' },
    { name: 'Ivana Setiawan', language: 'HTML-CSS.' },
    { name: 'Frank Versnel', language: 'Debugging.' },
    { name: 'Unmesh joshi', language: 'Command Line.' },
    { name: 'Jim', language: 'JavaScript.' }
];
  for (let index = 0; index < teachers.length; index++) {
      console.log(teachers[index].name, "taught the module of", teachers[index].language);
  }

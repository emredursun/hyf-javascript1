// 16.Write some code to test two arrays for equality using == and ===. Test the following:

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

// What do you think will happen with x == y, x === y and z == y and z == x ? Prove it!

if (x == y) {
  console.log(' x equal to  y ');
}
if (x === y) {
  console.log(' x equal to  y ');
}
if (x !== y) {
  console.log(' x not equal to y ');
}
if (z === y) {
  console.log(' z equal to y ');
}
if (z !== y) {
  console.log(' z not equal to y ');
}
if (z === x) {
  console.log(' z equal to x ');
}
if (z !== x) {
  console.log(' z not equal to x ');
}

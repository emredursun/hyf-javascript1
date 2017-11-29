// 17.Take a look at the following code:

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o2 changes o3 o1 changes o3(or not).

// Does the order that you assign (o3 = o2 or o2 = o3) matter? {Jim Cramer: ???}

console.log('o2:', o2, 'o3:', o3);

if (o2 === o3) {
    console.log("As you see 'o2' is equal to 'o3'");
} else {
    console.log("As you see 'o2' is not equal to 'o3'");
}

console.log('o1:', o1, 'o3:', o3);
if (o1 === o3) {
    console.log("As you see 'o1' is equal to 'o3'");
} else {
    console.log("As you see 'o1' is not equal to 'o3'");
}

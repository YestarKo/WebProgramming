// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// The map() method calls the provided function once for each element in an array, in order.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
    let age = 2024 - birthYear[i];
    ages.push(age);
}
console.log(ages); //[49,27,22,29,39]

const age2 = birthYear.map(y => 2024 - y);

console.log(age2); //[49,27,22,29,39] 









// The above code is a simple example of a high-order function.
// The function in the above code is the following:
// function calculateAge(birthYear) {
//     return 2024 - birthYear;
// }
//
// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = birthYear.map(calculateAge);
// console.log(ages); //[49,27,22,29,39]


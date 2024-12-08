const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.map(function (a) {
    return a * 2;
});

const arr3 = arr1.map(a => a * 3);

console.log(arr2);//[2,4,6,8,10]
console.log(arr3);//[3,6,9,12,15]
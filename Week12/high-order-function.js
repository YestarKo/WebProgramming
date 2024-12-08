const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);//arr1의 각 요소에 2를 곱한 값을 arr2에 저장
}
console.log(arr2);//[2,4,6,8,10]
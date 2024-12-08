const sum = (a, b) => a + b;//arrow function
const printResult = result => {//arrow function, callback function, 인자로 함수를 받아서 실행
    console.log(`결과는 ${result}입니다.`);
};
const calculationAndPrint = (calculationResult, callback) => {//arrow function, callback function, 인자로 함수를 받아서 실행, 함수를 리턴
    callback(calculationResult);//callback function, 인자로 함수를 받아서 실행
};
calculationAndPrint(sum(10, 20), printResult);//함수를 다른 함수의 인자(parameter)로 전달
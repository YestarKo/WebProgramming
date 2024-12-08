const cart = [//객체 배열
    { item: "노트북", price: 1200000, quantity: 1 }, //노트북
    { item: "마우스", price: 35000, quantity: 2 }, //마우스
    { item: "키보드", price: 89000, quantity: 1 } //키보드
];

let totalPrice = 0;

//for문
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total Price: ${totalPrice}`);

//초기화
totalPrice = 0;

//forEach문
cart.forEach((items) => {
    totalPrice += items.price * items.quantity;
});
console.log(`Total Price: ${totalPrice}`);

//초기화
totalPrice = 0;

//reduce
totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);//acc = 0, cur = cart[0] = { item: " ", price: 1200000, quantity: 1 }
//acc는 누적값, cur은 현재값
console.log(`Total Price: ${totalPrice}`);

//초기화
totalPrice = 0;

//map
const itemTotals = cart.map((item) => {
    return ({
        item: item.item,//노트북, 마우스, 키보드
        total: item.price * item.quantity//1200000, 70000, 89000
    })
});

console.log('제품별 금액: ', itemTotals);//변수가 아니니까 ${}로 출력이 안되나...아닌데? 어떻게 출력해야할까요?




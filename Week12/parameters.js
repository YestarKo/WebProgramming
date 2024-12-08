function changeValue(val) {
    val += 10;
    console.log(val);//여기서만 20
}

let kval = 10;
console.log(kval);
changeValue(kval);
console.log(kval);


function changeName(obj) {
    obj.name = "coder";
}

let KOYS = { name: 'KOYS' };

console.log(KOYS);
changeName(KOYS);
console.log(KOYS);
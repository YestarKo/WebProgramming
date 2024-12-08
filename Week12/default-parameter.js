// function showMessage(message, from) {//전달하지 않으면 undefined로 출력
//     console.log(`${message} by ${from}`);
// }

// function showMessage(message, from) {
//     if (from == undefined) {
//         from = 'KOYS';
//     }
//     console.log(`${message} by ${from}`);
// }

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');
showMessage('Hi!', 'koys');
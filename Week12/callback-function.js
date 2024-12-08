const printYes = function () {
    console.log('Yes');
}

const printNo = () => { console.log('No'); }// arrow function

function randomQuiz(answer, printYes, printNo) {// callback function
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

randomQuiz('wrong', printYes, printNo);// callback function
randomQuiz('love you', printYes, printNo);// callback function
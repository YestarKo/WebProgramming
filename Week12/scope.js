let globalMessage = 'global'; // global variable
function printMessage() {
    let message = "hello";
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'child';
        console.log(childMessage);
    }
    //console.log(childMessage); // error because childMessage is not defined in this scope   
    printAnother();
}
printMessage();
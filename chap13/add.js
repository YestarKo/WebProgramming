onmessage = function (e) {
    let addresult = 0;
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    for (let i = from; i <= to; i++) {
        addresult += i;
    }
    postMessage(addresult);
}
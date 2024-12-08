onmessage = function (e) {
    let mulresult = 0;
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    mulresult = from * to;
    postMessage(mulresult);
}
function printerError(s) {
    let myNum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 109) {
            myNum = myNum + 1;
        }
    }
    return myNum + "/" + s.length;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")); //3/56
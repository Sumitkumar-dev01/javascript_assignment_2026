function convertNumber(type) {
    var string1 = String;
    var number = Number(string1);
    if (number == NaN) {
        console.log("nan");
    }
    else {
        console.log("it's a number");
    }
}
convertNumber("abc");

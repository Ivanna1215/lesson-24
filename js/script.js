function getSum () {
    let num;
    start = +prompt ('Input your start number');
    let finich;
    finish = +prompt ('Input your finish number');
    let result = 0;
    for (start;start<finish;start++) {
result = result + start;
    }
    alert (result);
}
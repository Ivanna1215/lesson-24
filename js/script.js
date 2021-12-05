function getSum () {
    let num;
    start = +prompt ('Input your start number');
    let finich;
    finish = +prompt ('Input your finish number');
    let result = 0;
    for (start;start<=finish;start++) {
result = result + start;
    }
    alert (result);
}

function getStatistics () {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    let num = 0;
    let number;

for (num;num<10;num++) {
    number  = +prompt('Input your number');
    // console.log (number);


if (number>0) {
pos++;

} 
else if (number<0){
    neg++;
} 
else if  (number===0){
    zero++;
}
if (number % 2) {
    odd++;
}
else  {
    even++;
}
}
 alert (`Your result 
 pos - ${pos}
 neg - ${neg}
 zero - ${zero}
 even - ${even}
 odd - ${odd}
 `)
}

function getNum () {
    let num =2;
    for (num;num<5;num++) {
console.log (num);
    }
}
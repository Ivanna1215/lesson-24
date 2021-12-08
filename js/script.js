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
    console.log (typeof result);
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
    console.log (number);


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
 function cAlculator () {


     for (num;num<10;num++) {
        let a = +prompt ('Input your  first number ');
        let b = +prompt ('Input last number');
        let c = +prompt ('Input your operator');
        let continuation = confirm ("Want to continue?")
     
     }
 }

  function getDivider () {
    let a = +prompt ('Input your  first number');
    let b = +prompt ('Input last number');
 let i =1;
 let result1 = (a % i)===0;
 let result2 = (b % i)===0;

 

  }

  function getDiv() {
      let num ;
      num = +prompt ('Input your number');
      let divider = 1; 
      
    // while (num > divider) {
    //     divider++;
    //     num % divider !== 0
    //     console.log (divider);
    // }
for (divider;num > divider;divider++ )

if  (number % divider !==0) {
alert (`Your result ${divider}`)
}

  }

  function multiplicationTable () {
      let i = 1;
      let msg = " ";
      while (i<11) {
         msg+= i + 'x 3=' + (i*3)+ '<br>';
         i++; 
      }
    document.write (msg);
  }
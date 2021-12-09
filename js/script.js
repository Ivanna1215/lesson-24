function getSum() {
    let num;
    start = +prompt('Input your start number');
    let finich;
    finish = +prompt('Input your finish number');
    let result = 0;
    for (start; start <= finish; start++) {
        result = result + start;
    }
    alert(result);
    console.log(typeof result);
}

function getStatistics() {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    let num = 0;
    let number;

    for (num; num < 10; num++) {
        number = +prompt('Input your number');
        console.log(number);


        if (number > 0) {
            pos++;

        }
        else if (number < 0) {
            neg++;
        }
        else if (number === 0) {
            zero++;
        }
        if (number % 2) {
            odd++;
        }
        else {
            even++;
        }
    }
    alert(`Your result 
 pos - ${pos}
 neg - ${neg}
 zero - ${zero}
 even - ${even}
 odd - ${odd}
 `)
}

function getNum() {
    let num = 2;
    for (num; num < 5; num++) {
        console.log(num);
    }
}
//  function cAlculator () {
//      let num;
//      for (num;num<10;num++) {
//         // let a = +prompt ('Input your  first number ');
//         // let b = +prompt ('Input last number');
//         // let c = +prompt ('Input your operator');
//          num = confirm ("Want to continue?");

//      }
//  }




function getDivider() {
    let a = +prompt('Input your  first number');
    let b = +prompt('Input last number');
    let i = 1;
    //  let result1 = (a % i)===0;
    //  let result2 = (b % i)===0;
}



function multiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 9; j++) {
            let num = i * j;
            let msg;
            document.write(i + ('x') + j + ('=') + num + '<br>');
            //   msg+= i + ('x') + j+ ('= ') + num ;

        }
        document.write('<br> <br>')
    }

}


function getDiv() {
    let num;
    num = +prompt('Input your number');

    let amount = 0;
    let result = 'Your result';
    for (let divider = 1; divider < num; divider++) {
        if ((num % divider) === 0) {
            result = result + " " + divider;
            amount++;
        }
    }
    if (amount>1) {
        alert(result);
        alert(`Amount divider ${amount}`);
    }
    else {
        alert('Error');
    }

}




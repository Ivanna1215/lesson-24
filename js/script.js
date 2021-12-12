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
    if (amount > 1) {
        alert(result);
        alert(`Amount divider ${amount}`);
    }
    else {
        alert('Error');
    }

}


function amountNumber() {
    let num;
    num = prompt('Input your number');
    if (num > 0) {
        alert(num.length);
    } else {
        alert(num.length - 1);
    }

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

function getCalculator() {
    let a;
    let b;
    let c;
    let num;
    let result;
    do {
        a = +prompt('Input your  first number ');
        b = +prompt('Input last number');
        c = prompt('Input your operator');
       
    switch (c) {
        case '+':
            result = a + b;
            alert(result)
            break;
        case '-':
            result = a- b;
            alert (result);
            break;
            case '*':
                result = a*b;
                alert (result);
                break;
                case '/':
                    result = a/b;
                    alert (result);
                    break;
                    default:
                        alert ('This code is incorect')
                        break;

                    
                } 
                num = confirm("Want to continue?");
                
    }

    while (num)   


}


function toMoveNum () {
    let num = prompt ('Input your number');
    if (num>0) {
        let amount = +prompt ('Input your amount');
        let a = num.length;
        let part_1 = num.slice(0,amount);
        let part_2 = num.slice(amount);
        let result = part_2+part_1;
        alert (result);

      
    }
   
    else  {
        alert ('This code is incorect')
    } 
}

// function getNum() {
//     let num = 2;
//     for (num; num < 5; num++) {
//         console.log(num);
//     }
// }

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

function getDay () {
    let day;
    let cOntin;
    let i = 1;
do {
    day = confirm('Monday');
    cOntin = confirm("Want to continue?"); 

 if (cOntin=true) {
    day = confirm('Tuesday');
    cOntin = confirm("Want to continue?"); 
    
    if (cOntin=true) {
        day = confirm('Wednesday');
        cOntin = confirm("Want to continue?"); 
        if (cOntin=true) {
            day = confirm('Thursday');
            cOntin = confirm("Want to continue?"); 
            if (cOntin=true) {
                day = confirm('Friday');
                cOntin = confirm("Want to continue?"); 
                if (cOntin=true) {
                    day = confirm('Saturday');
                    cOntin = confirm("Want to continue?"); 
                    if (cOntin=true) {
                        day = confirm('Sanday');
                        cOntin = confirm("Want to continue?");     
                }
    
                
            }
     }


        }
 }
 }
}
while (cOntin) 
}







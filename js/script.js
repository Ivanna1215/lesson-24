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
    if (num >= 0) {
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
                result = a - b;
                alert(result);
                break;
            case '*':
                result = a * b;
                alert(result);
                break;
            case '/':
                result = a / b;
                alert(result);
                break;
            default:
                alert('This code is incorect')
                break;


        }
        num = confirm("Want to continue?");

    }

    while (num)


}


function toMoveNum() {
    let num = prompt('Input your number');
    if (num > 0) {
        let amount = +prompt('Input your amount');
        let a = num.length;
        let part_1 = num.slice(0, amount);
        let part_2 = num.slice(amount);
        let result = part_2 + part_1;
        alert(result);


    }

    else {
        alert('This code is incorect')
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

function getDay() {
    let day = 1;


    while (day) {
        day = confirm('Monday.Want to continue?');

        if (day) {
            day = confirm('Tuesday.Want to continue?');

            if (day) {
                day = confirm('Wednesday.Want to continue?');

                if (day) {
                    day = confirm('Thursday.Want to continue?');
                    if (day) {
                        day = confirm('Friday.Want to continue?');
                        if (day) {
                            day = confirm('Saturday.Want to continue?');
                            if (day) {
                                day = confirm('Sanday.Want to continue?');
                            }


                        }
                        else {
                            alert('Good luck')
                        }
                    }
                    else {
                        alert('Good luck')
                    }


                }
                else {
                    alert('Good luck')
                }
            }
            else {
                alert('Good luck')
            }

        }
        else {
            alert('Good luck')
        }

    }

}


function getWeeksDay() {

    alert(`Hello, let's start!`);

    let randomDay = Math.floor(Math.random() * 7);
    let question;



    for (let i = randomDay; ; i++) {

        switch (i) {
            case 0:
                question = prompt(`Sunday. Next day?`);
                break;
            case 1:
                question = prompt(`Monday. Next day?`);
                break;
            case 2:
                question = prompt(`Tuesday. Next day?`);
                break;
            case 3:
                question = prompt(`Wednesday. Next day?`);
                break;
            case 4:
                question = prompt(`Thursday. Next day?`);
                break;
            case 5:
                question = prompt(`Friday. Next day?`);
                break;
            case 6:
                question = prompt(`Saturday. Next day?`);
                break;
        }
        if (question == null) {
            break
        };

        if (i == 6) {
            i = -1;
        }

    }
    alert(`Good luck`);
}

function getAllPossibleDays() {
    let year = +prompt('Input your year');
    console.log(year);
   


    for (let num = 1; num < 13; num++) {

        switch (num) {
            case 1:
                console.log('January');
                for (let day = 1; day <= 31; day++) {
                    console.log(day);
                }
                break;
            case 2:
                console.log('February');
                if ((year % 400===0 || year % 4 === 0  && year % 100 > 0 )) {
                    for (let day = 1; day <= 29; day++) {
                        console.log(day);
                    }
                }
                else {
                    for (let day = 1; day <= 29; day++) {
                        console.log(day);
                    }
                }
                break;
                case 3:
                    console.log('March');
                    for (let day = 1; day <= 31; day++) {
                        console.log(day);
                    }
                    break;
                    case 4:
                        console.log('April');
                        for (let day = 1; day <= 30; day++) {
                            console.log(day);
                        }
                        break;
                        case 5:
                            console.log('May');
                            for (let day = 1; day <= 31; day++) {
                                console.log(day);
                            }
                            break;
                            case 6:
                                console.log('June');
                                for (let day = 1; day <= 30; day++) {
                                    console.log(day);
                                }
                                break;
                                case 7:
                                    console.log('July');
                                    for (let day = 1; day <= 31; day++) {
                                        console.log(day);
                                    }
                                    break;
                                    case 8:
                                        console.log('August');
                                        for (let day = 1; day <= 31; day++) {
                                            console.log(day);
                                        }
                                        break;
                                        case 9:
                                            console.log('September');
                                            for (let day = 1; day <= 30; day++) {
                                                console.log(day);
                                            }
                                            break;
                                            case 10:
                                                console.log('Oktober');
                                                for (let day = 1; day <= 31; day++) {
                                                    console.log(day);
                                                }
                                                break;
                                                case 11:
                                                    console.log('November');
                                                    for (let day = 1; day <= 30; day++) {
                                                        console.log(day);
                                                    }
                                                    break;
                                                    case 12:
                                                        console.log('December');
                                                        for (let day = 1; day <= 31; day++) {
                    console.log(day);
                }
                                                        break;


        }
    }



}


let i;
while (i >= 12) {
    console.log(i);
    i++;
}


function sampleLast() {
    let num = 0;
    while (num < 13) {
        console.log(num);
        num++;

    }
}
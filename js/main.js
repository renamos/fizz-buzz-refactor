var total = 100;
var num1 = prompt('Please enter a number for Fizz', '1 to 100');
var num2 = prompt('Please enter a number for Buzz', '1 to 100');


function fizzBuzz() {
    for (var i = 1; i < total; i++){
        if (i % num1 == 0 && i % num2 != 0) {
            document.write('fizz' + '</br>');
        }
        else if (i % num2 == 0 && i % num1 !=0){
            document.write('buzz' + '</br>');
        }
        else if (i % num1 == 0 && i % num2 ==0){
            document.write('fizz buzz' + '</br>');
        }
        else {document.write(i + '</br>');
             }
    }
    }

if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
    alert('Cannot recognize number!')
}
else {fizzBuzz()}


//bài 1
const number = 3;
function isInterGer(number) {
  if (number > 0) {
    console.log("a. dương");
  } else if (number < 0) {
    console.log("a. âm");
  } else {
    console.log("Số đó không phải số nguyên âm cũng ko phải số nguyen dương");
  }
}
isInterGer(number);
function isParity(number) {
  if (number % 2 === 0) {
    console.log("b. số chẵn");
  } else {
    console.log("b .số lẻ");
  }
}
isParity(number);

function isPrime(number) {
  var flag = true;
  if (number < 2) {
    flag = false;
  } else if (number == 2) {
    flag = true;
  } else if (number % 2 == 0) {
    flag = false;
  } else {
    for (var i = 3; i < number - 1; i += 2) {
      if (number % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    console.log("c. là số nguyên tố");
  } else {
    console.log("c. không phải là số nguyên tố");
  }
}
isPrime(number);

const Square = number * number;
console.log("d. " + Square);

// bài 2

let num1 = parseInt(prompt("Nhập số nguyên thứ nhất:"));
let num2 = parseInt(prompt("Nhập số nguyên thứ hai:"));
let num3 = parseInt(prompt("Nhập số nguyên thứ ba:"));

function handle() {
  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
  console.log("Số lớn nhất" + max);
  console.log("Số bé nhất" + min);
}
handle();

let sum = num1 + num2 + num3;
console.log("Tổng 3 số là:" + sum);
let acumulation = num1 * num2 * num3;
console.log("Tích 3 số là: " + acumulation);

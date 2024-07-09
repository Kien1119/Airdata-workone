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

// const num1 = parseInt(prompt("Nhập số nguyên thứ nhất:"));
// const num2 = parseInt(prompt("Nhập số nguyên thứ hai:"));
// const num3 = parseInt(prompt("Nhập số nguyên thứ ba:"));
const num1 = 1;
const num2 = 2;
const num3 = 3;
function handle() {
  const max = Math.max(num1, num2, num3);
  const min = Math.min(num1, num2, num3);
  console.log("Số lớn nhất " + max);
  console.log("Số bé nhất " + min);
}
handle();

const sum = num1 + num2 + num3;
console.log("Tổng 3 số là: " + sum);
const acumulation = num1 * num2 * num3;
console.log("Tích 3 số là: " + acumulation);

// bài 3

const characters = "Chuoi Dai Hon 10 Ky Tu";
function charactersCut(characters) {
  if (characters.length > 10) {
    return characters.slice(0, 5) + "...";
  } else {
    return charactersCut();
  }
}
console.log("5 kí tự đầu tiên của chuỗi là: " + charactersCut(characters));

function characterUpdate(characters) {
  return characters
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(characterUpdate(characters));

// Bài 4
const mang = [1, 4, 3, 5, 2];
function inMang(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  arr.forEach((num) => {
    if (num === max) {
      console.log(num + " số lớn nhất");
    } else if (num === min) {
      console.log(num + " số bé nhất");
    } else {
      console.log(num);
    }
  });
}

// b. Sắp xếp mảng từ bé đến lớn
function sapXepTangDan(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// c. Sắp xếp mảng từ lớn đến bé
function sapXepGiamDan(arr) {
  return arr.slice().sort((a, b) => b - a);
}

// d. In ra mảng sau khi lọc tất cả số lẻ
function locSoLe(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// e. Tìm index của số lớn nhất trong mảng
function timIndexSoLonNhat(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
}

// f. Tính tổng các số trong mảng
function tinhTong(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// g. In ra mảng là bình phương của các số trong mảng
function binhPhuongMang(arr) {
  return arr.map((num) => num * num);
}

// h. In ra mảng là Tổng của số trước với số sau (phần tử đầu thì số trước nó là phần tử cuối)
function tongSoTruocSau(arr) {
  return arr.map((num, i) => num + arr[(i + 1) % arr.length]);
}

// Input mảng 5 số
console.log("a.");
inMang(mang);
console.log("b. " + sapXepTangDan(mang).join(","));
console.log("c. " + sapXepGiamDan(mang).join(","));
console.log("d. " + locSoLe(mang).join(","));
console.log("e. " + timIndexSoLonNhat(mang));
console.log("f. " + tinhTong(mang));
console.log("g. " + binhPhuongMang(mang).join(","));
console.log("h. " + tongSoTruocSau(mang).join(","));
console.log("test");

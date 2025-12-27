'use strict'

function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
		console.log("  actual: ", actual);
    console.log("expected: ", expected);
    console.log("Test Passed.");
  } else {
    console.error("Test Failed.");
    console.log("  actual: ", actual);
    console.log("expected: ", expected);
    console.trace();
  }
}

let word = "Hello!";
word = "こんにちは";
const userName = "Engineer.Okinawa";

// 2
const height = 2;
const width = 8;
const ractangle = height * width;
console.log(`長方形の面積は${ractangle}です`);

// 3
const averageTemp = (26+31+27)/3;
console.log(`平均の最高気温は${averageTemp}℃でした`);

// 4
// 予想："2"と表示される。
let number1 = 1;
number1 + 1;
console.log(number1);

// 予想：number2には最終的に"5"が代入されている。
// number3にはnumber2の最終的な値が代入されている
let number2 = 2;
number2 = number2 + 3;
number2 + 10;
const number3 = number2;
console.log(number3);

// 5
let num1 = 12;
let num2 = 3;
let result;
if (num2 === 0){
    console.log("ゼロで割ることはできません");
} else {
    result = (num1/num2);
}
console.log(result);

// 6
const lunch = "curry";
console.log(typeof lunch);
const time = 20;
console.log(typeof time);

// 7
const month = 5;
let days = 0;

if ( month === 1) {
    days = 31;
} else if (month === 2) {
    days = 28;
} else if (month === 3) {
    days = 31;
} else if (month === 4) {
    days = 30;
} else if (month === 5) {
    days = 31;
} else if (month === 6) {
    days = 30;
} else if (month === 7) {
    days = 31;
} else if (month === 8) {
    days = 31;
} else if (month === 9) {
    days = 30;
} else if (month === 10) {
    days = 31;
} else if (month === 11) {
    days = 30;
} else {
    days = 31;
}
console.log(`${month}月の日数は${days}です`);

// 応用問題１
// FizzBuzz
let count = 100;
for (let i = 1; i <= count; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log(`${i}はFizzBuzz`);
    } else if ( i % 3 === 0 ) {
        console.log(`${i}はFizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i}はBuzz`);
    }
    console.log(`応用問題１：${i}`);
}


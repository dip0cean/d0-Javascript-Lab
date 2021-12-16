// Basic Data Types

// Number
let int = 2; // Integer
let float = 0.3; // Float
let negativeNumber = -10; // Negative Number
console.log('result = ' + (int + float + negativeNumber));

// String
let strType_1 = 'Hello!';
let strType_2 = "Hi!";
let strType_3 = `Hola!`;
console.log(strType_1 + ' ' + strType_2 + ' ' + strType_3);

// Array
let arr_1 = ['강아지', '고양이', 9999, ['영어', '한국어'], {name: '심성헌'}];
let arr_2 = new Array('또익', '꼬망', '누리', ['엄마', '아빠', '동생']);
console.log(arr_1);
console.log(arr_2);

// Object
let obj_1 = {
    name: '심성헌',
    age: 27,
    habbits: ['programming', 'read book', 'watch movie']
};
let obj_2 = new Object({
    name: '또익',
    age: 8
});
console.log(obj_1);
console.log(obj_2);

// Variables
var 전역변수;
let 스코프변수;
const 상수;
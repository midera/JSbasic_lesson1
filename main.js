/*присвоить каждому из следующих значений свою переменную:
 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
 Вывести каждую при помощи console.log , alert*/
/*let a = 'hello ';
console.log(a);
alert(a);
let b = 'owu';
console.log(b);
alert(b);
let c = 'com';
console.log(c);
alert(c);
let d = 'ua';
console.log(d);
alert(d);
let e = '1';
console.log(e);
alert(e);
let f = '10';
console.log(f);
alert(f);
let g = '-999';
console.log(g);
alert(g);
let k = '123';
console.log(k);
alert(k);
let l = '3.14';
console.log(l);
alert(l);
let m = '2.7';
console.log(m);
alert(m);
let n = '16';
console.log(n);
alert(n);
let p = 'true';
alert(p);
console.log(p);
let r = 'false';
console.log(r);
alert(r);*/
/*
переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую
при помощи console.log , alert
*/
/*a = 'hello ';
console.log(a);
alert(a);

b = 'owu';
console.log(b);
alert(b);

c = 'com';
console.log(c);
alert(c);

d = 'ua';
console.log(d);
alert(d);

e = '1';
console.log(e);
alert(e);

f = '10';
console.log(f);
alert(f);

g = '-999';
console.log(g);
alert(g);

k = '123';
console.log(k);
alert(k);

l = '3.14';
console.log(l);
alert(l);

m = '2.7';
console.log(m);
alert(m);

n = '16';
console.log(n);
alert(n);

p = 'true';
console.log(p);
alert(p);

r = 'false';
console.log(r);
alert(r);*/

/*
Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert
*/

/*const numb= 30;
console.log(numb);
alert(numb);

const numbe = 50;
console.log(numbe);
alert(numbe);

const number= 80;
console.log(number);
alert(number);

const age='23';
console.log(age);
alert(age);

const exp='85';
console.log(exp);
alert(exp);

const addres='52';
console.log(addres);
alert(addres);*/
/*
при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
 Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert
*/


/*
let userLastName = prompt('Alekseenko');

let userName = prompt('Nataliy');

let userFathersName = prompt('Olegovna');

console.log(`${userLastName} ${userName} ${userFathersName}`);*/



/*Взять переменные из задания 4 и сконкатенировать их в одной переменной person*/

/*let person = `${userLastName} ${userName} ${userFathersName}`;
console.log(person);*/

/*
Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи
*/

/* userLastName = prompt('Alekseenko');

let userNameOne = prompt('Yaroslav');

let userFathersNameOne = prompt('Vitalievich');
console.log(`${userLastName} ${userNameOne} ${userFathersNameOne}`)


let personOne = `${userLastName} ${userNameOne} ${userFathersNameOne}`;

console.log(`${person} ${personOne}`);*/

/*
при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
*/
/*
let adress = +prompt('98');
let street = +prompt('54');
let zipcode = +prompt('10');

console.log(adress,street,zipcode);
*/

/*
при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
Сложить их между собой записав результат в переменную result и вывести в консоль браузера
*/

/*let parseInt1 = parseInt(prompt('83'));
let parseInt2 = parseInt(prompt('10'));
let parseInt3 = parseInt(prompt('20'));
let parseInt4 = parseInt(prompt('50'));
let result1 = parseInt1 + parseInt2 ;
console.log(result1);
let result2 = parseInt3 + parseInt4 ;
console.log(result2);
let result3 = parseInt1 + parseInt2 + parseInt3 + parseInt4 ;
console.log(result3);*/

/*
при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
    Сложить их между собой записав результат в переменную result и вывести в консоль браузера
*/
/*

let parseFloat1 = parseInt(prompt('2'));
let parseFloat2 = parseInt(prompt('1.5'));
let parseFloat3 = parseInt(prompt('12.3'));
let parseFloat4 = parseInt(prompt('5.3'));
let result1 = parseFloat1 + parseFloat2 ;
console.log(result1);
let result2 = parseFloat3 + parseFloat4 ;
console.log(result2);
let result3 = parseFloat1 + parseFloat2 + parseFloat3 + parseFloat4 ;
console.log(result3);*/
/*
при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
Сложить их между собой записав результат в переменную  и вывести в консоль браузера
*/

/*let num = prompt( 'Enter numb 2.5');
let numb = parseFloat(num);
let adress = Math.round(numb);
console.log(adress);


let two = prompt( 'Enter numb 5.6');
let strong = parseFloat(two);
let mag= Math.round(strong);
console.log(mag);

let three = prompt( 'Enter numb 6.2');
let exp = parseFloat(three);
let domag = Math.round(exp);
console.log(domag);

let result = adress + mag +domag ;
console.log(result);*/

/*
при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое
будут возводить в степень.
    Второе число - это число которое является степенью. При помощи Math.pow возвести первое число
в степень второго числа.
*/
/*
let num = prompt('2');
let pow = prompt('10');
Math.pow(2, 10);
console.log(num,pow)

let result = Math.pow(2, 10);
console.log(result);

Math.pow(10, 2);
let resultOne = Math.pow(10, 2);
console.log(resultOne);*/

/*
При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
 let a = 100; let b = '100'; let c = true; let d = undefined;
*/
/*let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);*/

/*
Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
*/

/*5 < 6 -> true
5 > 6 -> false
5 == 6 -> false
5 === 6 -> false
10 = 10 -> true
10 === 10 -> true
10 <= 10 -> false
10 > 10 -> false
10 < 10 -> false
123 = '123' -> false
123 == '123' -> true*/

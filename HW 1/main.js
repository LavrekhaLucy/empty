"use strict";
let lucy = {
    FirstName: 'Liudmyla',
    MiddleName: 'Mykolaivna',
    LastName: 'Lavrekha'
};
console.log(lucy);
// /////////////////////////////////////////////////////////////////////
let FirstName = 'Liudmyla';
let MiddleName = 'Mykolaivna';
let LastName = 'Lavrekha';
console.log(FirstName + ' ' + MiddleName + ' ' + LastName);
// //////////////////////////////////////////////////////////////////
// let test1: number = 123;
// let test2: number = 456;
//
// let test3: string = test1 + ' ' + test2;
// console.log(test3);
//
// let test1: number = '123';
// let test2: number = '456';
//
// console.log(test1 + test2);
// let test: string = '1';
// test += 1;
//
// console.log(test);
//
// let test1: number = +'123';
// let test2: number = +'456';
//
// console.log(test1 + test2);
// let test1: string = '123';
// let test2: string = '456';
//
// console.log(test1 + test2);
//
let test1 = 123;
let test2 = 456;
console.log(test1 + test2);
//////////////////////////////////////////////
let arr = [21, 33, 100, 450, -90, 450];
console.log(arr);
let arrSt = ['21', '33', '100', '450', '-90', '450'];
console.log(arrSt);
let arrN = [1, 2, 3, 4, 5];
console.log(arrN);
let arrS = ['1', '2', '3', '4', '5'];
console.log(arrS);
let date = { year: 2025, month: 3, day: 31 };
console.log(date);
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let res = 0;
for (let i = 0; i <= 10; i++) {
    res += i;
}
console.log(res);
let arrisa = [1, 2, 3, 4, 5];
for (let elem of arrisa) {
    console.log(elem);
}
let aqua = [1, 2, 3, 4, 5];
let req = 0;
for (let elem of aqua) {
    req += elem;
}
console.log(req);
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key);
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let object:{a:number,b:number,c:number} = {a: 1, b: 2, c: 3};
// let foo:number = 0;
//
// for (let key in object) {
//     let elem:number = object[key];
//     foo += elem;
// }
//
// console.log(foo); wrong!!!!!!!!!!!!!!
let test4 = 123;
let test5 = 'abc';
let test6;
test6 = test4;
console.log(test6);
test6 = test5;
console.log(test6);
let parr = [1, '2', '3', 4, 5];
console.log(parr);
let products = [
    { title: 'Pepper', price: 30 },
    { title: 'Apple', price: 40 },
    { title: 'Cheese', price: 350 },
    { title: 'Corn', price: 50 },
    { title: 'Mushroom', price: 130 },
    { title: 'Garlic', price: 90 },
    { title: 'Beef', price: 230 },
    { title: 'Fish', price: 250 },
    { title: 'Eggs', price: 40 },
    { title: 'Coriander', price: 45 }
];
for (let product in products) {
    console.log(products[product]);
}
let sids = [
    {
        hybrid: 'Арлен',
        originator: 'АРТ Агро',
        growing: 'послуги'
    },
    {
        hybrid: 'Ваксі',
        originator: 'Стасі Насіння',
        growing: 'послуги'
    },
    {
        hybrid: 'Дрівія',
        originator: 'АРТ Агро',
        growing: 'послуги'
    },
    {
        hybrid: ' Арлен',
        originator: 'АРТ Агро',
        growing: 'ліцензія'
    },
    {
        hybrid: 'СТАРОФ',
        originator: 'Іфагрі',
        growing: 'ліцензія'
    },
    {
        hybrid: 'НІКОЛАДЖ',
        originator: 'Іфагрі',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Вархол',
        originator: 'Іфагрі',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Сканер',
        originator: 'Іфагрі',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Адевей',
        originator: 'Лімагрейн',
        growing: 'ліцензія'
    },
    {
        hybrid: 'СІЛВЕРКЛАУД',
        originator: 'Іфагрі',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Фабріс',
        originator: 'АРТ Агро',
        growing: 'ліцензія'
    },
    {
        hybrid: 'LG_1',
        originator: 'Лімагрейн',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Санрок',
        originator: 'АРТ Агро',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Астросіло',
        originator: 'РВА',
        growing: 'ліцензія'
    },
    {
        hybrid: 'Ервінга',
        originator: 'РВА',
        growing: 'ліцензія'
    },
    {
        hybrid: 'LG_2',
        originator: 'Лімагрейн ',
        growing: 'ліцензія'
    },
    {
        hybrid: 'LG_3',
        originator: 'Лімагрейн ',
        growing: 'ліцензія'
    },
    {
        hybrid: 'LG_4',
        originator: 'Лімагрейн ',
        growing: 'ліцензія'
    },
    {
        hybrid: 'LG_5',
        originator: 'Лімагрейн ',
        growing: 'ліцензія'
    },
    {
        hybrid: 'LG_55',
        originator: 'Лімагрейн',
        growing: 'ліцензія'
    },
];
let i = 0;
while (i < sids.length) {
    let sid = sids[i];
    console.log(sid);
    i++;
}
document.write(`<h1>MAIS</h1>`);
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let list of listOfItems) {
    document.write(`<li>${list}</li>`);
}
document.write(`</ul>`);
///////////////////////////////////////////
// function getUsers(users) {
//     for (const user of users) {
//         document.write(`<div>
//                  ${user.id} ${user.name} ${user.age}
//         </div>`)
//     }
// }
// getUsers([
//     {id:1,name: 'vasya', age: 31,},
//     {id:2,name: 'petya', age: 30,},
//     {id:3,name: 'kolya', age: 29,},
//     {id:4,name: 'olya', age: 28,},
//     {id:5,name: 'max', age: 30,},])

"use strict";
let elementsClassNameTarget = document.getElementsByClassName('target');
console.log(elementsClassNameTarget);
let elementsTagNameDiv = document.getElementsByTagName('div');
console.log(elementsTagNameDiv);
let forms = document.forms;
// let f1:HTMLFormElement = forms[0];
// console.log(f1.username);
let f1 = forms[0];
console.log(f1['username']);
let newSids = [
    {
        hybrid: 'Arlen',
        originator: 'ART Agro',
        growing: 'Services'
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
for (const product of newSids) {
    let div = document.createElement('div');
    div.innerText = product.hybrid;
    document.body.append(div);
}
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((cartsObj) => {
    console.log(cartsObj[0].title);
});

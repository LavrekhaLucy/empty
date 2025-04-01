 let elementsClassNameTarget:HTMLCollectionOf<Element> =  document.getElementsByClassName('target');
console.log(elementsClassNameTarget);

 let elementsTagNameDiv:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
 console.log(elementsTagNameDiv);

 let forms:HTMLCollectionOf<HTMLFormElement> = document.forms;

 // let f1:HTMLFormElement = forms[0];
 // console.log(f1.username);

 let f1:HTMLFormElement = forms[0];
 console.log(f1 ['username']);

 // // let f1:HTMLFormElement = forms[2];
 // // console.log(f1.send);


 type newSidsType = { hybrid:string,
     originator: string,
     growing:string}


 let newSids: newSidsType[] = [
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
     let div:HTMLDivElement =document.createElement('div');
     div.innerText = product.hybrid;
     document.body.append(div);

 }

interface Icarts {
     title:string
}

 fetch('https://dummyjson.com/carts')
     .then(res => res.json())
     .then((cartsObj:Icarts[]) =>{
         console.log(cartsObj[0].title);
     });



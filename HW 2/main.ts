type arrayType = string;

        let arrInfo=document.getElementsByClassName('array')[0];

        let array:arrayType []=['Main','Products','About us','Contacts'];
        for (const item of array) {
            let li=document.createElement('li');
            li.innerText=item;
            arrInfo.appendChild(li);
        }

/////////////////////////////////////////////////////////////////////////////
interface Icourses {
    title: string, monthDuration: number
}

let coursesAndDurationArray:Icourses [] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const [key, value] of Object.entries(coursesAndDurationArray)) {
    console.log(key, value);}


////////////////////////////////////////////////////////////////////////////


function addToLocalStorage(arrayName:any,objToAdd:any){
    const localStorageItem:any = localStorage.getItem(arrayName);
    if(!localStorageItem){
        throw new Error('this is not found');
    }
    const array = JSON.parse(localStorageItem);
    if (typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName,JSON.stringify(array))
}
addToLocalStorage('pageVisitInfo',{});

//////////////////////////////////////////////////////////////////////


class Users {
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
    // id:number;
    // name: string;
    // age: number;

    constructor(private _id: number, private _name: string, private _age: number) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
    }
}



 let getUsers:Users = new Users (1,  'vasya', 31);
console.log(getUsers);

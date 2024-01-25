import {Invoice} from './classes/Invoice.js'
import { ListTemplete } from './classes/ListTemplete.js';
import {Payment} from './classes/Payment.js';
import { HasFormater } from './interfaces/HasFormater.js';

// 
const ul = document.querySelector('ul')!;
const list = new ListTemplete(ul);

const form  = document.querySelector('.new-item-form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    let values :[string, string, number]
     values = [toForm.value, details.value, amount.valueAsNumber];

    let doc: HasFormater;

    if(type.value === 'invoice'){
        // doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }else{
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end')
    
})


// GENERICS 

const addUId  = <T extends {name:string, age:number,}>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid};
}
let docOne = addUId({name:'sujan', age:25})

console.log(docOne.age)

// interface

// ENUMS
enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}


interface Resource <T>{
    uid:number,
    resourceName:ResourceType,
    data: T;
}


const doc3 :Resource<Date> ={
    uid:1,
    resourceName:ResourceType.AUTHOR,
    data: new Date(),
}


const doc4 : Resource<string[]> ={
    uid:2,
    resourceName:ResourceType.DIRECTOR,
    data : ["bread", "milk"]
}

console.log(doc3, doc4)


// TUPLES

let  arr = ['ryu', 25, true];
arr[0]=false;
arr[1]='yoshi';
arr = [30, false, 'yoshi']


let tup: [string, number, boolean] = ['sujan', 25, true]
tup[0] = "rijal"
tup[1] = 25;
tup[2] = true;


let student : [string, number];
// student = [12345, "chun-li"]
student = ['chun-li', 225]



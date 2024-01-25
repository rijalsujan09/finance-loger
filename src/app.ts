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

    let doc: HasFormater;

    if(type.value === 'invoice'){
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end')
    
})
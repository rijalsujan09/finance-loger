import { Invoice } from './classes/Invoice.js';
import { ListTemplete } from './classes/ListTemplete.js';
import { Payment } from './classes/Payment.js';
// 
const ul = document.querySelector('ul');
const list = new ListTemplete(ul);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

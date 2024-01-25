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
    let values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS 
const addUId = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUId({ name: 'sujan', age: 25 });
console.log(docOne.age);
// interface
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc3 = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: new Date(),
};
const doc4 = {
    uid: 2,
    resourceName: ResourceType.DIRECTOR,
    data: ["bread", "milk"]
};
console.log(doc3, doc4);
// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['sujan', 25, true];
tup[0] = "rijal";
tup[1] = 25;
tup[2] = true;
let student;
// student = [12345, "chun-li"]
student = ['chun-li', 225];

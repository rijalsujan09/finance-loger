class Invoice {
    client :string;
    details:string;
    amount:number;

    constructor(c:string, d:string, a:number){

        this.client  =c;
        this.details =d;
        this.amount  =a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`; 
    }
}


const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('sujan', 'work on sujan website', 350);

// console.log(invOne, invTwo)

let invoices:Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.amount = 600;

console.log(invoices)


const form  = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.valueAsNumber
    );
})
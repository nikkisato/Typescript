//const anchor = document.querySelector('a');
//const anchor = document.querySelector('a')!;
//!  not null
//if (anchor) {
//  console.log(anchor.href);
//}
//console.log(anchor.href);
//interfaces
//interface IsPerson {
//  name: string;
//  age: number;
//  speak(a: string): void;
//  spend(a: number): number;
//}
//const me: IsPerson = {
//  name: 'hi',
//  age: 23,
//  speak: (text: string): void => {
//    console.log(text);
//  },
//  spend: (amount: number): number => {
//    console.log('I spent', amount);
//    return amount;
//  },
//};
//console.log(me);
//let docOne: HasFormatter;
//let docTwo: HasFormatter;
//docOne = new Invoice('yoshi', 'web work', 250);
//docTwo = new Payment('Mario', 'plumbing work', 200);
//let docs: HasFormatter[] = [];
//docs.push(docOne);
//docs.push(docTwo);
//Classes
//const invOne = new Invoice('mario', 'Works on the Mario website', 250);
//const invTwo = new Invoice('Luigi', 'Works on the Luigi website', 300);
//let invoices: Invoice[] = [];
//invoices.push(invOne);
//invoices.push(invTwo);
////invOne.client = 'yoshi';
//invTwo.amount = 40;
//console.log(invOne, invTwo);
//console.log(invoices);
//const form = document.querySelector('form');
import { Invoice } from './classes/Invoice';
import { Payment } from './classes/Payment';
import { ListTemplate } from './classes/ListTemplate';
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

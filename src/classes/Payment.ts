import { HasFormater } from "../interfaces/HasFormater.js"

export class Payment implements HasFormater{
    constructor(
        readonly recipient:string,
        public details: string,
        public amount:number,
    ){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`; 
    }
}
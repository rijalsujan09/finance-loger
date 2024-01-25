import { HasFormater } from "../interfaces/HasFormater"

export class ListTemplete {
    constructor(private container: HTMLUListElement){
    }

    render(item:HasFormater, heading:string, pos:'start'|'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p)


        if (pos === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}
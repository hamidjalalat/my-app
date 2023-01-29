import * as Interfaces from '../interfaces/item1';

export class Item implements Interfaces.Item {

    public constructor(name: string, price: number, count: number) {

        this.name = name;
        this.price = price;
        this.count = count;

    }

    public name: string;
    public price: number;
    public count: number;

}

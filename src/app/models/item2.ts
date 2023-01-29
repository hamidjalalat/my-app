import * as Interfaces from '../interfaces/item2';

export class Item implements Interfaces.Item {

    public constructor(name: string, price: number, count: number) {

        this.name = name;
        this.price = price;
        this.count = count;

    }

    public name: string;
    public price: number;
    public count: number;

    public plus(): void {

        if (this.count < 10) {

            this.count++;

        }

    }

    public minus(): void {

        if (this.count > 0) {

            this.count--;

        }

    }

    public getSubTotal(): number {

        let result: number =
            this.count * this.price;

        if (this.count >= 6) {

            result *= 0.95;

        }

        return result;

    }

}

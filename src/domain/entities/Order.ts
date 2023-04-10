import { v4 as uuidv4 } from "uuid";
import Dinero from "dinero.js";
import Item from "src/domain/entities/Item";

export default class Order {
    constructor(private items: Item[], private id: string = uuidv4()) { }

    public getItems(): Item[] {
        return this.items;
    }

    public getTotalPrice(): Dinero.Dinero {
        return this.items.reduce((total, item) => total.add(item.getPizza().getPrice()), Dinero({ amount: 0, currency: "BRL" }));
    }

    public getId() { return this.id }
}

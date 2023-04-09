import Item from "src/domain/entities/Item";

export default class Order {
    constructor(private items: Item[]) { }

    public getItems(): Item[] { return this.items }

    public getTotalPrice(): number {
        return this.getItems().reduce((total, item) => total + item.getPizza().getPrice().getAmount(), 0);
    }
}
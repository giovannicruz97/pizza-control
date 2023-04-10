import { Item, Pizza } from "src/domain/entities";
import ItemRepository from "src/domain/repositories/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
    private items: Item[];

    constructor() {
        this.items = [];
    }

    getItems(): Item[] {
        return this.items;
    }

    create(pizza: Pizza, quantity: number): Promise<Item> {
        const item = new Item(pizza, quantity);
        this.items.push(item);
        return Promise.resolve(item);
    }
}
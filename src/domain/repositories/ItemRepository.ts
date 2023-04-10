import { Item, Pizza } from "src/domain/entities";


export default interface ItemRepository {
    create(pizza: Pizza, quantity: number): Promise<Item>
}
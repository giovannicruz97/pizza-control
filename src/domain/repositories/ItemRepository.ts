import Item from "src/domain/entities/Item";


export default interface ItemRepository {
    create(): Item
}
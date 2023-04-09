import Pizza from "src/domain/entities/Pizza";

export default class Item {
    constructor(private pizza: Pizza, private quantity: number) { }

    public getPizza(): Pizza { return this.pizza }
    public getQuantity(): number { return this.quantity }
}
import Dinero from "dinero.js";

export default class Pizza {
    private name: string;
    private price: Dinero.Dinero;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = Dinero({ amount: price, currency: "BRL" });
    }

    public getName(): string { return this.name }
    public getPrice(): Dinero.Dinero { return this.price }
}
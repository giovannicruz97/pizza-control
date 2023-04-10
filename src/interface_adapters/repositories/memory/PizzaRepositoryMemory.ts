import { Pizza } from "src/domain/entities";
import PizzaRepository from "src/domain/repositories/PizzaRepository";

export default class PizzaRepositoryMemory implements PizzaRepository {
    private pizzas: Pizza[];

    constructor() {
        this.pizzas = [
            new Pizza("Margherita", 5),
            new Pizza("Bufala", 6),
            new Pizza("Romana", 5),
            new Pizza("Diavola", 7.5),
            new Pizza("Pizza Bianca", 5)
        ];
    }

    create(name: string, price: number): Promise<Pizza> {
        const pizza = new Pizza(name, price);
        this.pizzas.push(pizza)
        return Promise.resolve(pizza);
    }

    getAll(): Promise<Pizza[]> {
        return Promise.resolve(this.pizzas)
    }

    getByName(name: string): Promise<Pizza> {
        const found = this.pizzas.find(pizza => pizza.getName() === name)
        if (!found) throw new Error(`Pizza name ${name} not found`);
        return Promise.resolve(found);
    }
}
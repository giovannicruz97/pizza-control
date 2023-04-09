import PizzaRepository from "src/domain/repositories/PizzaRepository";
import { ListPizzasResponse } from "src/domain/use_cases/Responses/ListaPizzasResponse";


export default class ListPizzasUsesCase {
    constructor(private pizzaRepository: PizzaRepository) { }

    public async execute(): Promise<ListPizzasResponse> {
        return { pizzas: await this.pizzaRepository.getAll() };
    }
}
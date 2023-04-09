import Pizza from "src/domain/entities/Pizza";

export default interface PizzaRepository {
    create(): Pizza,
    getByName(name: string): Pizza
}
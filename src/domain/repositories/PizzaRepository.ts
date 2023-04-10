import Pizza from "src/domain/entities/Pizza";

export default interface PizzaRepository {
    create(name: string, price: number): Promise<Pizza>,
    getByName(name: string): Promise<Pizza>,
    getAll(): Promise<Pizza[]>
}
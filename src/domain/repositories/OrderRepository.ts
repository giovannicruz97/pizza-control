import { Order } from "src/domain/entities";

export default interface OrderRepository {
    getById(id: string): Promise<Order>,
    getAll(): Promise<Order[]>
}
import { Order } from "src/domain/entities";
import OrderRepository from "src/domain/repositories/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[];

    constructor() {
        this.orders = [];
    }

    save(order: Order) {
        this.orders.push(order);
    }

    getAll(): Promise<Order[]> {
        return Promise.resolve(this.orders);
    }

    getById(id: string): Promise<Order> {
        const found = this.orders.find((order) => order.getId() === id);
        if (!found) throw new Error(`Order ID ${id} not found`);
        return Promise.resolve(found);
    }
}
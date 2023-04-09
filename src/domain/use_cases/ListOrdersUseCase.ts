import OrderRepository from "src/domain/repositories/OrderRepository";
import { ListOrdersResponse } from "src/domain/use_cases/Responses/ListOrdersResponse";


export default class ListOrdersUseCase {
    constructor(private orderRepository: OrderRepository) { }

    public async execute(): Promise<ListOrdersResponse> {
        return { orders: await this.orderRepository.getAll() };
    }
}
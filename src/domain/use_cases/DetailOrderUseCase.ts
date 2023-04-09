import OrderRepository from "src/domain/repositories/OrderRepository";
import { DetailOrderResponse } from "src/domain/use_cases/Responses/DetailOrderResponse";


export default class DetailOrderUseCase {
    constructor(private orderRepository: OrderRepository) { }

    public async execute(orderId: string): Promise<DetailOrderResponse> {
        return { order: await this.orderRepository.getById(orderId) }
    }
}
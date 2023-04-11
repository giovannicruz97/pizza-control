import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import DetailOrderUseCase from "src/domain/use_cases/DetailOrderUseCase";

export default class ListOrdersController {

    constructor(private detailOrderUseCase: DetailOrderUseCase) { }

    public async handle(req: Request, res: Response) {
        try {
            const orderId = req.get('orderId')
            if (!orderId) throw new Error("Order ID is required!");
            const useCaseResponse = await this.detailOrderUseCase.execute(orderId);
            res.status(StatusCodes.OK).json(useCaseResponse);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong"
            })
        }
    }
}
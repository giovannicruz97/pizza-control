import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import ListOrdersUseCase from "src/domain/use_cases/ListOrdersUseCase";

export default class ListOrdersController {

    constructor(private listOrdersUseCase: ListOrdersUseCase) { }

    public async handle(req: Request, res: Response) {
        try {
            const useCaseResponse = await this.listOrdersUseCase.execute();
            res.status(StatusCodes.OK).json(useCaseResponse);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong"
            })
        }
    }
}
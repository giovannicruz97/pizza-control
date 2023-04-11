import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import ListPizzasUsesCase from "src/domain/use_cases/ListPizzasUseCase";

export default class ListPizzasController {

    constructor(private listPizzasUseCase: ListPizzasUsesCase) { }

    public async handle(req: Request, res: Response) {
        try {
            const useCaseResponse = await this.listPizzasUseCase.execute();
            res.status(StatusCodes.OK).json(useCaseResponse);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong"
            })
        }
    }
}
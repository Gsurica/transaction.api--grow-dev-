import { Request, Response } from "express";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { GetOneTransactionUsecase } from "../usecases/GetOneTransactionUsecase";

export class FindOneTransactionController {
  async handle(request: Request, response: Response) {
    const findOne = new GetOneTransactionUsecase(new TransactionRepository())
    const { transaction_id } = request.params
    const transaction = await findOne.execute({ transaction_id })
    return response.json(transaction)
  }
}
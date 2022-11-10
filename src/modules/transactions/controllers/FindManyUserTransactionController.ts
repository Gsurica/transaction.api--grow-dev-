import { Request, Response } from "express";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { GetAllUserTransactions } from "../usecases/GetAllUserTransactions";

export class FindManyUserTransactionController {
  async handle(request: Request, response: Response) {
    const findMany = new GetAllUserTransactions(new TransactionRepository())
    const { user_id } = request.params
    const transactions = await findMany.execute({ user_id })
    return response.json(transactions)
  }
}
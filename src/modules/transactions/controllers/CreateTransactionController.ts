import { Request, Response } from "express";
import { TransactionRepository } from "../repositories/TransactionRepository";
import { CreateTRansactionUsecase } from "../usecases/CreateTRansactionUsecase";

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const createTransaction = new CreateTRansactionUsecase(new TransactionRepository())
    const { user, titulo, value, tipo } = request.body
    const transaction = await createTransaction.execute({ user, titulo, value, tipo })
    return response.status(201).json(transaction)
  }
}
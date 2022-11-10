import { FindManyTransactionDTO } from "../interfaces/DTOs/FindManyTransactionDTO.";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";

export class GetAllUserTransactions {
  constructor(private readonly transactionRepository: ITransactionRepository) {}
  async execute({ user_id }: FindManyTransactionDTO) {
    const transaction = await this.transactionRepository.findMany({ user_id })
    return transaction
  }
}
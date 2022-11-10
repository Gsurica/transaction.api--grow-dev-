import { CreateTransactionDTO } from "../interfaces/DTOs/CreateTransactionDTO";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";

export class CreateTRansactionUsecase {
  constructor(private readonly transactionRepository: ITransactionRepository) {}
  async execute({ tipo, value, titulo, user }: CreateTransactionDTO) {
    const transaction = await this.transactionRepository.create({ tipo, value, titulo, user })
    return transaction
  }
}
import { FindOneTransactionDTO } from "../interfaces/DTOs/FindOneTransactionDTO";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";

export class GetOneTransactionUsecase {
  constructor(private readonly trnasctionRepository: ITransactionRepository) {}
  async execute({ transaction_id }: FindOneTransactionDTO) {
    const transaction = await this.trnasctionRepository.findOne({ transaction_id })
    return transaction
  }
}
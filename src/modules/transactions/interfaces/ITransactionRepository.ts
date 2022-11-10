import { CreateTransactionDTO } from "./DTOs/CreateTransactionDTO";
import { FindManyTransactionDTO } from "./DTOs/FindManyTransactionDTO.";
import { FindOneTransactionDTO } from "./DTOs/FindOneTransactionDTO";

export interface ITransactionRepository {

  create({ titulo, value, tipo, user }: CreateTransactionDTO) 
  findOne({ transaction_id }: FindOneTransactionDTO)
  findMany({ user_id }: FindManyTransactionDTO)

}
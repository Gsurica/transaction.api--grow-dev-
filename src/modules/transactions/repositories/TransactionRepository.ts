import { CreateTransactionDTO } from "../interfaces/DTOs/CreateTransactionDTO";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";
import { pool } from '../../../shared/database/index'
import { Transaction } from "../entities/Transaction";
import { FindOneTransactionDTO } from "../interfaces/DTOs/FindOneTransactionDTO";
import { FindManyTransactionDTO } from "../interfaces/DTOs/FindManyTransactionDTO.";

export class TransactionRepository implements ITransactionRepository{
  
  async findOne({ transaction_id }: FindOneTransactionDTO) {
    const query = await pool.query(`SELECT * FROM public."transaction" WHERE id = '${transaction_id}'`)
    return query.rows
  }

  async create({ tipo, titulo, user, value }: CreateTransactionDTO) {
    const transaction = new Transaction(titulo, value, tipo, user)
    const query = await pool.query(`INSERT INTO public."transaction" (titulo, value, tipo, id_user) VALUES ('${transaction.titulo}', '${transaction.value}', '${transaction.tipo}', '${transaction.user}')`)
    return query.rows
  }

  async findMany({ user_id }: FindManyTransactionDTO) {
    const query = await pool.query(`SELECT * FROM public."transaction" WHERE id_user = '${user_id}'`)
    return query.rows
  }

}
import { pool } from "../../../shared/database";
import { User } from "../entities/User";
import { findOneDTO } from "../interfaces/DTOs/findOneDTO";

export class UserRepository {
  async findMany() {
    const users = await pool.query('SELECT * FROM public."user"')
    return users.rows
  }

  async create({ nome, cpf, email, idade }) {
    const user = new User(nome, idade, cpf, email)
    const query = await pool.query(`INSERT INTO public."user" (nome, cpf, email, idade) values ('${user.nome}', '${user.cpf}', '${user.email}', '${user.idade}');`)
    return query.rows
  }

  async findOne({ id }: findOneDTO) {
    const query = await pool.query(`SELECT * FROM public."user" WHERE id = '${id}'`)
    return query.rows
  }

}
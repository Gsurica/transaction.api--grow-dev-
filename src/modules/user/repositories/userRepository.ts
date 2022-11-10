import { QueryResult } from "pg";
import { pool } from "../../../shared/database";
import { User } from "../entities/User";
import { deleteUserDTO } from "../interfaces/DTOs/deleteUserDTO";
import { editUserDTO } from "../interfaces/DTOs/editUserDTO";
import { findOneDTO } from "../interfaces/DTOs/findOneDTO";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
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

  async delete({ id }: deleteUserDTO) {
    const query = await pool.query(`DELETE FROM public."user" WHERE id = '${id}'`)
    return query.rows
  }

  async edit({ id, nome, idade, email }: editUserDTO) {
    const query = await pool.query(`UPDATE public."user" SET nome = '${nome}', email = '${email}', idade = '${idade}' WHERE id = '${id}'`)
    return query.rows
  }

}
import { QueryResult } from "pg"
import { User } from "../entities/User"
import { deleteUserDTO } from "./DTOs/deleteUserDTO"
import { editUserDTO } from "./DTOs/editUserDTO"
import { CreateUserDTO } from "./DTOs/findManyDTO"
import { findOneDTO } from "./DTOs/findOneDTO"

export interface IUserRepository {
  findMany()
  create({ nome, cpf, email, idade }: CreateUserDTO)
  findOne({ id }: findOneDTO)
  delete({ id }: deleteUserDTO)
  edit({ id, nome, email, idade }: editUserDTO)
}
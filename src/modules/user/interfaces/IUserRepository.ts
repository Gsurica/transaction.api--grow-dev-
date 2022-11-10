import { CreateUserDTO } from "./DTOs/findManyDTO"
import { findOneDTO } from "./DTOs/findOneDTO"

export interface IUserRepository {
  findMany()
  create({ nome, cpf, email, idade }: CreateUserDTO)
  findOne({ id }: findOneDTO)
}
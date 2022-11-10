import { CreateUserDTO } from "../interfaces/DTOs/findManyDTO";
import { IUserRepository } from "../interfaces/IUserRepository";

export class CreateUserControllerUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ nome, cpf, email, idade }: CreateUserDTO ) {
    const user = await this.userRepository.create({ nome, cpf, idade, email })
    return user
  }
}
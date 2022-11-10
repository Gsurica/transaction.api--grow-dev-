import { editUserDTO } from "../interfaces/DTOs/editUserDTO";
import { IUserRepository } from "../interfaces/IUserRepository";

export class EditUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ id, nome, idade, email }: editUserDTO) {
    const user = await this.userRepository.edit({ id, nome, email, idade });
    return user
  }
}
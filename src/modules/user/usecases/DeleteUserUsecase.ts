import { deleteUserDTO } from "../interfaces/DTOs/deleteUserDTO";
import { IUserRepository } from "../interfaces/IUserRepository";

export class DeleteUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ id }: deleteUserDTO) {
    const user = await this.userRepository.delete({ id })
    return user
  }
}
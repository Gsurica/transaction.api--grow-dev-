import { findOneDTO } from "../interfaces/findOne";
import { IUserRepository } from "../interfaces/IUserRepository";

export class GetOneUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute({ id }: findOneDTO) {
    const user = await this.userRepository.findOne({ id })
    return user
  }
}
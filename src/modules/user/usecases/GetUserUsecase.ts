import { IUserRepository } from "../interfaces/IUserRepository";

export class GetUserUsecase {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute() {
    const user = await this.userRepository.findMany()
    return user 
  }
}
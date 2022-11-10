import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { DeleteUserUsecase } from "../usecases/DeleteUserUsecase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUser = new DeleteUserUsecase(new UserRepository())
    const { id } = request.body
    const userDeleted = await deleteUser.execute({ id }) 
    return response.status(204).json({ message: 'User deleted', userDeleted })
  }
}
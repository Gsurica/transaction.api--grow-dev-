import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { EditUserUsecase } from "../usecases/EditUserUsecase";

export class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const editUser = new EditUserUsecase(new UserRepository())
    const { id, nome, idade, email } = request.body
    const user = editUser.execute({ id, nome, idade, email })
    return response.json(user)
  }
}
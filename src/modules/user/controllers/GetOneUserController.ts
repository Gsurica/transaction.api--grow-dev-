import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { GetOneUserUsecase } from "../usecases/GetOneUserUsecase";

export class GetOneUserController {
  async handle(request: Request, response: Response) {
    const getOneUser = new GetOneUserUsecase(new UserRepository())
    const { id } = request.params
    const user = await getOneUser.execute({ id })
    return response.json(user)
  }
}
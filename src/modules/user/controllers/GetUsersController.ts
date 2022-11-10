import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { GetUserUsecase } from "../usecases/GetUserUsecase";

export class GetUserController {
  async handle(request: Request, response: Response) {
    const findManyUsers = new GetUserUsecase(new UserRepository())
    const users = await findManyUsers.execute()
    return response.json(users)
  }
}
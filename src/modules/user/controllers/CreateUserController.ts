import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { CreateUserControllerUseCase } from "../usecases/CreateUserControllerUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserUseccase = new CreateUserControllerUseCase(new UserRepository())
    const { nome, email, cpf, idade } = request.body
    const user = await createUserUseccase.execute({ nome, email, cpf, idade })
    return response.status(201).json(user)
  }
}
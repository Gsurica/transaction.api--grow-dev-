import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import { GetOneUserController } from '../controllers/GetOneUserController';
import { GetUserController } from '../controllers/GetUsersController';

const userRouter = Router();

const createUserController = new CreateUserController()
const findManyUsers = new GetUserController()
const findOneUser = new GetOneUserController()

userRouter.post('/', createUserController.handle)
userRouter.get('/', findManyUsers.handle)
userRouter.get('/:id', findOneUser.handle)

export { userRouter };

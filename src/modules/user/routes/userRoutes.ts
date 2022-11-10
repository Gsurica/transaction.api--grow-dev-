import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { EditUserController } from '../controllers/EditUserController';
import { GetOneUserController } from '../controllers/GetOneUserController';
import { GetUserController } from '../controllers/GetUsersController';

const userRouter = Router();

const createUserController = new CreateUserController()
const findManyUsers = new GetUserController()
const findOneUser = new GetOneUserController()
const deleteUser = new DeleteUserController()
const editUser = new EditUserController()

userRouter.post('/', createUserController.handle)
userRouter.get('/', findManyUsers.handle)
userRouter.get('/:id', findOneUser.handle)
userRouter.delete('/', deleteUser.handle)
userRouter.put('/', editUser.handle)

export { userRouter };

import { Router } from "express";

import { CreateTransactionController } from "../controllers/CreateTransactionController";
import { FindOneTransactionController } from "../controllers/FindOneTransactionController";
import { FindManyUserTransactionController } from "../controllers/FindManyUserTransactionController";

const transactionRoutes = Router()
const createTransaction = new CreateTransactionController()
const findOne =  new FindOneTransactionController()
const findMany = new FindManyUserTransactionController()

transactionRoutes.post('/', createTransaction.handle)
transactionRoutes.get('/:user_id', findMany.handle)
transactionRoutes.get('/:transaction_id', findOne.handle)

export { transactionRoutes }
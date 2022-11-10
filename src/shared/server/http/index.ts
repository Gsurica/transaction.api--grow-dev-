import express from 'express';
import { userRouter } from '../../../modules/user/routes/userRoutes';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(3333, () => {
    console.log('connect')
});
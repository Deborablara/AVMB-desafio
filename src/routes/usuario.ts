import express, { Router } from 'express';
import { getUserId, getUserRepositories } from '../controllers/usuario';


const userRouter: Router = express.Router();

userRouter.get('/id', getUserId);
userRouter.post('/repositorios', getUserRepositories);

export default userRouter;

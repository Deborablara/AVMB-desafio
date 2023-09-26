import express, { Router } from 'express';
import { getUserId, getUserRepositories } from '../../controllers/usuario';


const usuarioRouter: Router = express.Router();

usuarioRouter.get('/id', getUserId);
usuarioRouter.post('/repositorios', getUserRepositories);

export default usuarioRouter;

import express, { Router } from 'express';
import {
  getUserData,
  getUserId,
  getUserRepositories
} from '../../controllers/usuario';


const usuarioRouter: Router = express.Router();

usuarioRouter.post('/id', getUserId);
usuarioRouter.post('/', getUserData);
usuarioRouter.post('/repositorios', getUserRepositories);

export default usuarioRouter;

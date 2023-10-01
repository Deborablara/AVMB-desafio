import express, { Router } from 'express';
import { getDadosRepositorio } from '../../controllers/repositorio';


const repositorioRouter: Router = express.Router();

repositorioRouter.post('/id', getDadosRepositorio);


export default repositorioRouter;

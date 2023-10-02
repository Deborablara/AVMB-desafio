import express, { Router } from 'express';
import { getRepositoryData } from '../controllers/repositorio';


const repositorioRouter: Router = express.Router();

repositorioRouter.post('/id', getRepositoryData);


export default repositorioRouter;

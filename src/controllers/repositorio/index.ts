import { Request, Response } from 'express';
import { getRepositorio } from '../../services/repositorio';


export const getDadosRepositorio = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const repositorioData = await getRepositorio(requestData);
    res.status(200).json(repositorioData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


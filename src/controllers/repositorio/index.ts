import { Request, Response } from 'express';
import { getRepository } from '../../services/repositorio';


export const getRepositoryData = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const repositorioData = await getRepository(requestData);
    res.status(200).json(repositorioData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


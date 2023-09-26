import { Request, Response } from 'express';
import { getId, getUserRepos } from '../services/usuario';


export const getUserId = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await getId(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserRepositories = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await getUserRepos(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import { Request, Response } from 'express';
import { getId, getUserRepos, getUser } from '../../services/usuario';


export const getUserId = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const userIdData = await getId(requestData);
    res.status(200).json(userIdData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getUserData = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const userData = await getUser(requestData);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserRepositories = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const repositoriosData = await getUserRepos(requestData);
    res.status(200).json(repositoriosData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

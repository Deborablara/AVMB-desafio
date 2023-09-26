import { Request, Response } from 'express';
import {
  addSignatario,
  forwardForSignature,
  getEnvelopesByRepoId,
  newEnvelope,
  viewEnvelope
} from '../../services/envelope';


export const createEnvelope = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await newEnvelope(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEnvelope = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await viewEnvelope(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEnvelopesByRepo = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await getEnvelopesByRepoId(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addSignatarioToEnvelope = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await addSignatario(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const forwardEnvelopeForSignature = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await forwardForSignature(requestData);
    res.status(200).json(envelopeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

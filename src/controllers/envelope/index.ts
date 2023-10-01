import { Request, Response } from 'express';
import {
  addSignatario,
  forwardForSignature,
  getEnvelopesByRepoId,
  newEnvelope,
  processUploadDocumento,
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

export const uploadDocumento = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }
  try {
    const fileInfo = await processUploadDocumento(req.file);
    res.status(200).json({
      message: 'Arquivo enviado com sucesso',
      fileInfo: fileInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao processar o arquivo.');
  }
};


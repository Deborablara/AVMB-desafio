import { Request, Response } from 'express';
import {
  addSignatario,
  findDocument,
  forwardForSignature,
  getEnvelopesByRepoId,
  getSignatariosById,
  newEnvelope,
  processUploadDocument,
  viewEnvelope
} from '../../services/envelope';


export const createEnvelope = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const envelopeData = await newEnvelope(requestData);
    res.status(201).json(envelopeData);
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

export const getSignatariosByEnvelope = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const signatarios = await getSignatariosById(requestData);
    res.status(200).json(signatarios);
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
    const response = await addSignatario(requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const forwardEnvelopeForSignature = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const response = await forwardForSignature(requestData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const uploadDocument = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }
  try {
    const fileInfo = await processUploadDocument(req.file);
    res.status(200).json({
      message: 'Arquivo enviado com sucesso',
      fileInfo: fileInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao processar o arquivo.');
  }
};

export const findDocumentByEnvelopeId = async (req: Request, res: Response) => {
  try {
    const requestData = req.body;
    const documento = await findDocument(requestData.params.envelope_id);
    res.status(200).json(documento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


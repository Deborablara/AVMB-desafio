import express, { Router } from 'express';
import {
  addSignatarioToEnvelope,
  buscarDocumentoByEnvelopeId,
  createEnvelope,
  forwardEnvelopeForSignature,
  getEnvelope,
  getEnvelopesByRepo,
  getSignatariosByEnvelope,
  uploadDocumento
} from '../../controllers/envelope';
import upload from '../../config/upload';


const envelopeRouter: Router = express.Router();

envelopeRouter.post('/new', createEnvelope);
envelopeRouter.post('/view', getEnvelope);
envelopeRouter.post('/by-repo', getEnvelopesByRepo);
envelopeRouter.post('/signatario', addSignatarioToEnvelope);
envelopeRouter.post('/forward-for-signature', forwardEnvelopeForSignature);
envelopeRouter.post('/upload', upload.single('file'), uploadDocumento);
envelopeRouter.post('/documento', buscarDocumentoByEnvelopeId);
envelopeRouter.post('/signatarios', getSignatariosByEnvelope);

export default envelopeRouter;

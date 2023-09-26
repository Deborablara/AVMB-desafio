import express, { Router } from 'express';
import {
  addSignatarioToEnvelope,
  createEnvelope,
  forwardEnvelopeForSignature,
  getEnvelope,
  getEnvelopesByRepo
} from '../../controllers/envelope';


const envelopeRouter: Router = express.Router();

envelopeRouter.post('/new', createEnvelope);
envelopeRouter.post('/view', getEnvelope);
envelopeRouter.post('/by-repo', getEnvelopesByRepo);
envelopeRouter.post('/signatario', addSignatarioToEnvelope);
envelopeRouter.post('/forward-for-signature', forwardEnvelopeForSignature);

export default envelopeRouter;

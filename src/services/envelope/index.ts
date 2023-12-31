import axios, { AxiosResponse } from 'axios';
import fs from 'fs';
import { apiURL } from '../../utils/api';
import { APIData, APIResponse, EnvelopeApiResponse } from '../types/api';
import { createDocumentInDatabase, createEnvelopeInDatabase, getDocumentByEnvelopeId } from '../../database/envelope';
import { FormEnvelopeData } from './types';


export const newEnvelope = async (data: FormEnvelopeData): Promise<APIResponse> => {
  const doc = data.params.Envelope.listaDocumentos;
  try {
    const url = `${apiURL}inserirEnvelope`;
    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      await createEnvelopeInDatabase(response.data, data.token);
      await createDocumentInDatabase(doc, response.data.response.data.idEnvelope);
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const viewEnvelope = async (data: APIData): Promise<EnvelopeApiResponse> => {
  try {
    const url = `${apiURL}getDadosEnvelope`;

    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getSignatariosById = async (data: APIData): Promise<EnvelopeApiResponse> => {
  try {
    const url = `${apiURL}getSignatariosPorEnvelope`;

    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getEnvelopesByRepoId = async (data: APIData): Promise<APIResponse> => {
  try {
    const url = `${apiURL}getEnvelopesByRepositorioOuPasta`;

    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const addSignatario = async (data: APIData): Promise<APIResponse> => {
  try {
    const url = `${apiURL}inserirSignatarioEnvelope`;

    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const forwardForSignature = async (data: APIData): Promise<APIResponse> => {
  try {
    const url = `${apiURL}encaminharEnvelopeParaAssinaturas`;

    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};


export const processUploadDocument = (file: Express.Multer.File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const nomeArquivo = file.originalname;
    const mimeType = file.mimetype;

    fs.readFile(file.path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const conteudo = Buffer.from(data).toString('base64');
        resolve({ nomeArquivo, mimeType, conteudo });
      }
    });
  });
};


export const findDocument = async (envelope_id: string): Promise<APIResponse> => {
  try {
    const documentos = await getDocumentByEnvelopeId(envelope_id);

    return {
      status: 200,
      data: documentos,
    };
  } catch (error) {
    throw new Error(error);
  }
};







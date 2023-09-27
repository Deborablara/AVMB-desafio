import axios, { AxiosResponse } from 'axios';
import { APIData, APIResponse, EnvelopeApiResponse } from '../types/api';
import { apiURL, formatData } from '../../utils/api';
import { createEnvelopeInDatabase } from '../../database/envelope';




export const newEnvelope = async (data: APIData): Promise<APIResponse> => {
  try {
    const url = `${apiURL}inserirEnvelope`;
    const formattedData = formatData(data);
    const response: AxiosResponse = await axios.post(url, formattedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      await createEnvelopeInDatabase(response.data);
      return {
        status: response.status,
        data: response.data,
      };
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.error);
  }
};

export const viewEnvelope = async (data: APIData): Promise<EnvelopeApiResponse> => {
  try {
    const url = `${apiURL}getDadosEnvelope`;
    const formattedData = formatData(data);

    const response: AxiosResponse = await axios.post(url, formattedData, {
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
    const formattedData = formatData(data);

    const response: AxiosResponse = await axios.post(url, formattedData, {
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
    const formattedData = formatData(data);

    const response: AxiosResponse = await axios.post(url, formattedData, {
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
    const formattedData = formatData(data);

    const response: AxiosResponse = await axios.post(url, formattedData, {
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

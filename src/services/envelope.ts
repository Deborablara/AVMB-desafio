import axios, { AxiosResponse } from 'axios';
import { APIData, APIResponse } from './types/types';

const apiURL = 'https://plataforma.astenassinatura.com.br/api/';
const token = '274O5Td6rsR5QypP2huHk2OOJfr1FyeQ79p1tt3JCiIoH93GbnkwxF6S60yFQoZwYCzUwZVb-Lk9KvOx1EDnvfIQZw686hf3vJDivb0AfaXOgxUbp8n8vx6mYP1+0CEQmCzH+qStiAw8ZoKtUkawRanFROFIMGxC';


const formatData = (data: APIData): APIData => {
  return {
    token: token,
    params: data,
  };
};

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

export const viewEnvelope = async (data: APIData): Promise<APIResponse> => {
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

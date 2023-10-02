import axios, { AxiosResponse } from 'axios';
import { APIData } from '../types/api';
import { apiURL } from '../../utils/api';




export const getRepository = async (data: APIData) => {
  try {
    const url = `${apiURL}getDadosRepositorio`;

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
    console.error(error);
    throw new Error(error.response.data.error);
  }
};

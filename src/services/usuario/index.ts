import axios from 'axios';
import { apiURL, formatData } from '../../utils/api';


export const getId = async (data: any) => {
  try {
    const url: string = `${apiURL}getIdentificador`;

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data.response;
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getUsuario = async (data: any) => {
  try {
    const url: string = `${apiURL}getDadosUsuario`;

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data.response;
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const getUserRepos = async (data: any) => {
  try {
    const url: string = `${apiURL}getRepositoriosDoUsuario`;

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(JSON.stringify(response.data));
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

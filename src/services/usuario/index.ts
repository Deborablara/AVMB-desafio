import axios from 'axios';
import { apiURL, formatData } from '../../utils/api';


export const getId = async (data: any) => {
  try {
    const url: string = `${apiURL}getIdentificador`;
    const formattedData = formatData(data);

    const response = await axios.post(url, formattedData, {
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

export const getUserRepos = async (data: any) => {
  try {
    const url: string = `${apiURL}getRepositoriosDoUsuario`;
    const formattedData = formatData(data);

    const response = await axios.post(url, formattedData, {
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

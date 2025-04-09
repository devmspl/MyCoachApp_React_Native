import {BASE_URL} from '.';
import {Platform} from 'react-native';



// GET ALL USERS - GET

export const api_getAllUser = async ( token: string ,pageNo: number, pageSIZE: number) => {
    const pageSize = pageSIZE ? pageSIZE : 50;
    const uri = `${BASE_URL}/users/getAll?pageNo=${pageNo}&pageSize=${pageSize}`;
  
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": token,
      },
    }).then(res => res.json());
    if (!response.isSuccess) {
      throw new Error(response.error);
    }
    return response;
  };
  
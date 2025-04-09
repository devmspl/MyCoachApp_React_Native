import { BASE_URL } from '.';
import { Platform } from 'react-native';

// PROFILE UPDATE -> PUT
export const api_update = async (userId: any, token: any, payload: any) => {
  const uri = `${BASE_URL}/users/update/${userId}`;
  const response = await fetch(uri, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

// UPDATE PROFILE
export const api_updateProfile = async (
  userId: string,
  token: string,
  payload: any,
) => {
  const uri = `${BASE_URL}/users/uploadProfile/${userId}`;

  const data = new FormData();
  data.append('image', {
    name: new Date().toDateString(),
    type: 'image/jpeg',
    uri: Platform.OS === 'ios' ? payload.replace('file://', '') : payload,
  });

  const response = await fetch(uri, {
    method: 'PUT',
    headers: {
      'x-access-token': token,
    },
    body: data,
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};



// GET USER BY
export const api_getUserByID = async (
  userId: string,
  token: string,
) => {
  const uri = `${BASE_URL}/users/getById/${userId}`;
  const response = await fetch(uri, {
    headers: {
      'x-access-token': token,
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

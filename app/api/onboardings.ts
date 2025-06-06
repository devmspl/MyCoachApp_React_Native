import {BASE_URL} from '.';
import { store } from '../redux';

// const newToken  =  store?.getState()?.auth?.user?.token;

export const api_onbaordingOne = async (payload: any, token: any) => {
  const uri = `${BASE_URL}/onboarding/personal-details/`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};




export const api_onbaordingTwo = async (payload: any, token: any) => {
  const uri = `${BASE_URL}/onboarding/relationship-status/`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!!!!!');
  }
  return response;
};



export const api_onbaordingThree = async (payload: any, token: any) => {
  const uri = `${BASE_URL}/onboarding/financial-preferences/`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!!!!!');
  }
  return response;
}




export const api_onbaordingFour = async (payload: any, token: any) => {
  const uri = `${BASE_URL}/onboarding/money-quiz/`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!!!!!');
  }
  return response;
}



export const api_onbaordingFive = async (payload: any, token: any) => {
  const uri = `${BASE_URL}/onboarding/bank-details/`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!!!!!');
  }
  return response;
}
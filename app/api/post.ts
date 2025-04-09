import {BASE_URL} from '.';
import {Platform} from 'react-native';

// POST CREATE
export const api_postCreate = async (
  userId: string,
  images: any,
  message: string,
) => {
  const uri = `${BASE_URL}/userpost/create`;

  console.log({uri, userId, images, message});
  const data = new FormData();
  data.append('userId', userId);
  data.append('message', message);
  data.append('files', {
    name: new Date().toDateString(),
    type: 'image/jpeg',
    uri: Platform.OS === 'ios' ? images.replace('file://', '') : images,
  });

  const response = await fetch(uri, {
    method: 'POST',
    body: data,
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};


// GET POSTS-> GET
export const api_getUserPosts = async (id:string) => {
  const uri = `${BASE_URL}/userpost/getPostByUserId/${id}`;
  
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};



// GET POST BY ID -> GET
export const api_getPostById = async (id: string) => {
  const uri = `${BASE_URL}/userpost/getPosts/${id}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};


// GET ALL POSTS - GET

export const api_getAllPosts = async ( ) => {
  const uri = `${BASE_URL}/userpost/getAllPosts`;
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};


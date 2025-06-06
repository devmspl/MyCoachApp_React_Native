import { BASE_URL } from ".";
import { store } from "../redux";

const token = store?.getState()?.auth?.token;

// const newToken  =  store?.getState()?.auth?.user?.token;

export const api_getUserProfile = async () => {
  // console.log("value from store by persistor ==========>>>>>>>",JSON.stringify(value),value);
    // console.log(newToken,"new token ========<<<<<<<<");
    const uri = `${BASE_URL}/profile/`;
    const response = await fetch(uri, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
    }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!!!!!');
  }
  return response;
};
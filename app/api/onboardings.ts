import {BASE_URL} from '.';
 
export const api_onbaordingOne = async (payload: any, token: any) => {
  const uri = `${BASE_URL}/onboarding/personal-details/`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    }, 
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.success) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response; 
}; 
  
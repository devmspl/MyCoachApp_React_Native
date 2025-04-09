import { BASE_URL } from ".";



// SIGNUP -> POST
export const api_signup = async (payload:any) => {
  console.log({payload})
  const data = {
    "fullName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "dob": "string",
    "sex": "string",
    "bio": "string",
    "website": "string",
    ...payload
  }
    const uri = `${BASE_URL}/users/create`; 
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    console.log({response})
    if(!response.isSuccess){
        throw new Error(response.error || 'something went wrong!')
    }
    return response;
  };



    // LOGIN -> POST

export const api_login = async (payload:any) => {
    const uri = `${BASE_URL}/users/login`;
    const response = await fetch(uri, {
      method: "POST",
      headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    if(!response.isSuccess){
        throw new Error(response.error || 'something went wrong!')
    }
    return response;
  };


  // SET NEW PASSWORD -> POST

export const api_setNewPassword = async (newPassword:any, token:any) => {
  const uri = `${BASE_URL}/users/userSetNewPassword`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({newPassword}),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};


// SEND OTP -> POST

// export const api_sendOTP = async (email: any) => {
//   const uri = `${BASE_URL}/users/sendOtp?email=${email}`;
//   const response = await fetch(uri, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());
//   if (!response.isSuccess) {
//     throw new Error(response.error || 'something went wrong!');
//   }
//   return response;
// };

// SEND OTP -> POST

export const api_sendOTP_onBoth = async (email :any, phone: any) => {
  const uri = `${BASE_URL}/users/loginOtp`;
  

  const body = JSON.stringify({
    "phone": phone ,
  "email": email
  })

  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:body,
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

// VERIFY OTP -> POST

export const api_otpVerify = async (otp: any, token: any) => {
  const uri = `${BASE_URL}/users/verifyOtp`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp, token }),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

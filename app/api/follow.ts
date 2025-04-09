import { BASE_URL } from ".";




// GET FOLLOW REQ
export const api_getFollowRequest = async (
    userID: string,
    token: string,
) => {
    const uri = `${BASE_URL}/friendcircle/getByUser/${userID}`;
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
// SEND FOLLOW REQ
export const api_sendFollow = async (
    requestingUserId: string,
    token: string,
) => {
    const uri = `${BASE_URL}/friendcircle/sendFriendRequest/${requestingUserId}`;
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
// DELETE FOLLOW REQ 
export const api_respondFollowReq = async (
    token: string,
    accept: any,
    requestId: string,
) => {
    const uri = `${BASE_URL}/friendcircle/respondFriendRequest/${requestId}?accept=${accept}`;
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
// DELETE FOLLOW REQ 
export const api_deleteFollowReq = async (
    requestingUserId: string,
    token: string,
) => {
    const uri = `${BASE_URL}/friendcircle/removeFriend/${requestingUserId}`;
    const response = await fetch(uri, {
        method: "DELETE",
        headers: {
            'x-access-token': token,
        },
    }).then(res => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error || 'something went wrong!');
    }
    return response;
};

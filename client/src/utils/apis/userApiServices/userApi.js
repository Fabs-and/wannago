//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const postUser = async (user) => {
  try {
    const userToPost = await fetch(`https://wannago-ito3.vercel.app/user`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(user),
    });
    return await userToPost.json();
  } catch (e) {
    console.log(`Error in postAuser function in apiServices. Error: ${e}`);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await fetch(`https://wannago-ito3.vercel.app/user/${id}`);
    return await user.json();
  } catch (e) {
    console.log(
      `Error in getWannaGoByParams function in apiService. Error: ${e}`
    );
  }
};

export const putOwnerToWannaGo = async (body) => {
  const wannaGoId = body[0]
  const userId = body[1];
  try {
    return await fetch(`https://wannago-ito3.vercel.app/wannago/owner`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ wannaGoId, userId }),
    });
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};






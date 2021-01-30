import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT';
const posts = `${BASE}/posts`;
const register = `${BASE}/users/register`;
const loggedInUser = `${BASE}/users/me`;

export async function getUsers() {
  try {
    const { data } = await axios.get(`${ BASE }/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPostsByUser(userId) {
  try {
    const { data } = await axios.get(`${ BASE }/users/${ userId }/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMessagesByUser(userId) {
  try {
    const { data } = await axios.get(`${ BASE }/users/${ userId }/inbox`);
    return data;
  } catch (error) {
    throw error;
  }
}
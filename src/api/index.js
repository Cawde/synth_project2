import axios from 'axios';

const BASE = 'placeholder'

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
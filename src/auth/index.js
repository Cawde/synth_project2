export function getToken() {
  const token = localStorage.getItem('token');
  return token;
}

export function login(token) {
  localStorage.setItem('token', token);
}

export function logOut() {
  localStorage.removeItem('token');
}
import axios from 'axios';


export const login = async (email: string, password: string) => {
  const response = await axios.post('https://reqres.in/api/login', { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post('https://reqres.in/api/register', { email, password });
  return response.data;
};

export const getUser = async (id: number) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  return response.data;
};

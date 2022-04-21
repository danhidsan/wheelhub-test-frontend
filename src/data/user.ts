import { apiClient } from './apiClient';

type UserData = {
  user: string;
  password: string;
  hint?: string;
};

export const createUser = async (user: UserData) => apiClient.post('http://localhost:8080/create', user);
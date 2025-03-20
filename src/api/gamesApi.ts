import apiClient from './apiClient';

export const fetchGames = async () => {
  const response = await apiClient.get('/games');
  return response.data;
};

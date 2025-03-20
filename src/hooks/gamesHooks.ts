import { useQuery } from '@tanstack/react-query';
import { Game } from '../types';
import { fetchGames } from '../api/gamesApi';

export const useGames = () => {
  return useQuery<Game[]>({
    queryKey: ['games'],
    queryFn: fetchGames,
  });
};